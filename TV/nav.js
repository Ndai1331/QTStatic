// Create and insert navigation
function createNavigation() {
    const nav = `
        <div class="sidebar">
            <h3>Menu</h3>
            <ul class="nav-menu">
                <li><a href="index.html">Trang Chủ</a></li>
                <li><a href="dashboard.html">Thống Kê</a></li>
                <li><a href="co-so-san-xuat.html">Quản lý cơ sở sản xuất phân bón</a></li>
                <li><a href="co-so-buon-ban.html">Quản lý cơ sở kinh doanh phân bón</a></li>
                <li><a href="phan-bon.html">Phân Bón</a></li>
                <li><a href="khao-nghiem.html">Khảo Nghiệm</a></li>
                <li><a href="vi-pham.html">Vi Phạm</a></li>
            </ul>
        </div>
    `;
    
    // Create a container for the page content
    const container = document.createElement('div');
    container.className = 'dashboard-container';
    
    // Move all body content into main-content
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    while (document.body.firstChild) {
        mainContent.appendChild(document.body.firstChild);
    }
    
    // Insert navigation and restructured content
    container.innerHTML = nav;
    container.appendChild(mainContent);
    document.body.appendChild(container);
}

// Call when DOM is loaded
document.addEventListener('DOMContentLoaded', createNavigation); 