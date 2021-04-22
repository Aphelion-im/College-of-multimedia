'use strict';

window.addEventListener("load", function () {

  // Filter experimenteel André de Groot
  // Variabelen
  var cards = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');

  // Init
  resultaatAantal();

  // Maak alle kaarten onzichtbaar. Kaarten worden pas zichtbaar als je op een filter klikt.
  for (var card of cards) {
    card.style.display = 'none';
  }

  // Filters 
  // Vlees eventlistener v2
  vleesFilter.addEventListener('change', function () {
    var vleesCards = document.querySelectorAll('.card[data-dieet="vlees"]');

    if (vleesFilter.checked) {

      for (var vleesCard of vleesCards) {
        vleesCard.style.display = 'block';
      }
    } else {
      for (var vleesCard of vleesCards) {
        vleesCard.style.display = 'none';
      }
    }
    resultaatAantal();
  });

// Vis eventlistener v2
visFilter.addEventListener('change', function () {
  var visCards = document.querySelectorAll('.card[data-dieet="vis"]');

  if (visFilter.checked) {

    for (var visCard of visCards) {
      visCard.style.display = 'block';
    }
  } else {
    for (var visCard of visCards) {
      visCard.style.display = 'none';
    }
  }
  resultaatAantal();
});

// Vegetarisch eventlistener v2
vegetarischFilter.addEventListener('change', function () {
  var vegetarischCards = document.querySelectorAll('.card[data-dieet="vegetarisch"]');

  if (vegetarischFilter.checked) {

    for (var vegetarischCard of vegetarischCards) {
      vegetarischCard.style.display = 'block';
    }
  } else {
    for (var vegetarischCard of vegetarischCards) {
      vegetarischCard.style.display = 'none';
    }
  }
  resultaatAantal();
});

  // Koken eventlistener v2
  kokenFilter.addEventListener('change', function () {
    var kokenCards = document.querySelectorAll('.card[data-bereiding="koken"]');

    if (kokenFilter.checked) {

      for (var kokenCard of kokenCards) {
        kokenCard.style.display = 'block';
      }
    } else {
      for (var kokenCard of kokenCards) {
        kokenCard.style.display = 'none';
      }
    }
    resultaatAantal();
  });

  // Braden eventlistener v2
  bradenFilter.addEventListener('change', function () {
    var bradenCards = document.querySelectorAll('.card[data-bereiding="braden"]');

    if (bradenFilter.checked) {

      for (var bradenCard of bradenCards) {
        bradenCard.style.display = 'block';
      }
    } else {
      for (var bradenCard of bradenCards) {
        bradenCard.style.display = 'none';
      }
    }
    resultaatAantal();
  });






  // Bakken eventlistener v2
  bakkenFilter.addEventListener('change', function () {
    var bakkenCards = document.querySelectorAll('.card[data-bereiding="bakken"]');

    if (bakkenFilter.checked) {

      for (var bakkenCard of bakkenCards) {
        bakkenCard.style.display = 'block';
      }
    } else {
      for (var bakkenCard of bakkenCards) {
        bakkenCard.style.display = 'none';
      }
    }
    resultaatAantal();
  });




  function resultaatAantal() {
    var aantal = document.querySelectorAll('.card[style="display: block;"]');
    resultaat.innerText = 'Resultaten: ' + aantal.length;
  }



























}); // Einde hoofd event listener