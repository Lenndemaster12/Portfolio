// nav.js
const navigation = `
  <nav>
    <!-- The overlay -->
    <div id="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>

      <!-- Overlay content -->
      <div class="overlay-content">
        <a href="index.html" id="home-link">Home</a>
        <a href="projecten.html" id="projecten-link">Projecten</a>
        <a href="cv.html" id="cv-link">cv</a>
        <a href="contact.html" id="contact-link">contact</a>
      </div>

      <div class="Socials">
        <a href="https://www.linkedin.com/in/lenn-kenis-4b89542b4/" class="SocialsFont">LinkedIn</a>
        <a href="https://github.com/Lenndemaster12" class="SocialsFont">GitHub</a>
        <a href="mailto:Lenn.kenis@gmail.com?subject=Contact&body=Hallo Lenn, ik wil graag contact opnemen." class="SocialsFont">Gmail</a>
      </div>
    </div>

    <!-- Use any element to open/show the overlay navigation menu -->
    <span class="OpenNavHamburgerMenu" onclick="openNav()">&#9776;</span>
  </nav>
`;

// Voeg de navigatie toe aan de header
document.getElementById('header').innerHTML = navigation;

// Functies om het menu te openen en te sluiten
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0';
}

// Detecteer de huidige pagina en markeer het juiste menu-item
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  
  // Check welke pagina actief is en markeer het juiste menu-item
  if (currentPath.includes("index.html") || currentPath === "/") {
    document.getElementById('home-link').classList.add('active');
  } else if (currentPath.includes("projecten.html")) {
    document.getElementById('projecten-link').classList.add('active');
  } else if (currentPath.includes("cv.html")) {
    document.getElementById('cv-link').classList.add('active');
  } else if (currentPath.includes("contact.html")) {
    document.getElementById('contact-link').classList.add('active');
  }
}

// Roep de functie aan om het actieve menu-item te markeren
highlightActiveLink();
