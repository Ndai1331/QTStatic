async function fetchURLAll(endpoint, params = {}) {
    const url = `${CHANUOI_API}${endpoint}${buildQS(params)}`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json();
}

let channuoiChartInstances = [];
function destroyChannuoiCharts() {
    if (Array.isArray(channuoiChartInstances) && channuoiChartInstances.length) {
        channuoiChartInstances.forEach(c => { try { c.destroy(); } catch {} });
        channuoiChartInstances = [];
    }
}

function createChannuoiChart(canvasId, config) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    // Ensure visible size to avoid zero-height render
    if (!canvas.style.height) canvas.style.height = '260px';
    if (!canvas.style.width) canvas.style.width = '100%';
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, config);
    console.log(config);
    channuoiChartInstances.push(chart);
    return chart;
}

async function fetchAll(fromDate, toDate, wardCode) {
    const StartDate = toYYYYMMDD(fromDate);
    const EndDate = toYYYYMMDD(toDate);
    const IdTinhThanh = tinhQuangTriThuySan;
    const IdXaPhuong = wardCode || 0;

    const common = { StartDate, EndDate, IdTinhThanh, IdXaPhuong };
    const [tongDanGiaSuc,tongDanGiaCam, sanLuongThitGiaSuc, sanLuongThitGiaCam, sanLuongTrung, sanLuongSua, 
        sanLuongnSanXuatThucAn, sanLuongnTieuThuThucAn, dichBenh, tiemPhong, thongKe] = await Promise.all([
        fetchURLAll('InternalChart/TongDan/1', common), // gia súc
        fetchURLAll('InternalChart/TongDan/2', common), // gia cầm
        fetchURLAll('InternalChart/SanLuongThit/1', common),// gia súc
        fetchURLAll('InternalChart/SanLuongThit/2', common),// gia cầm
        fetchURLAll('InternalChart/SanLuongTrung', common),
        fetchURLAll('InternalChart/SanLuongSua', common),
        fetchURLAll('InternalChart/SanLuongnSanXuatThucAn', common),
        fetchURLAll('InternalChart/SanLuongnTieuThuThucAn', common),
        fetchURLAll('InternalChart/DichBenh'),
        fetchURLAll('InternalChart/TiemPhong'),
        fetchURLAll('InternalChart/ThongKe', common),
    ]);
    
    return {
        TongDanGiaSuc: tongDanGiaSuc,
        TongDanGiaCam: tongDanGiaCam,
        sanLuongThitGiaSuc: sanLuongThitGiaSuc,
        sanLuongThitGiaCam: sanLuongThitGiaCam,
        sanLuongTrung: sanLuongTrung,
        sanLuongSua: sanLuongSua,
        sanLuongnSanXuatThucAn: sanLuongnSanXuatThucAn,
        sanLuongnTieuThuThucAn: sanLuongnTieuThuThucAn,
        dichBenh: dichBenh,
        tiemPhong: tiemPhong,
        thongKe: thongKe,
    };
}

