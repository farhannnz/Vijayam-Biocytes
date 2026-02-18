// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Prevent certificate image download and right-click
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click on certificate images
    const certImages = document.querySelectorAll('.cert-image');
    certImages.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
        
        // Prevent drag
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });
        
        // Prevent selection
        img.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });
    });
    
    // Disable keyboard shortcuts for saving
    document.addEventListener('keydown', function(e) {
        // Check if certificate modal is open
        const certModal = document.getElementById('certModal');
        if (certModal && certModal.style.display === 'block') {
            // Prevent Ctrl+S, Ctrl+Shift+S (Save)
            if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                return false;
            }
            // Prevent Ctrl+P (Print)
            if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
                e.preventDefault();
                return false;
            }
        }
    });
    
    // Disable print screen for certificate modal
    const certModal = document.getElementById('certModal');
    if (certModal) {
        certModal.addEventListener('keyup', function(e) {
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText('');
                alert('Screenshots are disabled for this certificate.');
            }
        });
    }
});

// Add watermark overlay to certificate when modal opens
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add extra protection for certificate modal
    if (modalId === 'certModal') {
        const certContainer = document.querySelector('.cert-image-container');
        if (certContainer && !certContainer.querySelector('.watermark-overlay')) {
            const watermark = document.createElement('div');
            watermark.className = 'watermark-overlay';
            watermark.textContent = 'VIJAYAM BIOCYTES - FOR VIEWING ONLY';
            certContainer.appendChild(watermark);
        }
    }
}


// Hero Image Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    if (slides.length > 0) {
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
    }
});
