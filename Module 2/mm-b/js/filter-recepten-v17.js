/* Filter recepten v17 */
'use strict';

window.addEventListener("load", function () {

  // Variabelen
  // Selecteer alle cards
  var cards = document.querySelectorAll('.card');
  // Resultaat output
  var resultaat = document.querySelector('.receptenFilter h2~span');
  // Aantal personen slider
  var rangeSlider = document.querySelector('#rangeSlider');
  // var receptenFilters = document.querySelectorAll('.receptenFilter input[type="checkbox"');
  var receptenFilters = document.querySelectorAll('.receptenFilter');

  resultaat.innerText = 'Resultaten: ' + recepten.length;

  for (var receptenFilter of receptenFilters) {

    // Ik heb er voor gekozen om een eventlistener te plaatsen met bubbling/capturing, en dan aan de hand
    // van de klik laten bepalen op welk onderdeel is geklikt. Zo hoefde ik niet een zooi
    // event listeners te plaaten (Bijvoorbeeld voor elke checkbox een event listener)
    receptenFilter.addEventListener('click', function (e) {
      // Aantal input velden aangevinkt. (Aantal in de array)
      var aantalDieet = document.querySelectorAll('[name="dieet"]:checked').length;
      var aantalBereiding = document.querySelectorAll('[name="bereiding"]:checked').length;

      // Ontrek de waarde van het aanvink veld. Bijvoorbeeld: vlees. 
      // Dit veld later vergelijken met de attribuut waarde op de kaart
      // Als er een match is, zet dan de flag op 1. Als de flag op 1 staat, laat de kaart dan zien
      var checkbox = e.target.getAttribute('value');

      // Bepaal de waarde van het Personen slider veld.
      var sliderValue = parseInt(rangeSlider.value);

      for (var card of cards) {
        // data-personen is het aantal personen waarvoor een recept is
        var cardWaarde = parseInt(card.getAttribute('data-personen'));

        // Dieet filter: Vlees, vis en vegetarisch
        // Als het geselecteerde overeenkomt met het attribuut van een recept EN is gevinkt, zet de flag dan op 1.
        if (card.getAttribute('data-dieet') == checkbox && e.target.checked) {
          card.setAttribute('data-dieet-flag', '1');
          // Als de checkbox niet is aangevinkt EN het geselecteerde overeenkomt met het attribuut
          // van het recept
        } else if (card.getAttribute('data-dieet') == checkbox && !e.target.checked) {
          card.setAttribute('data-dieet-flag', '0');
        }

        // Bereiding filter: Koken, braden en bakken. Zie bovenstaande uitleg.
        if (card.getAttribute('data-bereiding') == checkbox && e.target.checked) {
          card.setAttribute('data-bereiding-flag', '1');
        } else if (card.getAttribute('data-bereiding') == checkbox && !e.target.checked) {
          card.setAttribute('data-bereiding-flag', '0');
        }

        // Slider personen
        // Als de sliderwaarde overeenkomt met het aantal personen op het recept, zet dan de flag op 1
        if (sliderValue === cardWaarde) {
          card.setAttribute('data-personen-flag', '1');
        } else {
          card.setAttribute('data-personen-flag', '0');
        }

        // Laat alle cards standaard zien
        var dieet_show = true;
        var bereiding_show = true;
        var personen_show = true;

        // Als de dieet flag op 0 staat en dieet niet aangevinkt, laat dieet dan niet zien
        if (card.getAttribute('data-dieet-flag') == 0 && aantalDieet != 0) {
          dieet_show = false;
        }

        // Als de bereiding flag op 0 staat en bereiding niet aangevinkt, laat bereiding dan niet zien
        if (card.getAttribute('data-bereiding-flag') == 0 && aantalBereiding != 0) {
          bereiding_show = false;
        }

        // als personen flag op 0 staat en de slider waarde niet op 1 staat, laat personen dan niet zien
        if (card.getAttribute('data-personen-flag') == 0 && sliderValue != 1) {
          personen_show = false;
        }

        // Als dieet_show en personen_show beide op true staan, laat de cards dan zien
        if (dieet_show && bereiding_show && personen_show) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }


      }
      resultaatAantal();
    });
  }


  // Geef het resultaat weer. Dit wordt berekend aan de hand van het aantal zichtbare recepten.
  function resultaatAantal() {
    var aantal = document.querySelectorAll('.card[style="display: block;"]');
    resultaat.innerText = 'Resultaten: ' + aantal.length;
  }




}); // Einde hoofd event listener