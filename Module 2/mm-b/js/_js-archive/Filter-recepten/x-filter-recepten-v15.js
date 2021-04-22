'use strict';

window.addEventListener("load", function () {



  // Filter experimenteel André de Groot
  // Variabelen
  var cards = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');
  var rangeSlider = document.querySelector('#rangeSlider');
  var receptenFilters = document.querySelectorAll('.receptenFilter input[type="checkbox"');



  for (var receptenFilter of receptenFilters) {

    receptenFilter.addEventListener('click', function () {
      var aantalDieet = document.querySelectorAll('[name="dieet"]:checked').length;
      var aantalBereiding = document.querySelectorAll('[name="bereiding"]:checked').length;
      
      console.log(aantalDieet, aantalBereiding);


      var checkbox = this.getAttribute('value');
      console.log(checkbox);
      console.log(this.checked + ' ' + checkbox);

      for (var card of cards) {

        // Dieet filter: Vlees, vis en vegetarisch
        if (card.getAttribute('data-dieet') == checkbox && this.checked) {
          card.setAttribute('data-dieet-flag', '1');
        } else if (card.getAttribute('data-dieet') == checkbox && !this.checked) {
          card.setAttribute('data-dieet-flag', '0');
        } 
        
        // Bereiding filter: Koken, braden en bakken
        if (card.getAttribute('data-bereiding') == checkbox && this.checked) {
          card.setAttribute('data-bereiding-flag', '1');
        } else if (card.getAttribute('data-bereiding') == checkbox && !this.checked) {
          card.setAttribute('data-bereiding-flag', '0');
        }

        var dieet_show = true;
        var bereiding_show = true;

        if (card.getAttribute('data-dieet-flag') == 0 && aantalDieet != 0 ){
          dieet_show = false; // niet alles staat uit dus mag DEZE uit
      }
      
     if (card.getAttribute('data-bereiding-flag') == 0 && aantalBereiding != 0 ){
          bereiding_show = false; // niet alles staat uit dus mag DEZE uit
      }
      
      if (dieet_show && bereiding_show) {
          card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }


      }

      resultaatAantal();
    });
  }




  // function showHideCards() {

  //   for (var card of cards) {
  //     if ((card.getAttribute('data-dieet-flag') == '0') || (card.getAttribute('data-bereiding-flag') == '0')) {
        
  //       card.style.display = 'none';
  //       console.log('Uitgezet: ');
  //     } else {
  //       card.style.display = 'block';
  //       console.log('aangezet');
  //     }
  //   }
  // }


  // Geef het resultaat weer. Dit wordt berekend aan de hand van het aantal zichtbare recepten.
  function resultaatAantal() {
    var aantal = document.querySelectorAll('.card[style="display: block;"]');
    resultaat.innerText = 'Resultaten: ' + aantal.length;
  }




}); // Einde hoofd event listener