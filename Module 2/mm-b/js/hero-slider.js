"use strict";

window.addEventListener("load", function () {
  heroSlider();
});

function heroSlider() {

  var slides = [];

  var slide0 = {
    backgroundImage: 'url("images/hero/cuisine-keukenblad-ingredienten-o.jpg")',
    paragraphTop: 'Leer de nieuwste recepten en<br> verwen jezelf en je gasten!',
    paragraphBottom: 'Voor elke smaak is er<br> iets te vinden.',
    buttonText: 'Bekijk Recepten',
    buttonUrl: 'pages/recepten/recepten.html'
  };
  slides.push(slide0);

  var slide1 = {
    backgroundImage: 'url("images/hero/hero-nigella-rode-jurk-o.jpg")',
    paragraphTop: 'Ontdek de overheerlijke recepten<br> van Nigella Lawson',
    paragraphBottom: 'Kom gezellig een kijkje<br> nemen in de wereld van Nigella!',
    buttonText: 'Koken met Nigella',
    buttonUrl: 'pages/campagne.html'
  };
  slides.push(slide1);

  var slide2 = {
    backgroundImage: 'url("images/hero/hero-4-o.jpg")',
    paragraphTop: 'Ontdek de beste kookboeken en<br> elk diner is een feestmaal!',
    paragraphBottom: 'Diverse cuisines<br>uit diverse culturen.',
    buttonText: 'Bekijk kookboeken',
    buttonUrl: 'pages/shop/shop.html'
  };
  slides.push(slide2);

  var hero = document.querySelector(".hero");
  var pijlLinks = document.querySelector(".hero .navLeft");
  var pijlRechts = document.querySelector(".hero .navRight");
  var knopOranje = document.querySelector(".hero .knopOranje");
  var paragraafTop = document.querySelector(".hero article p:first-of-type");
  var paragraafBottom = document.querySelector(".hero article p:last-of-type");
  var paginationBullet0 = document.querySelector('.pagination li:nth-of-type(1)');
  var paginationBullet1 = document.querySelector('.pagination li:nth-of-type(2)');
  var paginationBullet2 = document.querySelector('.pagination li:nth-of-type(3)');
  var bullets = document.querySelectorAll('.pagination > li');
  var slideSliding = true;

  // Set default slide als JS aanstaat
  var slideCounter = 0;
  paragraafTop.innerHTML = slides[0].paragraphTop;
  paragraafBottom.innerHTML = slides[0].paragraphBottom;
  knopOranje.textContent = slides[0].buttonText;
  hero.style.backgroundImage = slides[0].backgroundImage;

  // Eventlisteners pijl navigatie op de slider
  pijlRechts.addEventListener('click', showNextSlide);
  pijlLinks.addEventListener('click', showPreviousSlide);

  function showNextSlide() {
    slideCounter++;
    if (slideCounter == slides.length) {
      slideCounter = 0;
    }
    removeActiveBullets();
    setActiveBullet();
    showSlide();
  }

  function showPreviousSlide() {
    slideCounter--;
    if (slideCounter < 0) {
      slideCounter = (slides.length) - 1;
    }
    removeActiveBullets();
    setActiveBullet();
    showSlide();
  }

  function showSlide() {
    paragraafTop.innerHTML = slides[slideCounter].paragraphTop;
    paragraafBottom.innerHTML = slides[slideCounter].paragraphBottom;
    knopOranje.textContent = slides[slideCounter].buttonText;
    hero.style.backgroundImage = slides[slideCounter].backgroundImage;
    knopOranje.setAttribute('href', slides[slideCounter].buttonUrl);
  }

  paginationBullet0.addEventListener('click', function () {
    slideCounter = 0;
    removeActiveBullets();
    setActiveBullet();
    showSlide();
  });

  paginationBullet1.addEventListener('click', function () {
    slideCounter = 1;
    removeActiveBullets();
    setActiveBullet();
    showSlide();
  });

  paginationBullet2.addEventListener('click', function () {
    slideCounter = 2;
    removeActiveBullets();
    setActiveBullet();
    showSlide();
  });

  // Zet op een geklikte bullet de actieve class
  function setActiveBullet() {
    bullets[slideCounter].setAttribute('class', 'currentSlide');
  }

  // Verwijder alle actieve bullets
  function removeActiveBullets() {
    for (var bullet of bullets) {
      bullet.removeAttribute('class', 'currentSlide');
    }
  }


  heroSliderNav();
  // Wanneer de muis over de hero image gaat, worden de navigatie pijlen zichtbaar, en stopt de slider.
  // Als de muis buiten de hero image gaat, start de slider, en gaat de slider 
  // automatisch naar de volgende slide in een interval van 4 seconden.
  function heroSliderNav() {
    var hero = document.querySelector(".hero");
    var pijlLinks = document.querySelector(".navLeft");
    var pijlRechts = document.querySelector(".navRight");
    var intervalTimer = setInterval(showNextSlide, 3000);

    hero.addEventListener('mouseover', showNavigation);
    hero.addEventListener("mouseout", hideNavigation);

    function showNavigation() {
      pijlLinks.style.display = "block";
      pijlRechts.style.display = "block";

      if (slideSliding) {
        slideSliding = false;
        clearInterval(intervalTimer);
      } 
    }

    function hideNavigation() {
      pijlLinks.style.display = "none";
      pijlRechts.style.display = "none";

      if (!slideSliding) {
        intervalTimer = setInterval(showNextSlide, 3000);
        slideSliding = true;
      }

    }
  }
}