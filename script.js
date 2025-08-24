// API Configuration
const API_URL = 'https://quantri-csdlnn.quangtri.gov.vn/items/APP_URL';
const PROVINCES_API = 'https://quantri-csdlnn.quangtri.gov.vn/items/Provinces';
const WARDS_API = 'https://quantri-csdlnn.quangtri.gov.vn/items/Wards';
const TRONGTROT_REPORT_API = 'https://api-csdlnn.quangtri.gov.vn/api/TTDashboard';
const QLCL_REPORT_API = 'https://api-csdlnn.quangtri.gov.vn/api/QLCLDashboard';
const LAMNGHIEP_API = 'https://api-lamnghiep.hpte.vn/api/Dashboard/';

// Authentication token - bạn có thể thay đổi token này
const API_TOKEN = 'udSUDFzxPH3z4G8qXf2vMQpZUEeT3fw-'; // Token thực

// Sample data for when API is not available (CORS issue)
const SAMPLE_DATA = {
    "data": [
        {
            "id": 1,
            "status": "published",
            "sort": null,
            "user_created": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_created": "2025-06-11T01:12:05.043Z",
            "user_updated": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_updated": "2025-06-22T03:10:49.016Z",
            "Name": "Trồng trọt và Bảo vệ thực vật",
            "App_images": "C6AB7AC5-DA9C-4135-B78F-9CAC1712F227",
            "App_Url": "https://csdl.hpte.vn",
            "Note": "Chi cục Trồng trọt và Bảo vệ thực vật là tổ chức hành chính trực thuộc Sở Nông nghiệp và Môi trường, giúp Giám đốc Sở tham mưu cho Ủy ban nhân dân tỉnh thực hiện chức năng quản lý nhà nước chuyên ngành và tổ chức thực thi pháp luật về sản xuất trồng trọt, giống cây trồng nông nghiệp, sử dụng đất để sản xuất nông nghiệp, phân bón, bảo vệ thực vật, kiểm dịch thực vật nội địa, thuốc bảo vệ thực vật, khử trùng và quản lý dịch vụ công thuộc phạm vi lĩnh vực được giao trên địa bàn tỉnh."
        },
        {
            "id": 2,
            "status": "published",
            "sort": null,
            "user_created": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_created": "2025-06-17T01:38:36.776Z",
            "user_updated": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_updated": "2025-06-22T01:43:30.376Z",
            "Name": "QLCL Nông lâm sản và Thủy sản",
            "App_images": "8ADCD899-16F2-457D-9E23-34507FFA6A82",
            "App_Url": "https://qlcl.hpte.vn",
            "Note": "Chi cục Quản lý chất lượng Nông Lâm sản và Thủy sản Quảng Trị là đơn vị hành chính trực thuộc Sở Nông nghiệp và Môi trường tỉnh Quảng Trị. Chi cục có nhiệm vụ tham mưu, giúp Giám đốc Sở thực hiện chức năng quản lý nhà nước chuyên ngành và tổ chức thực thi pháp luật về chất lượng, an toàn thực phẩm trong các lĩnh vực nông, lâm, thủy sản và muối tại địa phương."
        },
        {
            "id": 4,
            "status": "published",
            "sort": null,
            "user_created": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_created": "2025-06-17T11:19:10.106Z",
            "user_updated": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_updated": "2025-06-19T23:51:52.273Z",
            "Name": "Chăn nuôi, Thú y và Thủy sản",
            "App_images": "C6AB7AC5-DA9C-4135-B78F-9CAC1712F227",
            "App_Url": "https://channuoi.azurewebsites.net",
            "Note": "Chi cục Chăn nuôi, Thú y và Thủy sản là tổ chức trực thuộc Sở Nông nghiệp và Môi trường, giúp Giám đốc Sở Nông nghiệp và Môi trường tham mưu với Ủy ban nhân dân tỉnh thực hiện chức năng quản lý nhà nước chuyên ngành và tổ chức thực thi pháp luật về chăn nuôi, thú y và thủy sản trên địa bàn tỉnh."
        },
        {
            "id": 7,
            "status": "published",
            "sort": null,
            "user_created": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_created": "2025-06-22T01:40:18.686Z",
            "user_updated": null,
            "date_updated": null,
            "Name": "Lâm nghiệp",
            "App_images": "C6AB7AC5-DA9C-4135-B78F-9CAC1712F227",
            "App_Url": "https://csdl-lamnghiep.quangtri.gov.vn",
            "Note": "Cơ sở dữ liệu Lâm nghiệp địa bàn Quảng Trị"
        },
        {
            "id": 8,
            "status": "published",
            "sort": null,
            "user_created": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_created": "2025-06-22T01:41:04.520Z",
            "user_updated": null,
            "date_updated": null,
            "Name": "Thuỷ sản",
            "App_images": "C6AB7AC5-DA9C-4135-B78F-9CAC1712F227",
            "App_Url": "https://csdl-thuysan.quangtri.gov.vn/",
            "Note": "Cơ sở dữ liệu Thuỷ sản"
        },
        {
            "id": 9,
            "status": "published",
            "sort": null,
            "user_created": "225B0ED3-207C-4FDA-BC99-4771AD0D5675",
            "date_created": "2025-06-22T01:42:56.696Z",
            "user_updated": null,
            "date_updated": null,
            "Name": "Điều hành",
            "App_images": "C6AB7AC5-DA9C-4135-B78F-9CAC1712F227",
            "App_Url": "https://quantri-csdlnn.quangtri.gov.vn",
            "Note": "Giới thiệu hệ thống dữ liệu dùng chung – Nền tảng kết nối và chia sẻ thông minh! ✔️ Tập trung, chuẩn hóa và đồng bộ dữ liệu giữa các đơn vị. 🔒 Bảo mật cao, phân quyền rõ ràng, đảm bảo an toàn thông tin. 🔄 Kết nối linh hoạt, hỗ trợ liên thông nhiều hệ thống khác nhau. 📊 Tối ưu khai thác dữ liệu, hỗ trợ ra quyết định chính xác, nhanh chóng."
        }
    ]
};

