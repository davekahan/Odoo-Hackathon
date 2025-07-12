document.addEventListener('DOMContentLoaded', function() {
    // Password toggle functionality
    const togglePassword = document.querySelector('.password-toggle');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    // Password strength indicator
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthBars = document.querySelectorAll('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        
        // Reset
        strengthBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'width 0.3s ease';
        });
        
        if (password.length === 0) {
            strengthText.textContent = 'Password strength';
            return;
        }
        
        // Very weak (just length)
        if (password.length < 4) {
            strengthBars[0].style.width = '33%';
            strengthBars[0].style.backgroundColor = 'var(--error-color)';
            strengthText.textContent = 'Very weak';
            return;
        }
        
        // Weak (length + lowercase)
        if (password.length < 6 || !/[A-Z]/.test(password)) {
            strengthBars[0].style.width = '33%';
            strengthBars[1].style.width = '0%';
            strengthBars[0].style.backgroundColor = 'var(--error-color)';
            strengthText.textContent = 'Weak';
            return;
        }
        
        // Medium (length + lowercase + uppercase)
        if (password.length < 8 || !/\d/.test(password)) {
            strengthBars[0].style.width = '66%';
            strengthBars[1].style.width = '66%';
            strengthBars[0].style.backgroundColor = 'var(--secondary-color)';
            strengthBars[1].style.backgroundColor = 'var(--secondary-color)';
            strengthText.textContent = 'Medium';
            return;
        }
        
        // Strong (length + lowercase + uppercase + number + special char)
        strengthBars.forEach(bar => {
            bar.style.width = '100%';
            bar.style.backgroundColor = 'var(--success-color)';
        });
        strengthText.textContent = 'Strong';
    });
    
    // Style tag selection
    const styleTags = document.querySelectorAll('.style-tag');
    styleTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// Form navigation functions
function nextStep(current, next) {
    // Validate current step before proceeding
    if (current === 1 && !validateStep1()) return;
    if (current === 2 && !validateStep2()) return;
    
    // Update progress steps
    document.querySelector(`.step[data-step="${current}"]`).classList.remove('active');
    document.querySelector(`.step[data-step="${next}"]`).classList.add('active');
    
    // Hide current form step
    document.querySelector(`.form-step[data-step="${current}"]`).classList.remove('active');
    document.querySelector(`.form-step[data-step="${next}"]`).classList.add('active');
}

function prevStep(current, prev) {
    // Update progress steps
    document.querySelector(`.step[data-step="${current}"]`).classList.remove('active');
    document.querySelector(`.step[data-step="${prev}"]`).classList.add('active');
    
    // Hide current form step
    document.querySelector(`.form-step[data-step="${current}"]`).classList.remove('active');
    document.querySelector(`.form-step[data-step="${prev}"]`).classList.add('active');
}

function validateStep1() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    
    return true;
}

function validateStep2() {
    const sizes = document.querySelectorAll('input[name="size"]:checked');
    if (sizes.length === 0) {
        alert('Please select at least one clothing size');
        return false;
    }
    return true;
}

// Add at the end of the file
const loginLink = document.querySelector('.login-link a');
if(loginLink) {
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('authChoiceMade');
        window.location.href = 'screen1.html'; // Updated to your login page
    });
}