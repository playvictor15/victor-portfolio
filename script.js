const nav = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// ── Toggle do Menu Mobile ──────────────────────────────────
mobileMenu.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    mobileMenu.setAttribute('aria-expanded', isOpen);
    // Troca ícone via CSS (evita problema com Lucide substituir <i> por <svg>)
    mobileMenu.classList.toggle('is-open', isOpen);
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
    });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
    }
});

// ── Efeito de Scroll na Navbar ─────────────────────────────
window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 50);
}, { passive: true });