const TRONGTROT_REPORT_FAKE_DATA = {
    "data": [
      {
        "coSoSanXuatPhanBonCount": 5,
        "coSoDuDieuKienBuonBanPhanBonCount": 10,
        "coSoSanXuatThuocBVTVCount": 7,
        "coSoKinhDoanhThuocBVTVCount": 10,
        "viPhamSanXuatKinhDoanhThuocBVTVCount": 11,
        "dienTichThietHaiDoThienTaiDichBenh": {
          "series": [51, 45, 20, 31, 193, 140, 20, 269],
          "labels": [
            "Động đất",
            "Hạn hán",
            "Lũ lụt",
            "Sóng thần",
            "Leptosphaeria maculans",
            "Phytophthora infestans",
            "Plasmodiophora brassicae",
            "Xanthomonas oryzae"
          ],
          "colors": [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
            "#C9CBCF",
            "#FF6384"
          ]
        },
        "sanLuongThietHaiDoThienTaiDichBenh": {
          "series": [326, 555, 70, 67],
          "labels": [
            "Động đất",
            "Hạn hán",
            "Lũ lụt",
            "Sóng thần"
          ],
          "colors": [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0"
          ]
        }
      }
    ],
    "meta": {
      "total_count": 1,
      "filter_count": 1,
      "page": null,
      "page_count": 1,
      "limit": 10,
      "offset": 0,
      "fields": null,
      "sort": [
        "-thang"
      ],
      "filter": {
        "fromDate": null,
        "toDate": null
      }
    },
    "errors": [],
    "isSuccess": true,
    "message": "",
    "statusCode": 200
}

const QLCL_REPORT_FAKE_DATA = {
    "data": [
      {
        "so_luong_co_so": 13,
        "so_luong_co_so_dat_chung_nhan": 22,
        "so_luong_vu_vi_pham": 9,
        "so_dot_kiem_tra": 2,
        "loai_hinh_co_so": [
          {
            "code": "LHCS05",
            "name": "Cơ sở chế biến lâm sản",
            "so_luong_co_so": 0
          },
          {
            "code": "LHCS02",
            "name": "Cơ sở chế biến thủy sản",
            "so_luong_co_so": 1
          },
          {
            "code": "LHCS01",
            "name": "Cơ sở chế biến tổng hợp",
            "so_luong_co_so": 12
          },
          {
            "code": "LHCS04",
            "name": "Cơ sở kinh doanh thực phẩm nông sản",
            "so_luong_co_so": 0
          },
          {
            "code": "LHCS03",
            "name": "Cơ sở sản xuất nông sản",
            "so_luong_co_so": 0
          },
          {
            "code": "LHCS0643",
            "name": "Cơ sở sơ chế ban đầu",
            "so_luong_co_so": 0
          }
        ],
        "gcn_sap_het_han": [
          {
            "id": 19,
            "name": "Cơ sở sản xuất bánh lọc An Khê - Hải Lăng",
            "so_giay_chung_nhan": "CN-ATTP-031",
            "ngay_het_hieu_luc": "2025-08-13T00:00:00",
            "so_ngay_con_lai": 17
          }
        ],
        "so_dot_kiem_tra_theo_thang": [
          {
            "t1": 0,
            "t2": 0,
            "t3": 0,
            "t4": 0,
            "t5": 0,
            "t6": 1,
            "t7": 1,
            "t8": 0,
            "t9": 0,
            "t10": 0,
            "t11": 0,
            "t12": 0
          }
        ]
      }
    ],
    "meta": {
      "total_count": 1,
      "filter_count": 1,
      "page": null,
      "page_count": 1,
      "limit": 10,
      "offset": 0,
      "fields": null,
      "sort": [
        "-thang"
      ],
      "filter": {
        "fromDate": null,
        "toDate": null
      }
    },
    "errors": [],
    "isSuccess": true,
    "message": "",
    "statusCode": 200
}

// DOM Elements
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const modulesGridElement = document.getElementById('modulesGrid');
const modulesContainerElement = document.getElementById('modulesContainer');
const retryBtn = document.getElementById('retryBtn');
const provinceSelect = document.getElementById('provinceSelect');
const wardSelect = document.getElementById('wardSelect');

// Module icons mapping
const moduleIcons = {
    'Trồng trọt và Bảo vệ thực vật': 'fas fa-seedling',
    'QLCL Nông lâm sản và Thủy sản': 'fas fa-award',
    'Chăn nuôi, Thú y và Thủy sản': 'fas fa-paw',
    'Lâm nghiệp': 'fas fa-tree',
    'Thuỷ sản': 'fas fa-fish',
    'Điều hành': 'fas fa-cogs'
};

// Function to get API headers with authentication
function getApiHeaders() {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    
    // Add authorization header if token is provided
    if (API_TOKEN && API_TOKEN !== 'YOUR_API_TOKEN_HERE') {
        headers['Authorization'] = `Bearer ${API_TOKEN}`;
        // Alternative formats for different API types:
        // headers['X-API-Key'] = API_TOKEN;
        // headers['X-Auth-Token'] = API_TOKEN;
    }
    
    return headers;
}

// Convert date string from YYYY-MM-DD (input[type="date"]) to DD/MM/YYYY for API
function toDDMMYYYY(dateString) {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
}

// Build query string from key-value object, ignoring null/undefined/empty values
function buildQueryString(params) {
    const query = Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&');
    return query ? `?${query}` : '';
}

