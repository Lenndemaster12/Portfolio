document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('nav-container');

    const navHTML = `
    <nav class="navPC">
        <div class="container">
          <h1 class="logo"><a href="/index.html">ProgramLand</a></h1>
          <div class="clock">
            <div id="time"></div>
          </div>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="faq.html">Faq</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
    </nav>
    <nav class="navGSM">
        <ul>
          <a href="index.html">
            <li>
              <i class="fas fa-home"></i>
              <p>Home</p>
            </li>
          </a>
          <a href="projects.html">
            <li>
              <i class="fas fa-project-diagram"></i>
              <p>Projects</p>
            </li>
          </a>
          <a href="faq.html">
            <li>
              <i class="fas fa-user"></i>
              <p>Faq</p>
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
