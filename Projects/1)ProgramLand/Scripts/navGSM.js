/*VERANDERT DE KLEUR PER PAGINA OP DE NAV*/ 
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navGSM a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('current');
        }
    });
});
