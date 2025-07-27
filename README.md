# Cơ sở dữ liệu Nông nghiệp tỉnh Quảng Trị

Một trang web hiện đại và responsive để truy cập các phân hệ cơ sở dữ liệu nông nghiệp của tỉnh Quảng Trị.

## Tính năng

- 🎨 **Giao diện hiện đại**: Thiết kế đẹp mắt với gradient và hiệu ứng animation
- 📱 **Responsive**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- 🔄 **API Integration**: Tự động load dữ liệu từ API
- 🔍 **Modal chi tiết**: Xem thông tin chi tiết của từng phân hệ
- ♿ **Accessibility**: Hỗ trợ điều hướng bằng bàn phím và screen reader
- ⚡ **Performance**: Tối ưu hóa tốc độ tải trang

## Cấu trúc dự án

```
├── index.html          # File HTML chính
├── styles.css          # File CSS với thiết kế responsive
├── script.js           # File JavaScript xử lý logic
└── README.md           # Tài liệu hướng dẫn
```

## Cách sử dụng

1. **Mở trang web**: Mở file `index.html` trong trình duyệt web
2. **Xem các phân hệ**: Trang sẽ tự động load danh sách các phân hệ từ API
3. **Truy cập hệ thống**: Click vào nút "Truy cập" để mở hệ thống tương ứng
4. **Xem chi tiết**: Click vào nút "Chi tiết" hoặc click vào card để xem thông tin đầy đủ

## API Endpoint

Trang web sử dụng API endpoint: `https://core.hpte.vn/items/APP_URL`

### Cấu trúc dữ liệu API

```json
{
  "data": [
    {
      "id": 1,
      "Name": "Tên phân hệ",
      "App_Url": "URL hệ thống",
      "Note": "Mô tả chi tiết",
      "App_images": "ID hình ảnh",
      "status": "published"
    }
  ]
}
```

## Các phân hệ hiện có

1. **Trồng trọt và Bảo vệ thực vật** - Chi cục Trồng trọt và Bảo vệ thực vật
2. **QLCL Nông lâm sản và Thủy sản** - Chi cục Quản lý chất lượng
3. **Chăn nuôi, Thú y và Thủy sản** - Chi cục Chăn nuôi, Thú y và Thủy sản
4. **Lâm nghiệp** - Cơ sở dữ liệu Lâm nghiệp
5. **Thuỷ sản** - Cơ sở dữ liệu Thuỷ sản
6. **Điều hành** - Hệ thống điều hành chung

## Tính năng kỹ thuật

### Frontend
- **HTML5**: Cấu trúc semantic và accessible
- **CSS3**: Flexbox, Grid, Animations, Responsive design
- **JavaScript ES6+**: Async/await, Fetch API, Event handling

### Responsive Design
- **Desktop**: Grid layout với 2-3 cột
- **Tablet**: Grid layout với 1-2 cột
- **Mobile**: Single column layout

### Accessibility
- Keyboard navigation
- Screen reader support
- ARIA labels
- Focus management

## Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các biến CSS trong file `styles.css`:

```css
:root {
  --primary-color: #4CAF50;
  --secondary-color: #45a049;
  --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Thêm phân hệ mới
1. Thêm icon mới vào object `moduleIcons` trong `script.js`
2. API sẽ tự động load phân hệ mới khi có dữ liệu

### Bật tính năng tìm kiếm
Uncomment dòng cuối trong `script.js`:
```javascript
addSearchFunctionality();
```

## Yêu cầu hệ thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối internet để load API
- JavaScript enabled

## Phát triển

### Chạy local
1. Clone hoặc download dự án
2. Mở file `index.html` trong trình duyệt
3. Hoặc sử dụng local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

### Debug
- Mở Developer Tools (F12)
- Kiểm tra Console để xem lỗi
- Network tab để kiểm tra API calls

## Bảo mật

- Sử dụng HTTPS cho API calls
- Validate dữ liệu từ API
- Sanitize HTML content
- CORS handling

## Hỗ trợ

Nếu gặp vấn đề, vui lòng kiểm tra:
1. Kết nối internet
2. API endpoint có hoạt động không
3. Console errors trong Developer Tools

## License

Dự án được phát triển cho Sở Nông nghiệp và Phát triển nông thôn tỉnh Quảng Trị.

---

**Phát triển bởi**: Sở Nông nghiệp và Phát triển nông thôn tỉnh Quảng Trị  
**Năm**: 2024 