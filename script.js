const nav = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Menu Mobile Toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Efeito de Scroll na Navbar otimizado
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});