// Small wrapper to fetch JSON with shared headers
async function fetchJson(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: getApiHeaders(),
    });
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status} for ${url}`);
    }
    return response.json();
}

// Format Date object to YYYY-MM-DD for input[type="date"]
function formatDateForInput(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

// Get default date range: from = today - 3 months, to = today
function getDefaultLast3MonthsRange() {
    const to = new Date();
    const from = new Date(to);
    from.setMonth(from.getMonth() - 3);
    return { from, to };
}

// Set default date inputs for dashboard filters
function setDefaultDashboardDateRange() {
    const fromInput = document.getElementById('fromDate');
    const toInput = document.getElementById('toDate');
    if (!fromInput || !toInput) return;
    const { from, to } = getDefaultLast3MonthsRange();
    toInput.value = formatDateForInput(to);
    fromInput.value = formatDateForInput(from);
}

// Call: /GetThongKeDuLieuLamNghiep with FromDate/ToDate
async function fetchLamNghiepDashboard(fromDate, toDate) {
    const f = toDDMMYYYY(fromDate);
    const t = toDDMMYYYY(toDate);
    console.log(f);
    const base = 'https://api-lamnghiep.hpte.vn/api/Dashboard/GetThongKeDuLieuLamNghiep';
    const url = base + buildQueryString({ FromDate:"01/01/2015", ToDate: t });
    return fetchJson(url);
}

// Call: /GetThongTinSuDungRung/{typeId}
async function fetchThongTinSuDungRung(typeId, options) {
    const {
        provinceId = 0,
        districtId = 0,
        year = 0,
        month = 0,
        fromDate,
        toDate,
        isCompareWithPrevMonth = false,
    } = options || {};


    const f = toDDMMYYYY(fromDate);
    const t = toDDMMYYYY(toDate);
    const base = `https://api-lamnghiep.hpte.vn/api/Dashboard/GetThongTinSuDungRung/${typeId}`;
    const url = base + buildQueryString({
        ProvinceId: 0,
        DistrictId: 0,
        Year: 0,
        Month: 0,
        FromDate: f,
        ToDate: t,
        IsCompareWithPrevMonth: isCompareWithPrevMonth,
    });
    return fetchJson(url);
}

// Call all 4 forestry APIs in parallel based on FromDate/ToDate
async function fetchForestryApis(fromDate, toDate, options) {
    // typeIds 0, 3, 2 as per provided URLs
    const common = {
        provinceId: options?.provinceId ?? 0,
        districtId: options?.districtId ?? 0,
        provinceCode: options?.provinceCode ?? '',
        wardCode: options?.wardCode ?? '',
        year: options?.year ?? 0,
        month: options?.month ?? 0,
        fromDate,
        toDate,
        isCompareWithPrevMonth:  false,
    };
    
    const [summary, suDungRung0, suDungRung3, suDungRung2] = await Promise.all([
        fetchLamNghiepDashboard(fromDate, toDate),
        fetchThongTinSuDungRung(0, common),
        fetchThongTinSuDungRung(3, common),
        fetchThongTinSuDungRung(2, common),
    ]);

    return {
        summary,
        suDungRung0,
        suDungRung3,
        suDungRung2,
    };
}

// Function to check if token is configured
function isTokenConfigured() {
    return API_TOKEN && API_TOKEN !== 'YOUR_API_TOKEN_HERE';
}

