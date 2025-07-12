document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Quick View Modal
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const modal = document.getElementById('quickViewModal');
    const closeModal = document.querySelector('.close-modal');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Populate modal (simplified - would fetch more details in real app)
            const modalContent = `
                <div class="modal-product">
                    <div class="modal-images">
                        <img src="${productCard.querySelector('img').src}" alt="${productName}">
                    </div>
                    <div class="modal-details">
                        <h3>${productName}</h3>
                        <p class="price">${productPrice}</p>
                        <p>Condition: Excellent</p>
                        <p>Location: ${productCard.querySelector('.fa-map-marker-alt').parentNode.textContent.trim()}</p>
                        <button class="btn-swap">Request Swap</button>
                    </div>
                </div>
            `;
            
            document.querySelector('.modal-content').innerHTML = modalContent;
            modal.style.display = 'flex';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Size filter buttons
    const sizeButtons = document.querySelectorAll('.size-options button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Would filter products in real implementation
        });
    });

    // Pulse animation for swap buttons
    const swapButtons = document.querySelectorAll('.btn-swap');
    swapButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 1.5s infinite';
        });
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'none';
        });
    });
});