// ==================== HAMBURGER MENU ==================== 
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when a link is clicked
nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrapper')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// ==================== SCROLL EFFECTS ==================== 
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== CONTACT FORM ==================== 
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            alert(`Vielen Dank, ${name}! Deine Nachricht wurde versendet. Wir werden dich bald kontaktieren!`);
            contactForm.reset();
        } else {
            alert('Bitte fülle alle Felder aus!');
        }
    });
}

// ==================== SMOOTH SCROLL POLYFILL ==================== 
// For better browser compatibility
if (!CSS.supports('scroll-behavior: smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}