// Show info message about using sample data
function showInfoMessage(message) {
    // Remove existing info message if any
    const existingInfo = document.querySelector('.info-message');
    if (existingInfo) {
        existingInfo.remove();
    }
    
    // Create info message element
    const infoElement = document.createElement('div');
    infoElement.className = 'info-message';
    infoElement.innerHTML = `
        <div class="info-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
            <button class="info-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Insert after header
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(infoElement, header.nextSibling);
    
    // Auto remove after 15 seconds
    setTimeout(() => {
        if (infoElement.parentNode) {
            infoElement.remove();
        }
    }, 15000);
}

// Check CORS status and show appropriate message
function checkCorsStatus() {
    const currentDomain = window.location.origin;
    const apiDomain = new URL(API_URL).origin;
    
    console.log('🌐 Current domain:', currentDomain);
    console.log('🔗 API domain:', apiDomain);
    console.log('🔑 Token configured:', isTokenConfigured() ? 'Yes' : 'No');
    
    if (currentDomain !== apiDomain) {
        console.log('⚠️ Cross-origin request detected');
        return {
            isCrossOrigin: true,
            currentDomain: currentDomain,
            apiDomain: apiDomain,
            hasToken: isTokenConfigured()
        };
    }
    
    return {
        isCrossOrigin: false,
        currentDomain: currentDomain,
        apiDomain: apiDomain,
        hasToken: isTokenConfigured()
    };
}

// Initialize CORS check
document.addEventListener('DOMContentLoaded', function() {
    const corsStatus = checkCorsStatus();
    // Set default date range: today as ToDate, 3 months ago as FromDate
    setDefaultDashboardDateRange();
    
    if (corsStatus.isCrossOrigin) {
        console.log('🔒 Cross-origin setup detected. CORS errors may occur.');
        console.log('💡 To fix CORS issues:');
        console.log('   1. Configure CORS headers on the API server');
        console.log('   2. Use a proxy server');
        console.log('   3. Deploy frontend and API on the same domain');
        
        if (corsStatus.hasToken) {
            console.log('🔑 Token authentication is configured - this may help with CORS');
        } else {
            console.log('⚠️ No token configured - consider adding API token for better access');
        }
    }
    
    loadModules();
    loadProvinces();
    setupEventListeners();
    setupTabEvents();
});



// Setup event listeners
function setupEventListeners() {
    retryBtn.addEventListener('click', loadModules);
    
    // Province change event
    provinceSelect.addEventListener('change', function() {
        const selectedProvince = this.value;
        if (selectedProvince) {
            loadWards(selectedProvince);
        } else {
            resetWardSelect();
        }
    });
}

// Populate province select
function populateProvinceSelect(provinces) {
    provinceSelect.innerHTML = '<option value="">Chọn tỉnh/thành phố</option>';
    let foundQuangTri = false;
    provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province.id;
        option.textContent = province.name;
        option.setAttribute('data-code', province.code || '');
        if (province.name.toLowerCase().includes('quảng trị')) {
            option.selected = true;
            foundQuangTri = true;
            loadWards(province.id);
        }
        provinceSelect.appendChild(option);
    });
    // Nếu không có Quảng Trị, giữ mặc định
    if (!foundQuangTri && provinces.length > 0) {
        provinceSelect.selectedIndex = 1;
    }
}



// Fake data cho dashboard
const DASHBOARD_FAKE_DATA = {
    agriculture: province => `Sản lượng lúa tại ${province}: 120.000 tấn, diện tích 30.000 ha` ,
    forestry: province => `Diện tích rừng trồng tại ${province}: 50.000 ha, tỷ lệ che phủ 48%` ,
    fishery: province => `Sản lượng thủy sản tại ${province}: 15.000 tấn, tàu cá: 1.200 chiếc` ,
    livestock: province => `Tổng đàn gia súc tại ${province}: 200.000 con, sản lượng thịt: 10.000 tấn` ,
    quality: province => `Số cơ sở đạt chuẩn chất lượng tại ${province}: 120, sản phẩm OCOP: 35` ,
};

// Hiển thị fake data dashboard
function showDashboardFakeData(tabType) {
    const provinceId= provinceSelect.options[provinceSelect.selectedIndex]?.value || '1';
    const wardId= wardSelect.options[wardSelect.selectedIndex]?.value || null;
    const provinceCode= provinceSelect.options[provinceSelect.selectedIndex]?.getAttribute('data-code') || null;
    const wardCode= wardSelect.options[wardSelect.selectedIndex]?.getAttribute('data-code') || null;
    const fromDate= document.getElementById('fromDate').value || null;
    const toDate= document.getElementById('toDate').value || null;
    renderDashboardSubContent(tabType, fromDate, toDate, provinceId, wardId, provinceCode, wardCode);
}

async function renderDashboardSubContent(tabType, fromDate, toDate, province, ward, provinceCode, wardCode) {
    const subContent = document.getElementById('dashboardSubContent');
    subContent.innerHTML = '';
    // Xóa chart cũ nếu có
    if (dashboardChartInstance) {
        dashboardChartInstance.destroy();
        dashboardChartInstance = null;
    }
    document.getElementById('div-ward').setAttribute('style', 'display:flex;');
    document.getElementById('div-province').setAttribute('style', 'display:flex;');

    // Render từng dashboard con theo tab
    if (tabType === 'agriculture') {
        let appendUrl = false;
        let url = TRONGTROT_REPORT_API + '?';
        if(province != null){
            url += `province=${province}`;
            appendUrl= true;
        }
        if(ward != null){
            if(appendUrl){
                url += '&';
            }
            url += `wards=${ward}`;
            appendUrl= true;
        }
        if(fromDate != null){
            if(appendUrl){
                url += '&';
            }
            url += `fromDate=${fromDate}`;
            appendUrl= true;
        }
        if(toDate != null){
            if(appendUrl){
                url += '&';
            }
            url += `toDate=${toDate}`;
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: getApiHeaders(),
        });

        const data = await response.json();

        const dataReport = data.data.length > 0 ? data.data[0] : null;

        if (dataReport) 
        {
            subContent.innerHTML = `
            <div class="dashboard-cards-row">
                <div class="dashboard-card agriculture"><div class="card-icon"><i class="fas fa-industry"></i></div><div class="card-title">Tổng số cơ sở SX phân bón</div><div class="card-value">${dataReport.coSoSanXuatPhanBonCount}</div></div>
                <div class="dashboard-card agriculture"><div class="card-icon"><i class="fas fa-store"></i></div><div class="card-title">Tổng số cơ sở kinh doanh phân bón</div><div class="card-value">${dataReport.coSoDuDieuKienBuonBanPhanBonCount}</div></div>
                <div class="dashboard-card agriculture"><div class="card-icon"><i class="fas fa-flask"></i></div><div class="card-title">Tổng số cơ sở SX thuốc BVTV</div><div class="card-value">${dataReport.coSoSanXuatThuocBVTVCount}</div></div>
                <div class="dashboard-card agriculture"><div class="card-icon"><i class="fas fa-prescription-bottle"></i></div><div class="card-title">Tổng cơ sở kinh doanh thuốc BVTV</div><div class="card-value">${dataReport.coSoKinhDoanhThuocBVTVCount}</div></div>
                <div class="dashboard-card agriculture"><div class="card-icon"><i class="fas fa-exclamation-triangle"></i></div><div class="card-title">Tổng số cơ sở vi phạm SXKD BVTV</div><div class="card-value">${dataReport.viPhamSanXuatKinhDoanhThuocBVTVCount}</div></div>
            </div>
            <div class="dashboard-charts-row" style="display:flex;gap:24px;">
                <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                    <canvas id="agriChart1"></canvas>
                </div>
                <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                    <canvas id="agriChart2"></canvas>
                </div>
            </div>`;
        }

        setTimeout(() => {
            new Chart(document.getElementById('agriChart1').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: dataReport ? dataReport.dienTichThietHaiDoThienTaiDichBenh.labels : ['Động đất', 'Sóng thần', 'Lũ lụt', 'Hạn hán', 'Phytophthora infestans', 'Leptosphaeria maculans', 'Xanthomonas oryzae', 'Plasmodiophora brassicae'],
                    datasets: [{
                        data: dataReport ? dataReport.dienTichThietHaiDoThienTaiDichBenh.series : [6.6, 4.0, 5.9, 18.2, 25.1, 35.0, 4.0, 1.2],
                        backgroundColor: dataReport ? dataReport.dienTichThietHaiDoThienTaiDichBenh.colors : ['#f66', '#6cf', '#fc6', '#6fc', '#a6f', '#ccc', '#f90', '#f9c'],
                    }]
                },
                options: {
                    plugins: {
                        legend: { position: 'bottom' },
                        title: { display: true, text: 'Tổng Số Diện Tích (Ha) Thiệt Hại Do Thiên Tai/Do Dịch Bệnh', font: { size: 16 } }
                    }
                }
            });
            new Chart(document.getElementById('agriChart2').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: dataReport ? dataReport.sanLuongThietHaiDoThienTaiDichBenh.labels : ['Động đất', 'Sóng thần', 'Lũ lụt', 'Hạn hán'],
                    datasets: [{
                        data: dataReport ? dataReport.sanLuongThietHaiDoThienTaiDichBenh.series : [32, 6.6, 6.9, 54.5],
                        backgroundColor: dataReport ? dataReport.sanLuongThietHaiDoThienTaiDichBenh.colors : ['#f66', '#6cf', '#fc6', '#6fc'],
                    }]
                },
                options: {
                    plugins: {
                        legend: { position: 'bottom' },
                        title: { display: true, text: 'Tổng Số Sản Lượng(Ha) Thiệt Hại Do Thiên Tai/Do Dịch Bệnh', font: { size: 16 } }
                    }
                }
            });
        }, 100);
    } else if (tabType === 'forestry') {
        try {
            const results = await fetchForestryApis(fromDate, toDate, {
                provinceCode: provinceCode,
                wardCode: wardCode,
            });

            if(results.summary != null)
            {
                subContent.innerHTML = `
                    <div class="dashboard-cards-row">
                        <div class="dashboard-card forestry"><div class="card-title">TỔNG DIỆN TÍCH RỪNG (HA)</div><div class="card-value">${results.summary.tongDienTichRung}</div></div>
                        <div class="dashboard-card forestry"><div class="card-title">TỔNG LOÀI ĐỘNG VẬT</div><div class="card-value">${results.summary.tongSoLoaiDongVat}</div></div>
                        <div class="dashboard-card forestry"><div class="card-title">TỔNG SỐ LOÀI THỰC VẬT</div><div class="card-value">${results.summary.tongSoLoaiThucVat}</div></div>
                        <div class="dashboard-card forestry"><div class="card-title">TỔNG SỐ LOÀI NGUY CẤP</div><div class="card-value">${results.summary.tongSoLoaiNguyCap}</div></div>
                    </div>
                    <div class="dashboard-charts-row" style="display:flex;gap:24px;">
                        <div style="flex:1;background:#e8f5e9;border-radius:12px;padding:18px;">
                            <canvas id="forestChart1"></canvas>
                        </div>
                        <div style="flex:1;background:#e8f5e9;border-radius:12px;padding:18px;">
                            <canvas id="forestChart2"></canvas>
                        </div>
                        <div style="flex:1;background:#e8f5e9;border-radius:12px;padding:18px;">
                            <canvas id="forestChart3"></canvas>
                        </div>
                    </div>`;
                setTimeout(() => {
                    let colors = [
                        '#65AC85', // xanh lá nhạt
                        '#5FB3EC', // xanh dương sáng
                        '#FAD577', // vàng nhạt
                        '#E5F3EB', // xanh ngọc rất nhạt
                        '#F5F5F5', // trắng xám
                        '#3B6E4F', // xanh rừng già
                        '#8C6A43', // nâu gỗ
                        '#A7C957', // xanh lá non
                        '#CCD5AE', // xanh rêu nhạt
                        '#2F4858'  // xanh xám than
                      ];
                    if(results.suDungRung0[0] != 'Không tìm thấy dữ liệu!'){
                        new Chart(document.getElementById('forestChart1').getContext('2d'), {
                            type: 'pie',
                            data: {
                                labels: results.suDungRung0.map(item => item.label),
                                datasets: [{
                                    data: results.suDungRung0.map(item => item.value),
                                    backgroundColor: colors.slice(0, results.suDungRung0.length),
                                }]
                            },
                            options: {
                                plugins: {
                                    legend: { position: 'bottom' },
                                    title: { display: true, text: 'Tỷ lệ diện tích rừng theo mục đích sử dụng (HA)', font: { size: 14 } }
                                }
                            }
                        });
                    }

                    if(results.suDungRung3[0] != 'Không tìm thấy dữ liệu!'){
                    new Chart(document.getElementById('forestChart2').getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: results.suDungRung3.map(item => item.label),
                            datasets: [{
                                data: results.suDungRung3.map(item => item.value),
                                backgroundColor: colors.slice(0, results.suDungRung3.length),
                            }]
                        },
                        options: {
                            plugins: {
                                legend: { position: 'bottom' },
                                title: { display: true, text: 'Tỷ lệ diện tích rừng theo nguồn gốc rừng (HA)', font: { size: 14 } }
                            }
                        }
                    });
                    }

                    if(results.suDungRung2[0] != 'Không tìm thấy dữ liệu!'){
                        new Chart(document.getElementById('forestChart3').getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: results.suDungRung2.map(item => item.label),
                            datasets: [{
                                data: results.suDungRung2.map(item => item.value),
                                backgroundColor: colors.slice(0, results.suDungRung2.length),
                            }]
                        },
                        options: {
                            plugins: {
                                legend: { position: 'bottom' },
                                title: { display: true, text: 'Tỷ lệ diện tích rừng theo chức năng rừng (HA)', font: { size: 14 } }
                            }
                        }
                    });
                    }
                }, 100);
            }
        } catch (err) {
            console.warn('⚠️ Lỗi khi gọi API Lâm nghiệp:', err);
        }

    } else if (tabType === 'fishery') {
        subContent.innerHTML = `
        <div class="dashboard-cards-row">
            <div class="dashboard-card fishery"><div class="card-title">Cơ sở chế biến lâm sản</div><div class="card-value">2</div></div>
            <div class="dashboard-card fishery"><div class="card-title">Cơ sở chế biến thủy sản</div><div class="card-value">1</div></div>
            <div class="dashboard-card fishery"><div class="card-title">Cơ sở chế biến tổng hợp</div><div class="card-value">12</div></div>
        </div>
        <div class="dashboard-charts-row" style="display:flex;gap:24px;">
            <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                <canvas id="fisheryChart1"></canvas>
            </div>
            <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                <canvas id="fisheryChart2"></canvas>
            </div>
        </div>`;
        setTimeout(() => {
            new Chart(document.getElementById('fisheryChart1').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Cơ sở chế biến lâm sản', 'Cơ sở chế biến thủy sản', 'Cơ sở chế biến tổng hợp'],
                    datasets: [{
                        label: 'Số lượt kiểm tra theo tháng',
                        data: [2, 1, 12],
                        backgroundColor: '#4caf50',
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Số lượt kiểm tra theo tháng', font: { size: 16 } }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
            new Chart(document.getElementById('fisheryChart2').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Cơ sở sản xuất giống', 'Cơ sở nuôi trồng'],
                    datasets: [{
                        label: 'Sản lượng giống',
                        data: [4.5, 1],
                        backgroundColor: '#42a5f5',
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Sản lượng giống', font: { size: 16 } }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
        }, 100);
    } else if (tabType === 'livestock') {
        subContent.innerHTML = `
        <div class="dashboard-cards-row">
            <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi lợn</div><div class="card-value">0</div></div>
            <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi bò</div><div class="card-value">4</div></div>
            <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi trâu</div><div class="card-value">2</div></div>
            <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi dê</div><div class="card-value">0</div></div>
            <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi gà</div><div class="card-value">0</div></div>
            <div class="dashboard-card livestock"><div class="card-title">Cơ sở nuôi vịt</div><div class="card-value">2</div></div>
        </div>
        <div class="dashboard-charts-row" style="display:flex;gap:24px;">
            <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                <canvas id="livestockChart1"></canvas>
            </div>
            <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                <canvas id="livestockChart2"></canvas>
            </div>
        </div>`;
        setTimeout(() => {
            new Chart(document.getElementById('livestockChart1').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Nông hộ', 'Trang trại nhỏ', 'Trang trại vừa', 'Trang trại lớn'],
                    datasets: [{
                        label: 'Quy mô chăn nuôi',
                        data: [3, 2, 3, 1],
                        backgroundColor: '#42a5f5',
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Quy mô chăn nuôi', font: { size: 16 } }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
            new Chart(document.getElementById('livestockChart2').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Thịt gia súc', 'Thịt gia cầm', 'Sản lượng trứng', 'Sản lượng sữa'],
                    datasets: [{
                        label: 'Sản lượng sản phẩm động vật',
                        data: [5, 2, 3, 1],
                        backgroundColor: '#66bb6a',
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Sản lượng sản phẩm động vật', font: { size: 16 } }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
        }, 100);
    } else if (tabType === 'quality') {
        let appendUrl = false;
        let url = QLCL_REPORT_API + '?';
        if(province != null){
            url += `province=${province}`;
            appendUrl= true;
        }
        if(ward != null){
            if(appendUrl){
                url += '&';
            }
            url += `ward=${ward}`;
            appendUrl= true;
        }
        if(fromDate != null){
            if(appendUrl){
                url += '&';
            }
            url += `fromDate=${fromDate}`;
            appendUrl= true;
        }
        if(toDate != null){
            if(appendUrl){
                url += '&';
            }
            url += `toDate=${toDate}`;
        }
        console.log(url);
        const response = await fetch(url, {
            method: 'GET',
            headers: getApiHeaders(),
        });

        const data = await response.json();

        const dataReport = data.data.length > 0 ? data.data[0] : null;

        if (dataReport) {
            subContent.innerHTML = `
            <div class="dashboard-cards-row">
                <div class="dashboard-card quality"><div class="card-title">Số doanh nghiệp sản xuất kinh doanh</div><div class="card-value">${dataReport.so_luong_co_so}</div></div>
                <div class="dashboard-card quality"><div class="card-title">Cơ sở đạt chứng nhận</div><div class="card-value">${dataReport.so_luong_co_so_dat_chung_nhan}</div></div>
                <div class="dashboard-card quality"><div class="card-title">Số vụ vi phạm</div><div class="card-value">${dataReport.so_luong_vu_vi_pham}</div></div>
                <div class="dashboard-card quality"><div class="card-title">Số đợt kiểm tra</div><div class="card-value">${dataReport.so_dot_kiem_tra}</div></div>
            </div>
            <div class="dashboard-charts-row" style="display:flex;gap:24px;">
                <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                    <canvas id="qualityChart1"></canvas>
                </div>
                <div style="flex:1;background:#fff;border-radius:12px;padding:18px;">
                    <canvas id="qualityChart2"></canvas>
                </div>
            </div>
            <div class="dashboard-table" style="margin-top:24px;background:#fff;border-radius:12px;padding:18px;">
                <div style="font-weight:600;font-size:1.1rem;margin-bottom:10px;">Danh Sách Chứng Nhận Sắp Hết Hạn</div>
                <table style="width:100%;border-collapse:collapse;">
                    <thead><tr style="background:#f8f9fa;"><th style="padding:8px 6px;text-align:left;">Tên cơ sở</th><th>Loại chứng nhận</th><th>Ngày hết hạn</th><th>Trạng thái</th></tr></thead>
                    <tbody>${dataReport.gcn_sap_het_han.map(x=> `
                    <tr><td>${x.name}</td><td>${x.so_giay_chung_nhan}</td><td>${x.ngay_het_hieu_luc}</td><td><span style="background:#4caf50;color:#fff;padding:3px 10px;border-radius:8px;font-size:0.95rem;">Còn lại ${x.so_ngay_con_lai} ngày</span></td></tr>
                    `).join('')}
                    </tbody>
                </table>
            </div>`;
        }

        setTimeout(() => {
            new Chart(document.getElementById('qualityChart1').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: dataReport ? dataReport.loai_hinh_co_so.map(x=> x.name) :  ['Cơ sở chế biến lâm sản', 'Cơ sở chế biến thủy sản', 'Cơ sở chế biến tổng hợp'],
                    datasets: [{
                        label: 'Số lượt kiểm tra theo tháng',
                        data: dataReport ? dataReport.loai_hinh_co_so.map(x=> x.so_luong_co_so) :   [2, 1, 12],
                        backgroundColor: '#2196f3',
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Số lượt kiểm tra theo tháng', font: { size: 16 } }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
            new Chart(document.getElementById('qualityChart2').getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                    datasets: [{
                        label: 'Số lượt kiểm tra theo tháng',
                        data: dataReport ? [
                                dataReport.so_dot_kiem_tra_theo_thang[0].t1,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t2,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t3,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t4,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t5,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t6,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t7,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t8,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t9,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t10,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t11,
                                dataReport.so_dot_kiem_tra_theo_thang[0].t12
                            ] : [0,0,0,0,1,1,1,0,0,0,0,0],
                        borderColor: '#3f51b5',
                        backgroundColor: 'rgba(63,81,181,0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Số lượt kiểm tra theo tháng', font: { size: 16 } }
                    },
                    scales: { y: { beginAtZero: true } }
                }
            });
        }, 100);
    }
}

// Setup tab events
function setupTabEvents() {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            tabItems.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const tabType = this.getAttribute('data-tab');
            showDashboardFakeData(tabType);
            loadDashboardData(tabType);
        });
    });
}

// Khi đổi tỉnh/thành, cập nhật lại fake data dashboard
provinceSelect.addEventListener('change', function() {
    const activeTab = document.querySelector('.tab-item.active');
    if (activeTab) {
        showDashboardFakeData(activeTab.getAttribute('data-tab'));
    }
});

// Khi trang load, hiển thị fake data cho tab đầu tiên
window.addEventListener('DOMContentLoaded', function() {
    const firstTab = document.querySelector('.tab-item.active');
    if (firstTab) {
        showDashboardFakeData(firstTab.getAttribute('data-tab'));
    }
});

// Load dashboard data based on tab
function loadDashboardData() {
    const activeTab = document.querySelector('.tab-item.active');
    if (activeTab) {
        showDashboardFakeData(activeTab.getAttribute('data-tab'));
    }

}

// Load modules from API with fallback to sample data
async function loadModules() {
    showLoading();
    
    try {
        // Try to fetch from API first
        const response = await fetch(API_URL, {
            method: 'GET',
            mode: 'cors',
            headers: getApiHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data && Array.isArray(data.data)) {
            displayModules(data.data);
            console.log('✅ Dữ liệu được load từ API thành công');
        } else {
            throw new Error('Invalid data format from API');
        }
        
    } catch (error) {
        console.warn('⚠️ Không thể kết nối API, sử dụng dữ liệu mẫu:', error.message);
        
        // Check if it's a CORS error
        const isCorsError = error.message.includes('CORS') || 
                           error.message.includes('Access-Control-Allow-Origin') ||
                           error.message.includes('preflight');
        
        // Fallback to sample data
        try {
            displayModules(SAMPLE_DATA.data);
            console.log('✅ Đã sử dụng dữ liệu mẫu');
            
            // Show specific message for CORS error
            if (isCorsError) {
                const tokenStatus = isTokenConfigured() ? 'Token đã được cấu hình' : 'Chưa cấu hình token';
                showInfoMessage(`⚠️ Lỗi CORS: Không thể kết nối API từ domain hiện tại. ${tokenStatus}. Đang sử dụng dữ liệu mẫu. Vui lòng liên hệ admin để cấu hình CORS hoặc chạy trên domain được phép.`);
            } else {
                showInfoMessage('⚠️ Không thể kết nối API. Đang sử dụng dữ liệu mẫu. Vui lòng kiểm tra kết nối mạng hoặc chạy trên server.');
            }
            
        } catch (fallbackError) {
            console.error('❌ Lỗi khi load dữ liệu mẫu:', fallbackError);
            showError();
        }
    }
}

// Load provinces from API
async function loadProvinces() {
    try {
        const response = await fetch(PROVINCES_API, {
            method: 'GET',
            mode: 'cors',
            headers: getApiHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data && Array.isArray(data.data)) {
            populateProvinceSelect(data.data);
            console.log('✅ Dữ liệu tỉnh thành được load từ API thành công');
        } else {
            throw new Error('Invalid provinces data format');
        }
        
    } catch (error) {
        console.warn('⚠️ Không thể kết nối API tỉnh thành, sử dụng dữ liệu mẫu:', error.message);
        
        // Check if it's a CORS error
        const isCorsError = error.message.includes('CORS') || 
                           error.message.includes('Access-Control-Allow-Origin') ||
                           error.message.includes('preflight');
        
        if (isCorsError) {
            console.log('🔒 Lỗi CORS khi load tỉnh thành - sử dụng dữ liệu mẫu');
        }
        
        // Use sample provinces data
        const sampleProvinces = [
            { id: 1, name: 'Quảng Trị' },
            { id: 2, name: 'Thừa Thiên Huế' },
            { id: 3, name: 'Quảng Bình' },
            { id: 4, name: 'Quảng Nam' },
            { id: 5, name: 'Đà Nẵng' }
        ];
        populateProvinceSelect(sampleProvinces);
    }
}

// Load wards from API
async function loadWards(provinceId) {
    try {
        const response = await fetch(`${WARDS_API}?filter[ProvinceId][_eq]=${provinceId}`, {
            method: 'GET',
            mode: 'cors',
            headers: getApiHeaders()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data && Array.isArray(data.data)) {
            populateWardSelect(data.data);
            console.log('✅ Dữ liệu phường xã được load từ API thành công');
        } else {
            throw new Error('Invalid wards data format');
        }
        
    } catch (error) {
        console.warn('⚠️ Không thể kết nối API phường xã, sử dụng dữ liệu mẫu:', error.message);
        
        // Check if it's a CORS error
        const isCorsError = error.message.includes('CORS') || 
                           error.message.includes('Access-Control-Allow-Origin') ||
                           error.message.includes('preflight');
        
        if (isCorsError) {
            console.log('🔒 Lỗi CORS khi load phường xã - sử dụng dữ liệu mẫu');
        }
        
        // Use sample wards data
        const sampleWards = [
            { id: 1, name: 'Phường 1' },
            { id: 2, name: 'Phường 2' },
            { id: 3, name: 'Phường 3' },
            { id: 4, name: 'Xã A' },
            { id: 5, name: 'Xã B' }
        ];
        populateWardSelect(sampleWards);
    }
}

// Populate ward select
function populateWardSelect(wards) {
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    wards.forEach(ward => {
        const option = document.createElement('option');
        option.value = ward.id;
        option.textContent = ward.name;
        option.setAttribute('data-code', ward.code || '');
        wardSelect.appendChild(option);
    });
    
    wardSelect.disabled = false;
}

// Reset ward select
function resetWardSelect() {
    wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';
    wardSelect.disabled = true;
}

// Display modules in the grid
function displayModules(modules) {
    hideLoading();
    hideError();
    
    modulesContainerElement.innerHTML = '';
    
    modules.forEach(module => {
        const moduleCard = createModuleCard(module);
        modulesContainerElement.appendChild(moduleCard);
    });
    
    showModulesGrid();
}

// Create a module card element
function createModuleCard(module) {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.setAttribute('data-module-id', module.id);
    card.setAttribute('data-url', module.App_Url);

    const iconClass = moduleIcons[module.Name] || 'fas fa-database';

    card.innerHTML = `
        <div class="module-header">
            <div class="module-icon">
                <i class="${iconClass}"></i>
            </div>
            <h3 class="module-title">${module.Name}</h3>
        </div>
        <div class="module-description">
            ${truncateText(module.Note || 'Không có mô tả', 150)}
        </div>
    `;

    // Add click event for entire card
    card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            // Lưu lại nội dung gốc
            const originalContent = this.innerHTML;
            this.style.pointerEvents = 'none';
            this.innerHTML = `
                <div class="module-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Đang chuyển hướng...</p>
                </div>
            `;
            // Mở trang mới
            setTimeout(() => {
                window.open(url, '_blank');
                // Khôi phục lại nội dung gốc sau khi mở tab mới
                this.innerHTML = originalContent;
                this.style.pointerEvents = '';
            }, 500);
        }
    });

    return card;
}

// Show module details in modal
function showModuleDetails(moduleId) {
    // Find the module data
    const moduleCard = document.querySelector(`[data-module-id="${moduleId}"]`);
    if (!moduleCard) return;
    
    // Get module data from the card or store it globally
    // For now, we'll extract from the card content
    const moduleTitle = moduleCard.querySelector('.module-title').textContent;
    const moduleDescription = moduleCard.querySelector('.module-description').textContent;
    const moduleUrl = moduleCard.querySelector('.btn-primary').href;
    
    // Update modal content
    modalTitle.textContent = moduleTitle;
    modalDescription.textContent = moduleDescription;
    modalUrl.href = moduleUrl;
    
    // Show modal
    moduleModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal handler
function closeModalHandler() {
    moduleModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Utility functions
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function showLoading() {
    loadingElement.classList.remove('hidden');
    errorElement.classList.add('hidden');
    modulesGridElement.classList.add('hidden');
}

function hideLoading() {
    loadingElement.classList.add('hidden');
}

function showError() {
    loadingElement.classList.add('hidden');
    errorElement.classList.remove('hidden');
    modulesGridElement.classList.add('hidden');
}

function hideError() {
    errorElement.classList.add('hidden');
}

function showModulesGrid() {
    modulesGridElement.classList.remove('hidden');
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add loading animation for external links
document.addEventListener('click', function(e) {
    if (e.target.closest('a[target="_blank"]')) {
        const link = e.target.closest('a[target="_blank"]');
        const originalText = link.innerHTML;
        
        link.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chuyển hướng...';
        link.style.pointerEvents = 'none';
        
        setTimeout(() => {
            link.innerHTML = originalText;
            link.style.pointerEvents = '';
        }, 2000);
    }
});

// Add search functionality (optional enhancement)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Tìm kiếm phân hệ...';
    searchInput.className = 'search-input';
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.appendChild(searchInput);
    
    // Insert search before modules grid
    modulesGridElement.insertBefore(searchContainer, modulesGridElement.firstChild);
    
    // Add search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const moduleCards = document.querySelectorAll('.module-card');
        
        moduleCards.forEach(card => {
            const title = card.querySelector('.module-title').textContent.toLowerCase();
            const description = card.querySelector('.module-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Initialize search functionality
// Uncomment the line below to enable search
// addSearchFunctionality();

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.activeElement.classList.contains('module-card')) {
        document.activeElement.click();
    }
});

// Add focus management for accessibility
function setupFocusManagement() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Truy cập ${card.querySelector('.module-title').textContent}`);
    });
}

