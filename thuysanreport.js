
// Helpers
function toYYYYMMDD(dateInput) {
    if (!dateInput) return '';
    if (dateInput instanceof Date) {
        const y = dateInput.getFullYear();
        const m = String(dateInput.getMonth() + 1).padStart(2, '0');
        const d = String(dateInput.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
    if (typeof dateInput === 'string') {
        const s = dateInput.trim();
        if (!s) return '';
        if (s.includes('/')) {
            const [dd, mm, yyyy] = s.split('/');
            if (yyyy && mm && dd) return `${yyyy}-${mm.padStart(2,'0')}-${dd.padStart(2,'0')}`;
        }
        if (s.includes('-')) return s;
        const d = new Date(s);
        if (!isNaN(d.getTime())) return toYYYYMMDD(d);
        return '';
    }
    const d = new Date(dateInput);
    return isNaN(d.getTime()) ? '' : toYYYYMMDD(d);
}

function buildQS(params = {}) {
    if (!params || typeof params !== 'object') return '';
    const q = Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&');
    return q ? `?${q}` : '';
}

async function fetchFishery(endpoint, params = {}) {
    const url = `${THUYSAN_API}${endpoint}${buildQS(params)}`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json();
}

function normalizeSeries(apiData) {
    if (!apiData) return { labels: [], data: [] };
    // Case 1: { labels:[], series:[] }
    if (apiData.labels && apiData.series) return { labels: apiData.labels, data: apiData.series };
    // Case 2: array of {label,value}
    if (Array.isArray(apiData) && apiData.length && apiData[0].label !== undefined && apiData[0].value !== undefined) {
        return { labels: apiData.map(x => x.label), data: apiData.map(x => x.value) };
    }
    // Case 3: array of {name,value} or {name,so_luong}
    if (Array.isArray(apiData) && apiData.length && apiData[0].name !== undefined) {
        return { labels: apiData.map(x => x.name), data: apiData.map(x => (x.value ?? x.so_luong ?? 0)) };
    }
    // Fallback: empty
    return { labels: [], data: [] };
}

let fisheryChartInstances = [];
function destroyFisheryCharts() {
    if (Array.isArray(fisheryChartInstances) && fisheryChartInstances.length) {
        fisheryChartInstances.forEach(c => { try { c.destroy(); } catch {} });
        fisheryChartInstances = [];
    }
}

function createFisheryChart(canvasId, config) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    // Ensure visible size to avoid zero-height render
    if (!canvas.style.height) canvas.style.height = '260px';
    if (!canvas.style.width) canvas.style.width = '100%';
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, config);
    console.log(config);
    fisheryChartInstances.push(chart);
    return chart;
}

async function fetchFisheryAll(fromDate, toDate, wardCode) {
    const StartDate = toYYYYMMDD(fromDate);
    const EndDate = toYYYYMMDD(toDate);
    const IdTinhThanh = tinhQuangTriThuySan;
    const IdXaPhuong = wardCode || 0;

    const common = { StartDate, EndDate, IdTinhThanh, IdXaPhuong };
    const [sanXuatGiong, sanLuongNuoiTrong, sanLuongKhaiThac, sanLuongKhaiThacNoiDia, sanXuatThucAn, kinhDoanhThucAn,
        tongSanLuongKhaiThac, tauCa, coSoSanXuatGiong, coSoNuoiTrong
    ] = await Promise.all([
        fetchFishery('InternalChart/SanXuatGiong', common),
        fetchFishery('InternalChart/SanLuongNuoiTrong', common),
        fetchFishery('InternalChart/SanLuongKhaiThac', common),
        fetchFishery('InternalChart/SanLuongKhaiThacNoiDia', common),
        fetchFishery('InternalChart/SanXuatThucAn', common),
        fetchFishery('InternalChart/KinhDoanhThucAn', common),
        fetchFishery('InternalChart/TongSanLuongKhaiThac', common),
        fetchFishery('InternalChart/TauCa', common),
        fetchFishery('InternalChart/CoSoSanXuatGiong', common),
        fetchFishery('InternalChart/CoSoNuoiTrong', common),
    ]);

    return {
        sanXuatGiong: sanXuatGiong,
        sanLuongNuoiTrong: sanLuongNuoiTrong,
        sanLuongKhaiThac: sanLuongKhaiThac,
        sanLuongKhaiThacNoiDia: sanLuongKhaiThacNoiDia,
        sanXuatThucAn: sanXuatThucAn,
        kinhDoanhThucAn: kinhDoanhThucAn,
        tongSanLuongKhaiThac: tongSanLuongKhaiThac,
        tauCa: tauCa,
        coSoSanXuatGiong: coSoSanXuatGiong,
        coSoNuoiTrong: coSoNuoiTrong,
    };
}

