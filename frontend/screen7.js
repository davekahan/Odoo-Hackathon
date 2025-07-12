document.addEventListener('DOMContentLoaded', function() {
    // Image Gallery Functionality
    const mainImage = document.getElementById('zoomable-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const zoomModal = document.getElementById('zoomModal');
    const zoomedImg = document.getElementById('zoomedImage');
    const closeZoom = document.querySelector('.close-zoom');
    
    // Thumbnail click event
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
            // Change main image
            mainImage.src = this.getAttribute('data-image');
            mainImage.style.transform = 'scale(1)'; // Reset zoom
        });
    });
    
    // Zoom functionality
    let currentScale = 1;
    const ZOOM_INCREMENT = 0.2;
    
    document.getElementById('zoom-in').addEventListener('click', function() {
        currentScale += ZOOM_INCREMENT;
        mainImage.style.transform = `scale(${currentScale})`;
    });
    
    document.getElementById('zoom-out').addEventListener('click', function() {
        if (currentScale > 1) {
            currentScale -= ZOOM_INCREMENT;
            mainImage.style.transform = `scale(${currentScale})`;
        }
    });
    
    // Open zoom modal
    mainImage.addEventListener('click', function() {
        zoomModal.style.display = 'flex';
        zoomedImg.src = this.src;
        document.body.style.overflow = 'hidden';
    });
    
    // Close zoom modal
    closeZoom.addEventListener('click', function() {
        zoomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Price option toggle
    const priceOptions = document.querySelectorAll('.price-tag');
    priceOptions.forEach(option => {
        option.addEventListener('click', function() {
            priceOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Swap button animations
    const swapButtons = document.querySelectorAll('.btn-swap');
    swapButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.innerHTML = '<i class="fas fa-handshake"></i> Request Swap';
        });
        button.addEventListener('mouseleave', function() {
            this.innerHTML = 'Request Swap';
        });
    });
    
    // Wishlist button animation
    const wishlistBtn = document.querySelector('.btn-wishlist');
    wishlistBtn.addEventListener('click', function() {
        this.innerHTML = '<i class="fas fa-heart"></i> Saved!';
        this.style.backgroundColor = 'rgba(255, 87, 34, 0.1)';
        this.style.color = 'var(--accent-color)';
        this.style.borderColor = 'var(--accent-color)';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-heart"></i> Save';
        }, 2000);
    });
});