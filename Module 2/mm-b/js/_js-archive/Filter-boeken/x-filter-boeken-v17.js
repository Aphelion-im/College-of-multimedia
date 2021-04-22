/* Gebaseerd op Filter recepten v17 */
// Filter boeken v18 */

'use strict';

window.addEventListener("load", function () {


  // Variabelen
  // Selecteer alle cards
  var cards = document.querySelectorAll('.card');
  // Resultaat output
  var resultaat = document.querySelector('.boekenFilter h2~span');
  // Aantal personen slider
  var rangeSlider = document.querySelector('#rangeSliderPrijs');

  var boekenFilters = document.querySelectorAll('.boekenFilter');

  
  for (var boekenFilter of boekenFilters) {

    // Ik heb er voor gekozen om een eventlistener te plaatsen met bubbling/capturing, en dan aan de hand
    // van de klik laten bepalen op welk onderdeel is geklikt. Zo hoefde ik niet een zooi
    // event listeners te plaaten (Bijvoorbeeld voor elke checkbox een event listener)
    boekenFilter.addEventListener('click', function (e) {
      // Aantal input velden aangevinkt. (Aantal in de array)
      var aantalTaal = document.querySelectorAll('[name="taal"]:checked').length;
      var aantalKeuken = document.querySelectorAll('[name="keuken"]:checked').length;

      // Ontrek de waarde van het aanvink veld. Bijvoorbeeld: vlees. 
      // Dit veld later vergelijken met de attribuut waarde op de kaart
      // Als er een match is, zet dan de flag op 1. Als de flag op 1 staat, laat de kaart dan zien
      var checkbox = e.target.getAttribute('value');

      // Bepaal de waarde van het Personen slider veld.
      var sliderValue = parseInt(rangeSlider.value);

      for (var card of cards) {
        // data-personen is het aantal personen waarvoor een recept is
        var cardWaarde = parseInt(card.getAttribute('data-bedrag'));

        // Dieet filter: Vlees, vis en vegetarisch
        // Als het geselecteerde overeenkomt met het attribuut van een recept EN is gevinkt, zet de flag dan op 1.
        if (card.getAttribute('data-taal') == checkbox && e.target.checked) {
          card.setAttribute('data-taal-flag', '1');
          // Als de checkbox niet is aangevinkt EN het geselecteerde overeenkomt met het attribuut
          // van het recept
        } else if (card.getAttribute('data-taal') == checkbox && !e.target.checked) {
          card.setAttribute('data-taal-flag', '0');
        }

        // Bereiding filter: Koken, braden en bakken. Zie bovenstaande uitleg.
        if (card.getAttribute('data-keuken') == checkbox && e.target.checked) {
          card.setAttribute('data-keuken-flag', '1');
        } else if (card.getAttribute('data-keuken') == checkbox && !e.target.checked) {
          card.setAttribute('data-keuken-flag', '0');
        }

        // Slider personen
        // Als de sliderwaarde overeenkomt met het aantal personen op het recept, zet dan de flag op 1
        if (sliderValue === cardWaarde) {
          card.setAttribute('data-bedrag', '1');
        } else {
          card.setAttribute('data-bedrag-flag', '0');
        }

        // Laat alle cards standaard zien
        var taal_show = true;
        var keuken_show = true;
        var bedrag_show = true;

        // Als de dieet flag op 0 staat en dieet niet aangevinkt, laat dieet dan niet zien
        if (card.getAttribute('data-taal-flag') == 0 && aantalTaal != 0) {
          taal_show = false;
        }

        // Als de bereiding flag op 0 staat en bereiding niet aangevinkt, laat bereiding dan niet zien
        if (card.getAttribute('data-keuken-flag') == 0 && aantalKeuken != 0) {
          keuken_show = false;
        }

        // als personen flag op 0 staat en de slider waarde niet op 1 staat, laat personen dan niet zien
        if (card.getAttribute('data-bedrag-flag') == 0 && sliderValue != 1) {
          bedrag_show = false;
        }

        // Als dieet_show en personen_show beide op true staan, laat de cards dan zien
        if (taal_show && keuken_show && bedrag_show) {
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
    var aantal = document.querySelectorAll('.boekenMain .card[style="display: block;"]');
    resultaat.innerText = 'Resultaten: ' + aantal.length;
  }




}); // Einde hoofd event listener