document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        this.classList.toggle('active');
    });
    
    // Simple carousel functionality
    const carousel = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 250, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -250, behavior: 'smooth' });
    });
    
    // Pulse animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'pulse 1.5s infinite';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.animation = 'none';
        });
    });
});