document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-container');

    const navHTML = `
    <nav class="navGSM">
        <ul>
          <a href="index.html">
            <li>
              <i class="fas fa-home"></i>
              <p>Home</p>
            </li>
          </a>
          <a href="projecten.html">
            <li>
              <i class="fas fa-project-diagram"></i>
              <p>Projecten</p>
            </li>
          </a>
          <a href="cv.html">
            <li>
              <i class="fas fa-user"></i>
              <p>Cv</p>
            </li>
          </a>
          <a href="contact.html">
            <li>
              <i class="fas fa-envelope"></i>
              <p>Contact</p>
            </li>
          </a>
        </ul>
    </nav>
    `;

    navContainer.innerHTML = navHTML;

    // Huidige pagina detecteren
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navPC ul li a, .navGSM ul a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current');
        }
    });
});

/*VERANDERT DE KLEUR PER PAGINA OP DE NAV*/ 
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navGSM a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('current');
        }
    });
});

