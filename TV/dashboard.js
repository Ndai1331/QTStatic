// Chart.js Configuration
Chart.defaults.font.family = "'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif";
Chart.defaults.font.size = 14;
Chart.defaults.color = '#2c3e50';

// Sample Data (Replace with actual data from your backend)
const cropAreaData = {
    labels: ['Lúa', 'Rau', 'Ngô', 'Cây ăn quả', 'Khác'],
    datasets: [{
        label: 'Diện tích (ha)',
        data: [1200, 800, 600, 900, 300],
        backgroundColor: [
            '#27ae60',
            '#2ecc71',
            '#16a085',
            '#1abc9c',
            '#2980b9'
        ]
    }]
};

const districtAreaData = {
    labels: ['Huyện A', 'Huyện B', 'Huyện C', 'Huyện D', 'Huyện E'],
    datasets: [{
        label: 'Diện tích (ha)',
        data: [2500, 1800, 2200, 1500, 1900],
        backgroundColor: '#3498db',
        borderColor: '#2980b9',
        borderWidth: 1
    }]
};

const facilitiesData = {
    labels: ['Buôn bán phân bón', 'Sản xuất phân bón', 'Buôn bán BVTV', 'Sản xuất BVTV'],
    datasets: [{
        label: 'Số cơ sở',
        data: [150, 30, 120, 25],
        backgroundColor: [
            '#e74c3c',
            '#c0392b',
            '#e67e22',
            '#d35400'
        ]
    }]
};

const diseaseData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    datasets: [{
        label: 'Số ca',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 65, 70, 60],
        fill: false,
        borderColor: '#e74c3c',
        tension: 0.1
    }]
};

const landDegradationData = {
    labels: ['Thoái hóa', 'Ô nhiễm', 'Cải tạo', 'Bình thường'],
    datasets: [{
        label: 'Diện tích (ha)',
        data: [300, 200, 150, 2350],
        backgroundColor: [
            '#e74c3c',
            '#f39c12',
            '#27ae60',
            '#3498db'
        ]
    }]
};

const sustainabilityData = {
    labels: ['Đạt chuẩn', 'Chưa đạt'],
    datasets: [{
        data: [75, 25],
        backgroundColor: ['#27ae60', '#e74c3c']
    }]
};

const cooperationData = {
    labels: ['Có liên kết', 'Không liên kết'],
    datasets: [{
        label: 'Diện tích (ha)',
        data: [1800, 1200],
        backgroundColor: ['#2ecc71', '#95a5a6']
    }]
};

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // Crop Area Chart
    new Chart(document.getElementById('cropAreaChart'), {
        type: 'pie',
        data: cropAreaData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                title: {
                    display: true,
                    text: 'Phân bố diện tích theo loại cây trồng'
                }
            }
        }
    });

    // District Area Chart
    new Chart(document.getElementById('districtAreaChart'), {
        type: 'bar',
        data: districtAreaData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Diện tích trồng trọt theo huyện'
                }
            }
        }
    });

    // Facilities Chart
    new Chart(document.getElementById('facilitiesChart'), {
        type: 'doughnut',
        data: facilitiesData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Disease Chart
    new Chart(document.getElementById('diseaseChart'), {
        type: 'line',
        data: diseaseData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Số ca dịch bệnh theo tháng'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Land Degradation Chart
    new Chart(document.getElementById('landDegradationChart'), {
        type: 'pie',
        data: landDegradationData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Sustainability Chart
    new Chart(document.getElementById('sustainabilityChart'), {
        type: 'doughnut',
        data: sustainabilityData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                title: {
                    display: true,
                    text: 'Tỷ lệ diện tích đạt hiệu quả bền vững (%)'
                }
            }
        }
    });

    // Cooperation Chart
    new Chart(document.getElementById('cooperationChart'), {
        type: 'bar',
        data: cooperationData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Update Stats
    document.getElementById('totalFacilities').textContent = '325';
    document.getElementById('certifiedFacilities').textContent = '248';

    // Initialize Table Data
    const damageTableBody = document.querySelector('#damageTable tbody');
    const damageData = [
        ['Lũ lụt', '150', 'Nặng', '10/2023'],
        ['Hạn hán', '200', 'Trung bình', '06/2023'],
        ['Sâu bệnh', '80', 'Nhẹ', '08/2023'],
        ['Cháy', '30', 'Nặng', '04/2023']
    ];

    damageData.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        damageTableBody.appendChild(tr);
    });
}); 