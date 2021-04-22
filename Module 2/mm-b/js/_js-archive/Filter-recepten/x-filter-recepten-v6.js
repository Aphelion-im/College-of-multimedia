'use strict';

window.addEventListener("load", function () {

  // Filter experimenteel André de Groot
  // Variabelen
  var cards = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');
  var totaalAantalRecepten = recepten.length;

  // Variabelen: filters



  // Init
  resultaat.innerText = 'Resultaten: ' + recepten.length;
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







  function resultaatAantal() {


    resultaat.innerText = 'Resultaten: ' + totaalAantalRecepten;



  }





















}); // Einde hoofd event listener