// Initialize focus management when modules are loaded
const originalDisplayModules = displayModules;
displayModules = function(modules) {
    originalDisplayModules(modules);
    setTimeout(setupFocusManagement, 100);
}; 

let dashboardChartInstance = null;

function renderDashboardChart(tabType, provinceName) {
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    // Xóa chart cũ nếu có
    if (dashboardChartInstance) {
        dashboardChartInstance.destroy();
    }
    let chartConfig = {};
    // Fake data cho từng lĩnh vực
    if (tabType === 'agriculture') {
        chartConfig = {
            type: 'doughnut',
            data: {
                labels: ['Động đất', 'Sóng thần', 'Lũ lụt', 'Hạn hán', 'Phytophthora infestans', 'Leptosphaeria maculans', 'Xanthomonas oryzae', 'Plasmodiophora brassicae'],
                datasets: [{
                    data: [6.6, 4.0, 5.9, 18.2, 25.1, 35.0, 4.0, 1.2],
                    backgroundColor: ['#f66', '#6cf', '#fc6', '#6fc', '#a6f', '#ccc', '#f90', '#f9c'],
                }]
            },
            options: {
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: true, text: 'Tổng Số Diện Tích (Ha) Thiệt Hại Do Thiên Tai/Do Dịch Bệnh', font: { size: 18 } }
                }
            }
        };
    } else if (tabType === 'forestry') {
        chartConfig = {
            type: 'pie',
            data: {
                labels: ['Rừng ngoài quy hoạch', 'Vườn quốc gia', 'Rừng sản xuất gỗ lớn', 'Rừng phòng hộ'],
                datasets: [{
                    data: [35, 25, 20, 20],
                    backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#ffc107'],
                }]
            },
            options: {
                plugins: {
                    legend: { position: 'bottom' },
                    title: { display: true, text: 'Tỷ Lệ Diện Tích Rừng Theo Mục Đích Sử Dụng (HA)', font: { size: 18 } }
                }
            }
        };
    } else if (tabType === 'fishery') {
        chartConfig = {
            type: 'bar',
            data: {
                labels: ['Cơ sở chế biến lâm sản', 'Cơ sở chế biến thủy sản', 'Cơ sở chế biến tổng hợp', 'Cơ sở chế biến thực phẩm nông sản', 'Cơ sở sản xuất nông sản', 'Cơ sở sơ chế ban đầu'],
                datasets: [{
                    label: 'Số lượt kiểm tra theo tháng',
                    data: [2, 1, 12, 0, 0, 0],
                    backgroundColor: '#4caf50',
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Số lượt kiểm tra theo tháng', font: { size: 18 } }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        };
    } else if (tabType === 'livestock') {
        chartConfig = {
            type: 'bar',
            data: {
                labels: ['Nông hộ', 'Trang trại nhỏ', 'Trang trại vừa', 'Trang trại lớn'],
                datasets: [{
                    label: 'Quy mô chăn nuôi',
                    data: [3, 2, 3, 1],
                    backgroundColor: '#42a5f5',
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Quy mô chăn nuôi', font: { size: 18 } }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        };
    } else if (tabType === 'quality') {
        chartConfig = {
            type: 'bar',
            data: {
                labels: ['Số doanh nghiệp', 'Cơ sở đạt chứng nhận', 'Số vụ vi phạm', 'Số đợt kiểm tra'],
                datasets: [{
                    label: 'Chất lượng',
                    data: [13, 22, 9, 2],
                    backgroundColor: ['#2196f3', '#4caf50', '#f44336', '#ffc107'],
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Chỉ số chất lượng', font: { size: 18 } }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        };
    }
    dashboardChartInstance = new Chart(ctx, chartConfig);
} 