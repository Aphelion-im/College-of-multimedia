'use strict';

window.addEventListener("load", function () {

  // Filter experimenteel André de Groot
  // Variabelen
  var cards = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');
  var rangeSlider = document.querySelector('#rangeSlider');

  // Init
  // resultaatAantal();

  // Maak alle kaarten onzichtbaar. Kaarten worden pas zichtbaar als je op een filter klikt.
  // showRecipes();



  var receptenFilters = document.querySelectorAll('.receptenFilter input[type="checkbox"');

  for (var receptenFilter of receptenFilters) {

    receptenFilter.addEventListener('click', function () {

      // Vraag de waarde van de checkbox op. Bijvoorbeeld: vlees, vis, vegetarisch, etc.
      var checkbox = this.getAttribute('value');
      console.log(checkbox);



      for (var card of cards) {


        if (card.getAttribute('data-dieet') == checkbox && this.checked) {
          card.setAttribute('data-dieet-flag', '1');
        } else if (card.getAttribute('data-dieet') == checkbox && !this.checked) {
          card.setAttribute('data-dieet-flag', '0');
        } else if (card.getAttribute('data-bereiding') == checkbox && this.checked) {
          card.setAttribute('data-bereiding-flag', '1');
        } else if (card.getAttribute('data-bereiding') == checkbox && !this.checked) {
          card.setAttribute('data-bereiding-flag', '0');
        }


        // Laat kaarten wel of niet zien, aan de hand van de waarden van hun flag attributen 
        if (card.getAttribute('data-dieet-flag') == '0' || card.getAttribute('data-bereiding-flag') == '0') {
          card.style.display = 'none';
        } else {
          card.style.display = 'block';
        }





      }

      // if($(this).attr("data-rating-flag") == "0" || $(this).attr("data-brand-flag") == "0"){
      // 	$(this).hide();
      // } else {
      // 	$(this).show();
      // }




      resultaatAantal();
    });


  }









  // Filters 
  // Vlees eventlistener v3
  // vleesFilter.addEventListener('change', function () {

  //   if (vleesFilter.checked) {

  //     for (var card of cards) {

  //       if (card.getAttribute('data-dieet') === 'vlees') {
  //         card.setAttribute('data-dieet-flag', '1');
  //       } else {
  //         card.setAttribute('data-dieet-flag', '0');
  //       }
  //     }
  //   } else {
  //     for (var card of cards) {
  //       card.setAttribute('data-dieet-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });


  // Vis eventlistener v3
  // visFilter.addEventListener('change', function () {

  //   if (visFilter.checked) {

  //     for (var card of cards) {

  //       if (card.getAttribute('data-dieet') === 'vis') {
  //         card.setAttribute('data-dieet-flag', '1');
  //       } else {
  //         card.setAttribute('data-dieet-flag', '0');
  //       }
  //     }
  //   } else {
  //     for (var card of cards) {
  //       card.setAttribute('data-dieet-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });


  // Vegetarisch eventlistener v3
  // vegetarischFilter.addEventListener('change', function () {

  //   if (vegetarischFilter.checked) {

  //     for (var card of cards) {

  //       if (card.getAttribute('data-dieet') === 'vegetarisch') {
  //         card.setAttribute('data-dieet-flag', '1');
  //       } else {
  //         card.setAttribute('data-dieet-flag', '0');
  //       }
  //     }
  //   } else {
  //     for (var card of cards) {
  //       card.setAttribute('data-dieet-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });

  // Koken eventlistener v3
  // kokenFilter.addEventListener('change', function () {

  //   if (kokenFilter.checked) {

  //     for (var card of cards) {

  //       if (card.getAttribute('data-bereiding') === 'koken') {
  //         card.setAttribute('data-bereiding-flag', '1');
  //       } else {
  //         card.setAttribute('data-bereiding-flag', '0');
  //       }
  //     }
  //   } else {
  //     for (var card of cards) {
  //       card.setAttribute('data-bereiding-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });

  // Braden eventlistener v3
  // bradenFilter.addEventListener('change', function () {

  //   if (bradenFilter.checked) {

  //     for (var card of cards) {

  //       if (card.getAttribute('data-bereiding') === 'braden') {
  //         card.setAttribute('data-bereiding-flag', '1');
  //       } else {
  //         card.setAttribute('data-bereiding-flag', '0');
  //       }
  //     }
  //   } else {
  //     for (var card of cards) {
  //       card.setAttribute('data-bereiding-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });

  // Bakken eventlistener v3
  // bakkenFilter.addEventListener('change', function () {

  //   if (bakkenFilter.checked) {

  //     for (var card of cards) {

  //       if (card.getAttribute('data-bereiding') === 'bakken') {
  //         card.setAttribute('data-bereiding-flag', '1');
  //       } else {
  //         card.setAttribute('data-bereiding-flag', '0');
  //       }
  //     }
  //   } else {
  //     for (var card of cards) {
  //       card.setAttribute('data-bereiding-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });

  // Rangeslider eventlistener v3
  // rangeSlider.addEventListener('change', function () {
  //   var sliderValue = parseInt(rangeSlider.value);

  //   for (var card of cards) {

  //     var cardWaarde = parseInt(card.getAttribute('data-personen'));

  //     if (sliderValue === cardWaarde) {
  //       card.setAttribute('data-personen-flag', '1');
  //     } else {
  //       card.setAttribute('data-personen-flag', '0');
  //     }
  //   }
  //   showRecipes();
  // });


  // function showRecipes() {

  //   for (var card of cards) {

  //     var dataPersonen = parseInt(card.getAttribute('data-personen-flag'));
  //     var dataDieet = parseInt(card.getAttribute('data-dieet-flag'));
  //     var dataBereiding = parseInt(card.getAttribute('data-bereiding-flag'));

  //     if (dataPersonen === 1) {
  //       card.style.display = 'block';
  //     } else if (dataDieet === 1) {
  //       card.style.display = 'block';
  //     } else if (dataBereiding === 1) {
  //       card.style.display = 'block';
  //     } else {
  //       card.style.display = 'none';
  //     }
  //   }
  //   card.getAttribute('data-dieet-flag')
  // }




















  // Geef het resultaat weer. Dit wordt berekend aan de hand van het aantal zichtbare recepten.
  function resultaatAantal() {
    var aantal = document.querySelectorAll('.card[style="display: block;"]');
    resultaat.innerText = 'Resultaten: ' + aantal.length;
  }




}); // Einde hoofd event listener