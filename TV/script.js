$(document).ready(function() {
    // Initialize the first tab
    const firstTab = document.querySelector('.nav-link');
    if (firstTab) {
        const tab = new bootstrap.Tab(firstTab);
        tab.show();
    }

    // Handle all form submissions
    const forms = [
        '#formThemPhanBon',
        '#formThemKhaoNghiem',
        '#formThemCoSoSX',
        '#formThemCoSoBB',
        '#formThemViPham',
        '#formThemCoSoSXGC'
    ];

    forms.forEach(formId => {
        $(formId).on('submit', function(e) {
            e.preventDefault();
            // Lấy giá trị trạng thái nếu có
            var trangThai = $(this).find('select.form-select').last().val();
            // Here you would typically make an API call to save the data, bao gồm cả trạng thái
            alert('Đã lưu thành công!\nTrạng thái: ' + trangThai);
            $(this).closest('.modal').modal('hide');
            $(this)[0].reset();
        });
    });

    // Handle delete button clicks
    $('.btn-danger').on('click', function() {
        if (confirm('Bạn có chắc chắn muốn xóa?')) {
            // Here you would typically make an API call to delete the record
            $(this).closest('tr').remove();
        }
    });

    // Handle edit button clicks
    $('.btn-info').on('click', function() {
        // Here you would typically populate the form with existing data
        alert('Chức năng chỉnh sửa đang được phát triển');
    });

    // Reset form when modal is closed
    $('.modal').on('hidden.bs.modal', function() {
        $(this).find('form')[0].reset();
    });

    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Add row numbers to tables
    function updateRowNumbers() {
        $('table').each(function() {
            $(this).find('tbody tr').each(function(index) {
                $(this).find('td:first').text(index + 1);
            });
        });
    }
    updateRowNumbers();

    // Handle search functionality
    $('.search-input').on('keyup', function() {
        const searchText = $(this).val().toLowerCase();
        const targetTable = $(this).closest('.tab-pane').find('table tbody tr');
        
        targetTable.filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
        });
        
        updateRowNumbers();
    });

    // Handle sorting
    $('th[data-sort]').on('click', function() {
        const table = $(this).closest('table');
        const column = $(this).index();
        const rows = table.find('tbody tr').toArray();
        const ascending = $(this).hasClass('asc');
        
        rows.sort(function(a, b) {
            const A = $(a).children('td').eq(column).text();
            const B = $(b).children('td').eq(column).text();
            return ascending ? B.localeCompare(A) : A.localeCompare(B);
        });
        
        $(this).toggleClass('asc');
        table.find('tbody').empty().append(rows);
        updateRowNumbers();
    });

    // Handle tab switching using Bootstrap's built-in events
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.addEventListener('shown.bs.tab', function (event) {
            // Update active classes when tab is fully shown
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
}); 