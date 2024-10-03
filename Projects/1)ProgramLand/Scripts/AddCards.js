function addCard(imageSrc, description, linkHref, linkText, downloadHref) {
    // Maak een nieuwe kaartdiv
    const card = document.createElement('div');
    card.classList.add('card');

    // Voeg de afbeelding toe
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Image';
    img.classList.add('card-image');
    card.appendChild(img);

    // Voeg de kaartinhoud toe
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Voeg de beschrijving toe
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = description;
    cardContent.appendChild(p);

    // Voeg de link toe
    const link = document.createElement('a');
    link.href = linkHref;
    link.classList.add('card-link');
    link.textContent = linkText;
    cardContent.appendChild(link);

    // Voeg de download knop toe
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadHref;
    downloadLink.classList.add('card-download');
    downloadLink.textContent = 'Download'; // Hier wordt 'Download' ingesteld als tekst van de knop
    cardContent.appendChild(downloadLink);

    // Voeg de kaartinhoud toe aan de kaart
    card.appendChild(cardContent);

    // Voeg de kaart toe aan de container
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(card);
}



// Voorbeeld van het toevoegen van een kaart
addCard('./Projects/Images/1_Button_Ripple_Effect.gif', 'Button ripple effect', './Projects/1_button-ripple-effect/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1mP4F59RELelLOUc8nGtx7WL2moufuZ3u/view?usp=sharing');
addCard('./Projects/Images/2_Animated_Countdown.gif', 'Animated Countdown', './Projects/2_animated-countdown/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1ZXtNN2QQKJICMsLsAAOLs2NKPExVYC6r/view?usp=sharing');
addCard('./Projects/Images/3_Animated_Navigation.gif', 'Animated Navigation', './Projects/3_animated-navigation/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1MRBF7ChKCQhEvoYmhDnV_qJvc7qNgw0T/view?usp=sharing');
addCard('./Projects/Images/4_Auto_Text_Effect.gif', 'Auto Text Effect', './Projects/4_auto-text-effect/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1c_R30w_2Q5MotuX3VVHKAmvseQs_XB7Y/view?usp=sharing');
addCard('./Projects/Images/5_Drawing_App.gif', 'Drawing App', './Projects/5_drawing-app/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1KkFcLx0s9UwO6t1udj5v5qWH13QCINe7/view?usp=sharing');
addCard('./Projects/Images/6_Faq_Collapse.gif', 'Faq Collapse', './Projects/6_faq-collapse/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1dlY4IuRznYOZkj9REnh0-ZZPOQztgy3h/view?usp=sharing');
addCard('./Projects/Images/7_Drink_Water.gif', 'Drink Water', './Projects/7_drink-water/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1X9ErSgrN4nEEaV_Ko6P2dMMTNW6m-G2J/view?usp=sharing');
addCard('./Projects/Images/8_Form_Input_Wave.gif', 'Form Input Wave', './Projects/8_form-input-wave/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1mxE-ou8qQjpiVEJNYLY9er6l1XnropsT/view?usp=sharing');
addCard('./Projects/Images/9_Hidden_Search.gif', 'Hidden Search', './Projects/9_hidden-search/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1fFEV6c51hO1Dj3HIj7F_PD348JUWaMQN/view?usp=sharing');
addCard('./Projects/Images/10_Image_Carousel.gif', 'Image Carousel', './Projects/10_image-carousel/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1Ey8I1v3lXCN_rXNMlXAinFB6SbRXtF-s/view?usp=sharing');
addCard('./Projects/Images/11_Kinetic_Loader.gif', 'Kinetic Loader', './Projects/11_kinetic-loader/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/15hv3OvaI3ZZlupcScHpM6ZDEC6MQrv30/view?usp=sharing');
addCard('./Projects/Images/12_Mobile_Tab_Navigation.gif', 'Mobile Tab Navigation', './Projects/12_mobile-tab-navigation/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/14SPIAoVMaa3XM_gWXow_5q7Z8PasxyvN/view?usp=sharing');
addCard('./Projects/Images/13_Progress_Steps.gif', 'Progress Steps', './Projects/13_progress-steps/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1gW2o2H8LT1swpk-lVOjZg33o-u9FIYh7/view?usp=sharing');
addCard('./Projects/Images/14_Split_Landing_Page.gif', 'Split Landing Page', './Projects/14_split-landing-page/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1Vb93kgz0La2pwWMPZa6QoiXJFcxTjF_K/view?usp=sharing');
addCard('./Projects/Images/15_Theme_Clock.gif', 'Theme Clock', './Projects/15_theme-clock/index.html', 'Ga naar de website', 'https://drive.google.com/file/d/1O7DDefDrIJ35oNidHsLzD_KAAakShVZ-/view?usp=sharing');
// Voeg hier andere kaarten toe...

// Functie om de scroll-animatie toe te passen op de kaarten
function checkCards() {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;

        if (cardTop < triggerBottom && cardBottom > 0) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Voer de functie uit bij het laden van de pagina en luister naar scroll events
window.addEventListener('scroll', checkCards);
checkCards(); // Voer ook bij het laden van de pagina uit om de status van de kaarten te controleren
