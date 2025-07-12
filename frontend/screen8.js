document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'sidebar-toggle';
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    sidebarToggle.style.position = 'fixed';
    sidebarToggle.style.top = '1rem';
    sidebarToggle.style.left = '1rem';
    sidebarToggle.style.zIndex = '1000';
    sidebarToggle.style.background = 'var(--primary-color)';
    sidebarToggle.style.color = 'white';
    sidebarToggle.style.border = 'none';
    sidebarToggle.style.borderRadius = '50%';
    sidebarToggle.style.width = '40px';
    sidebarToggle.style.height = '40px';
    sidebarToggle.style.display = 'none';
    sidebarToggle.style.justifyContent = 'center';
    sidebarToggle.style.alignItems = 'center';
    sidebarToggle.style.cursor = 'pointer';
    sidebarToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    document.body.appendChild(sidebarToggle);

    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
    }

    sidebarToggle.addEventListener('click', toggleSidebar);

    // Check screen size and toggle sidebar accordingly
    function checkScreenSize() {
        if (window.innerWidth < 768) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('collapsed');
            sidebarToggle.style.display = 'flex';
        } else {
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('collapsed');
            sidebarToggle.style.display = 'none';
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    // Modal functionality
    const addUserBtn = document.querySelector('.add-user-btn');
    const modalOverlay = document.getElementById('addUserModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');

    function openModal() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    addUserBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Form submission
    const addUserForm = document.getElementById('addUserForm');
    const saveBtn = document.querySelector('.save-btn');

    saveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would typically handle form submission
        // For demo purposes, we'll just close the modal
        closeModal();
        
        // Show success message
        alert('User added successfully!');
    });

    // Table row actions
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const moreButtons = document.querySelectorAll('.more-btn');

    editButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const userId = row.querySelector('td:first-child').textContent;
            alert(`Edit user with ID: ${userId}`);
        });
    });

    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const userName = row.querySelector('td:nth-child(2) span').textContent;
            
            if (confirm(`Are you sure you want to delete ${userName}?`)) {
                row.remove();
                alert(`${userName} has been deleted.`);
            }
        });
    });

    moreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const userId = row.querySelector('td:first-child').textContent;
            alert(`More actions for user with ID: ${userId}`);
        });
    });

    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.pagination-btn:not(:disabled)');

    paginationButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            document.querySelector('.pagination-btn.active').classList.remove('active');
            this.classList.add('active');
            
            // Here you would typically load the new page data
            alert(`Loading page ${this.textContent}`);
        });
    });

    // Filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    
    filterBtn.addEventListener('click', function() {
        alert('Filter functionality would open here');
    });

    // Export functionality
    const exportBtn = document.querySelector('.export-btn');
    
    exportBtn.addEventListener('click', function() {
        alert('Exporting user data...');
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('.users-table tbody tr');
        
        rows.forEach(row => {
            const name = row.querySelector('td:nth-child(2) span').textContent.toLowerCase();
            const email = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || email.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});