async function renderChanNuoiReport(tabType, fromDate, toDate, wardCode) {
    const subContent = document.getElementById('dashboardSubContent');
    subContent.innerHTML = '';
    if (typeof destroyChannuoiCharts === 'function') destroyChannuoiCharts();

    if (dashboardChartInstance) {
        try { dashboardChartInstance.destroy(); } catch {};
        dashboardChartInstance = null;
    }
    document.getElementById('div-ward').setAttribute('style', 'display:flex;');
    document.getElementById('div-province').setAttribute('style', 'display:flex;');

    if (tabType === 'livestock') {
       

        try {
            const results = await fetchAll(fromDate, toDate, wardCode);

            subContent.innerHTML = `
                <div class="dashboard-cards-row">
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số cơ sở nuôi</div><div class="card-value">
                        ${results.thongKe?.tongSoCoSoChanNuoi}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số cơ sở sản xuất thức ăn</div><div class="card-value">
                        ${results.thongKe?.tongCoSoSxTACN}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số cơ sở kinh doanh thức ăn</div><div class="card-value">
                        ${results.thongKe?.tongCoSoKdTACN}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số đàn lợn</div><div class="card-value">
                        ${results.thongKe?.tongDanLon}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số đàn bò</div><div class="card-value">
                        ${results.thongKe?.tongDanBo}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số đàn trâu</div><div class="card-value">
                        ${results.thongKe?.tongDanTrau}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số đàn gia cầm</div><div class="card-value">
                        ${results.thongKe?.tongDanGiaCam}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng cơ sở chăn nuôi gà</div><div class="card-value">
                        ${results.thongKe?.coSoChanNuoiGa}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng cơ sở chăn nuôi vịt</div><div class="card-value">
                        ${results.thongKe?.coSoChanNuoiVit}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng cơ sở chăn nuôi lợn</div><div class="card-value">
                        ${results.thongKe?.coSoChanNuoiLon}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng cơ sở chăn nuôi bò</div><div class="card-value">
                        ${results.thongKe?.coSoChanNuoiBo}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng cơ sở chăn nuôi trâu</div><div class="card-value">
                        ${results.thongKe?.coSoChanNuoiTrau}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng cơ sở chăn nuôi dê</div><div class="card-value">
                        ${results.thongKe?.coSoChanNuoiDe}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số nông hộ</div><div class="card-value">
                        ${results.thongKe?.nongHo}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số trang trại nhỏ</div><div class="card-value">
                        ${results.thongKe?.trangTraiNho}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số trang trại vừa</div><div class="card-value">
                        ${results.thongKe?.trangTraiVua}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng số trang trại lớn</div><div class="card-value">
                        ${results.thongKe?.trangTraiLon}
                    </div></div>
                    
                    <div class="dashboard-card livestock"><div class="card-title">Tổng sản lượng thịt gia súc</div><div class="card-value">
                        ${results.thongKe?.sanLuongThitGiaSuc}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng sản lượng thịt gia cầm</div><div class="card-value">
                        ${results.thongKe?.sanLuongThitGiaCam}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng sản lượng trứng</div><div class="card-value">
                        ${results.thongKe?.sanLuongTrung}
                    </div></div>
                    <div class="dashboard-card livestock"><div class="card-title">Tổng sản lượng sữa</div><div class="card-value">
                        ${results.thongKe?.sanLuongSua}
                    </div></div>
                </div>

                <div class="dashboard-charts-row" style="display:grid;gap:24px;grid-template-columns: repeat(3, 1fr);">
                    <div style="background:#fff;border-radius:12px;padding:18px;">
                        <canvas id="livestock1"></canvas>
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:18px;">
                        <canvas id="livestock2"></canvas>
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:18px;">
                        <canvas id="livestock3"></canvas>
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:18px;">
                        <canvas id="livestock4"></canvas>
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:18px;">
                        <canvas id="livestock5"></canvas>
                    </div>
                    <div style="background:#fff;border-radius:12px;padding:18px;">
                        <canvas id="livestock6"></canvas>
                    </div>
                </div>`;
                
            const colors = ['#4caf50', '#42a5f5', '#ff9800', '#9c27b0', '#009688', '#ff5722', '#607d8b', '#795548'];

            const cfg = (series, title, type = 'bar') => ({
                type,
                data: {
                    labels: series.labels,
                    datasets: [{
                        label: title,
                        data: series.data,
                        backgroundColor: colors.slice(0, Math.max(series.data.length, 1)),
                        borderColor: '#333',
                        borderWidth: type === 'line' ? 2 : 0,
                        fill: type !== 'line' ? true : false,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: title, font: { size: 14 } }
                    },
                    scales: type === 'line' ? { y: { beginAtZero: true } } : { y: { beginAtZero: true } }
                }
            });

            setTimeout(() => {
                createChannuoiChart('livestock1', cfg(results.TongDanGiaSuc, 'Tổng đàn gia súc', 'bar'));
                createChannuoiChart('livestock2', cfg(results.TongDanGiaCam, 'Tổng đàn gia cầm', 'bar'));
                createChannuoiChart('livestock3', cfg(results.sanLuongThitGiaSuc, 'Sản lượng thịt gia súc', 'bar'));
                createChannuoiChart('livestock4', cfg(results.sanLuongThitGiaCam, 'Sản lượng thịt gia cầm', 'bar'));
                createChannuoiChart('livestock5', cfg(results.sanLuongTrung, 'Sản lượng trứng', 'bar'));
                createChannuoiChart('livestock6', cfg(results.sanLuongSua, 'Sản lượng sữa', 'bar'));
            }, 100);

        } catch (err) {
            console.warn('⚠️ Lỗi khi gọi API chăn nuôi:', err);
        }
    }
}

window.renderChanNuoiReport = renderChanNuoiReport;
