const nav = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
 
// ── Toggle do Menu Mobile ──────────────────────────────────
mobileMenu.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
 
    // Atualiza aria-expanded para acessibilidade
    mobileMenu.setAttribute('aria-expanded', isOpen);
 
    // Troca o ícone entre menu e X
    mobileMenu.querySelector('i').setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});
 
// Fecha o menu ao clicar em um link (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.querySelector('i').setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});
 
// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.querySelector('i').setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
});
 
// ── Efeito de Scroll na Navbar ─────────────────────────────
window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 50);
}, { passive: true }); // passive melhora performance de scroll
