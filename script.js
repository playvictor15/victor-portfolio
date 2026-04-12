const nav = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Toggle do Menu Mobile
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Efeito de Scroll na Navbar para mudar o fundo
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});
