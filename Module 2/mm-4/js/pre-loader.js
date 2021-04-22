'use strict';

/* Buiten de load event listener laten, anders stoort het de loader animatie/simulatie 
Deze elementen niet uitzetten in de CSS ivm graceful degradation e.d.
Als JS uitvalt moet de landkaart en opties nog te zien zijn.
*/
document.querySelector(".islandName").style.display = "none";
document.querySelector("#animalLegend").style.display = "none";
document.querySelector("#facilitiesLegend").style.display = "none";
document.querySelector(".toolsWindow").style.display = "none";
document.querySelector("#attracties").style.display = "none";
document.querySelector(".fallback").style.display = "none";
document.querySelector(".jurassicParkLogo").style.display = "none";

window.addEventListener('DOMContentLoaded', function () {

  createSpinningWheel();
  loader();
  var loaderVar;

  function loader() {
    loaderVar = setTimeout(showPage, 2000);
  }

  /* Create the spinning wheel
    HTML Blueprint:
    <div class="loader">
      <div id="loader"></div>
      <p>Please wait while loading the map & tools ...</p>
    </div> 
  */
  function createSpinningWheel() {

    var oceanBackground = document.querySelector('.oceanBackground');
    var park = document.querySelector('.park');

    var divLoaderClass = document.createElement('div');
    divLoaderClass.classList.add('loader');
    oceanBackground.insertBefore(divLoaderClass, park);

    var divLoaderId = document.createElement('div');
    divLoaderId.setAttribute('id', 'loader');

    divLoaderClass.appendChild(divLoaderId);

    var textNode = document.createTextNode("Please wait while loading the map & tools ...");
    divLoaderClass.appendChild(textNode);
  }

  // Activeer de pagina, na het laten zien de van loader animatie
  function showPage() {
    document.querySelector(".islandName").style.display = "block";
    document.querySelector("#loader").style.display = "none";
    document.querySelector(".toolsWindow").style.display = "flex";
    document.querySelector("#attracties").style.display = "block";
    document.querySelector(".loader").style.display = "none";

    /* Aanzetten vanaf resolutie: > 992px, #facilitiesLegend */
    function aanzettenfacilitiesLegend(device992) {
      if (device992.matches) { // If media query matches
        document.querySelector("#facilitiesLegend").style.display = "block";
      } else {
        document.querySelector("#facilitiesLegend").style.display = "none";
      }
    }

    var device992 = window.matchMedia("(min-width: 992px)")
    aanzettenfacilitiesLegend(device992);
    device992.addListener(aanzettenfacilitiesLegend);


    /* Aanzetten vanaf resolutie: > 1200px, #animalLegend, .jurassicParkLogo */
    function aanzettenLogoLegend(device1200) {
      if (device1200.matches) { // If media query matches
        document.querySelector("#animalLegend").style.display = "block";
        document.querySelector(".jurassicParkLogo").style.display = "block"
      } else {
        document.querySelector("#animalLegend").style.display = "none";
        document.querySelector(".jurassicParkLogo").style.display = "none";
      }
    }

    var device1200 = window.matchMedia("(min-width: 1200px)")
    aanzettenLogoLegend(device1200);
    device1200.addListener(aanzettenLogoLegend);

  }

  /* Image preloader */
  var imagesPath = 'images/attractions/';

  var imagesList = [
    'accessroad-thumb-o.png',
    'baryonyx-thumb-o.png',
    'brachiosaurus-thumb-o.png',
    'dilophosaurus-thumb-o.png',
    'electricfence-thumb-o.png',
    'gallimimus-thumb-o.png',
    'heliport-thumb-o.png',
    'herrerasaurus-thumb-o.png',
    'metriacanthosaurus-thumb-o.png',
    'parasaurolophus-thumb-o.png',
    'port-thumb-o.png',
    'proceratosaurus-thumb-o.png',
    'segisaurus-thumb-o.png',
    'standard-jp-visitorcenter-thumb-o.png',
    'tourroad-thumb-o.png',
    'trex-thumb-o.png',
    'triceratops-thumb-o.png',
    'velociraptor-thumb-o.png',
    'visitorcenter-thumb-o.png'
  ];

  preloadImages();

  function preloadImages() {
    for (const afbeelding of imagesList) {
      var temp = new Image();
      temp.src = imagesPath + afbeelding;
      console.log(temp);
    }
  }

});