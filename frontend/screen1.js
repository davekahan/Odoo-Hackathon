document.addEventListener('DOMContentLoaded', function() {
    // Password toggle functionality
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    // Modal functionality
    const signupTrigger = document.getElementById('signupTrigger');
    const signupModal = document.getElementById('signupModal');
    const closeModal = document.getElementById('closeModal');
    
    signupTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        signupModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    signupModal.addEventListener('click', function(e) {
        if (e.target === signupModal) {
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form validation
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login validation logic here
            console.log('Login form submitted');
            // Simulate successful login
            // window.location.href = 'dashboard.html';
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (!document.getElementById('terms').checked) {
                alert('Please agree to the terms and conditions');
                return;
            }
            
            console.log('Signup form submitted');
            // Here you would typically send the data to your server
            // For now, we'll just close the modal
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Show success message (you could enhance this with a proper notification system)
            alert('Account created successfully! You can now login.');
        });
    }
    
    // Animate clothing items on hover
    const clothingItems = document.querySelectorAll('.clothing-item');
    clothingItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.replace(/rotate\([^)]+\)/, 'rotate(0deg)') + ' scale(1.1)';
            this.style.zIndex = '10';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            const rotation = this.classList.contains('shirt') ? '-10deg' : 
                            this.classList.contains('pants') ? '5deg' : '-5deg';
            this.style.transform = `rotate(${rotation}) scale(1)`;
            this.style.zIndex = '1';
            this.style.boxShadow = 'var(--box-shadow)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button:not(.close-modal), .login-button, .signup-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});

// Add at the end of the file
document.addEventListener('DOMContentLoaded', function() {
    if(!localStorage.getItem('authChoiceMade')) {
        document.getElementById('authChoiceModal').style.display = 'flex';
    }
});

function closeModal() {
    document.getElementById('authChoiceModal').style.display = 'none';
    localStorage.setItem('authChoiceMade', 'true');
}

function redirectToRegister() {
    window.location.href = 'screen2.html'; // Updated to your registration page
}