'use strict';

window.addEventListener("load", function () {

  // Filter experimenteel André de Groot
  // Variabelen
  var cards = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');


  // Variabelen: filters



  // Init
  resultaatAantal();
  // Maak alle kaarten onzichtbaar. Kaarten worden pas zichtbaar als je op een filter klikt.
  for (var card of cards) {
    card.style.display = 'none';
  }


  // Dieet: Vlees event listener
  vleesFilter.addEventListener('change', function () {

    if (vleesFilter.checked) {
      console.log('Vlees checked!');

      for (var card of cards) {
        var dieet = card.getAttribute('data-dieet');
        console.log(dieet);
        if (dieet === 'vlees') {
          card.style.display = 'block';
        }
      }
    } else {
      console.log('Vlees unchecked!');

      for (var card of cards) {
        var dieet = card.getAttribute('data-dieet');
        console.log(dieet);
        if (dieet === 'vlees') {
          card.style.display = 'none';
        }
      }
    }
    resultaatAantal();
  });



  // Dieet: Vis event listener
  visFilter.addEventListener('change', function () {

    if (visFilter.checked) {
      console.log('Vis checked!');

      for (var card of cards) {
        var dieet = card.getAttribute('data-dieet');
        console.log(dieet);
        if (dieet === 'vis') {
          card.style.display = 'block';

        }
      }
    } else {
      console.log('Vis unchecked!');

      for (var card of cards) {
        var dieet = card.getAttribute('data-dieet');
        console.log(dieet);
        if (dieet === 'vis') {
          card.style.display = 'none';

        }
      }
    }

    resultaatAantal();
  });


  // Dieet: Vegetarisch event listener
  vegetarischFilter.addEventListener('change', function () {

    if (vegetarischFilter.checked) {
      console.log('Vegetarisch checked!');

      for (var card of cards) {
        var dieet = card.getAttribute('data-dieet');
        console.log(dieet);
        if (dieet === 'vegetarisch') {
          card.style.display = 'block';

        }
      }
    } else {
      console.log('Vegetarisch unchecked!');

      for (var card of cards) {
        var dieet = card.getAttribute('data-dieet');
        console.log(dieet);
        if (dieet === 'vegetarisch') {
          card.style.display = 'none';

        }
      }
    }
    resultaatAantal();
  });


  // Dieet: Koken event listener
  kokenFilter.addEventListener('change', function () {

    if (kokenFilter.checked) {
      console.log('Koken checked!');

      for (var card of cards) {
        var bereiding = card.getAttribute('data-bereiding');
        console.log(bereiding);
        if (bereiding === 'koken') {
          card.style.display = 'block';

        }
      }
    } else {
      console.log('Bereiding unchecked!');

      for (var card of cards) {
        var bereiding = card.getAttribute('data-bereiding');
        console.log(bereiding);
        if (bereiding === 'koken') {
          card.style.display = 'none';

        }
      }
    }
    resultaatAantal();
  });

  // Dieet: Braden event listener
  bradenFilter.addEventListener('change', function () {

    if (bradenFilter.checked) {
      console.log('Braden checked!');

      for (var card of cards) {
        var bereiding = card.getAttribute('data-bereiding');
        console.log(bereiding);
        if (bereiding === 'braden') {
          card.style.display = 'block';

        }
      }
    } else {
      console.log('Braden unchecked!');

      for (var card of cards) {
        var bereiding = card.getAttribute('data-bereiding');
        console.log(bereiding);
        if (bereiding === 'braden') {
          card.style.display = 'none';

        }
      }
    }
    resultaatAantal();
  });

  // // Dieet: Bakken event listener
  // bakkenFilter.addEventListener('change', function () {

  //   if (bakkenFilter.checked) {
  //     console.log('Bakken checked!');

  //     for (var card of cards) {
  //       var bereiding = card.getAttribute('data-bereiding');
  //       console.log(bereiding);
  //       if (bereiding === 'bakken') {
  //         card.style.display = 'block';

  //       }
  //     }
  //   } else {
  //     console.log('Bakken unchecked!');

  //     for (var card of cards) {
  //       var bereiding = card.getAttribute('data-bereiding');
  //       console.log(bereiding);
  //       if (bereiding === 'bakken') {
  //         card.style.display = 'none';

  //       }
  //     }
  //   }
  //   resultaatAantal();
  // });

// Bakken eventlistener v2

bakkenFilter.addEventListener('change', function() {

if (bakkenFilter.checked) {

var bakkenCards = document.querySelectorAll('.card[data-bereiding="bakken"]');

for (var bakkenCard of bakkenCards) {
  bakkenCard.style.display = 'block';
}


}





resultaatAantal();

});




  function resultaatAantal() {
    var aantal = document.querySelectorAll('.card[style="display: block;"]');
    resultaat.innerText = 'Resultaten: ' + aantal.length;
  }



























}); // Einde hoofd event listener