async function renderThuySanReport(tabType, fromDate, toDate, wardCode) {
    const subContent = document.getElementById('dashboardSubContent');
    subContent.innerHTML = '';
    if (typeof destroyFisheryCharts === 'function') destroyFisheryCharts();

    if (dashboardChartInstance) {
        try { dashboardChartInstance.destroy(); } catch {};
        dashboardChartInstance = null;
    }
    document.getElementById('div-ward').setAttribute('style', 'display:flex;');
    document.getElementById('div-province').setAttribute('style', 'display:flex;');

    if (tabType === 'fishery') {
       

        try {
            const results = await fetchFisheryAll(fromDate, toDate, wardCode);

            subContent.innerHTML = `
            <div class="dashboard-cards-row">
               <div class="dashboard-card livestock"><div class="card-title">Tổng sản lượng khai thác</div><div class="card-value">
                   Khai thác biển (tấn): ${results.tongSanLuongKhaiThac?.khaiThacBien}
                   <br>
                   Khai thác nội địa (tấn): ${results.tongSanLuongKhaiThac?.khaiThacNoiDia}
               </div></div>
               <div class="dashboard-card livestock"><div class="card-title">Tàu cá</div><div class="card-value">
                    Tàu cá trên 15m: ${results.tauCa?.tauCa15m}<br>
                    Tàu cá từ 12m đến 15m: ${results.tauCa?.tauCa12m15m}<br>
                    Tàu cá dưới 12m: ${results.tauCa?.tauCa12m}
               </div></div>
               <div class="dashboard-card livestock"><div class="card-title">Cơ sở sản xuất giống</div><div class="card-value">
                    Cơ sở giống đủ điều kiện: ${results.coSoSanXuatGiong?.goDuDieuKien}<br>
                    Cơ sở sản xuất: ${results.coSoSanXuatGiong?.goSanXuat}<br>
                    Cơ sở ương dưỡng: ${results.coSoSanXuatGiong?.goUngDuong}
               </div></div>
               <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi trồng</div><div class="card-value">
                    Cơ sở nuôi trồng đủ điều kiện: ${results.coSoNuoiTrong?.ntDuDieuKien}<br>
                    Cơ sở sinh trưởng: ${results.coSoNuoiTrong?.ntSinhTruong}<br>
                    Cơ sở nuôi trồng: ${results.coSoNuoiTrong?.ntSanXuat}
               </div></div>
           </div>
           
           <div class="dashboard-charts-row" style="display:grid;gap:24px;grid-template-columns: repeat(3, 1fr);">
               <div style="background:#fff;border-radius:12px;padding:18px;">
                   <canvas id="fisheryChart1"></canvas>
               </div>
               <div style="background:#fff;border-radius:12px;padding:18px;">
                   <canvas id="fisheryChart2"></canvas>
               </div>
               <div style="background:#fff;border-radius:12px;padding:18px;">
                   <canvas id="fisheryChart3"></canvas>
               </div>
               <div style="background:#fff;border-radius:12px;padding:18px;">
                   <canvas id="fisheryChart4"></canvas>
               </div>
               <div style="background:#fff;border-radius:12px;padding:18px;">
                   <canvas id="fisheryChart5"></canvas>
               </div>
               <div style="background:#fff;border-radius:12px;padding:18px;">
                   <canvas id="fisheryChart6"></canvas>
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
                createFisheryChart('fisheryChart1', cfg(results.sanXuatGiong, 'Sản xuất giống', 'bar'));
                createFisheryChart('fisheryChart2', cfg(results.sanLuongNuoiTrong, 'Sản lượng nuôi trồng', 'bar'));
                createFisheryChart('fisheryChart3', cfg(results.sanLuongKhaiThac, 'Sản lượng khai thác', 'bar'));
                createFisheryChart('fisheryChart4', cfg(results.sanLuongKhaiThacNoiDia, 'Khai thác nội địa', 'bar'));
                createFisheryChart('fisheryChart5', cfg(results.sanXuatThucAn, 'Sản xuất thức ăn', 'bar'));
                createFisheryChart('fisheryChart6', cfg(results.kinhDoanhThucAn, 'Kinh doanh thức ăn', 'bar'));
            }, 100);
        } catch (err) {
            console.warn('⚠️ Lỗi khi gọi API Thuỷ sản:', err);
        }
    }
}

// Expose to global scope so script.js can call it
// (Ensure this file is loaded before invocation.)
window.renderThuySanReport = renderThuySanReport;
