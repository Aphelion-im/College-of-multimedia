/* Tabbladen v1. Deze code nog refactoren. Het werkt, maar is niet DRY geschreven! */
'use strict';

window.addEventListener('load', tabbladen);

function tabbladen() {

  var tabbladen = document.querySelector('.menuLinksMijnAccount');
  var links = document.querySelectorAll('.menuLinksMijnAccount ul li');
  var header3 = document.querySelector('.mijnAccount h3');
  var tab1 = document.querySelector('.mijnAccountFormulier');
  var tab2 = document.querySelector('.tab2');
  var tab3 = document.querySelector('.tab3');
  var tab4 = document.querySelector('.tab4');
  var x = window.matchMedia("(min-width: 768px)");

  // Zet alle secundaire tabbladen standaard uit. 
  tab2.style.display = 'none';
  tab3.style.display = 'none';
  tab4.style.display = 'none';

  // Zet een event listener op de parent van de list items
  tabbladen.addEventListener('click', function (e) {

    //  e.target.preventDefault;

    // Vraag de waarde op van het id attribuut
    var tabblad = e.target.getAttribute('id');

    // Als de waarde overeenkomt met tabX, laat dan tabX zien, en zet tabY, etc. uit, en verander de titel
    // Als er op een tabblad gelikt wordt, maak deze dan zichtbaar actief, door de link te onderstrepen
    // Zo kan de bezoeker zien waar hij of zij zich bevindt.
    if (tabblad == 'tab1') {
      tabblad1correctie(x);
      tab2.style.display = 'none';
      tab3.style.display = 'none';
      tab4.style.display = 'none';
      header3.innerText = 'Persoonlijke gegevens';
      // Na klikken op een tabblad, verwijder dan de onderstrepingen op de andere tabbladen
      for (var link of links) {
        link.style.textDecoration = 'none';
      }
      // Maak een onderstreping op het tabblad waarop geklikt is
      e.target.style.textDecoration = 'underline';

    } else if (tabblad == 'tab2') {
      tab2.style.display = 'block';
      tab1.style.display = 'none';
      tab3.style.display = 'none';
      tab4.style.display = 'none';
      header3.innerText = 'Bestellingen';
      for (var link of links) {
        link.style.textDecoration = 'none';
      }
      e.target.style.textDecoration = 'underline';
    } else if (tabblad == 'tab3') {
      tab1.style.display = 'none';
      tab2.style.display = 'none';
      tab3.style.display = 'block';
      tab4.style.display = 'none';
      header3.innerText = 'Cadeaubonnen';
      for (var link of links) {
        link.style.textDecoration = 'none';
      }
      e.target.style.textDecoration = 'underline';
    } else if (tabblad == 'tab4') {
      tab1.style.display = 'none';
      tab2.style.display = 'none';
      tab3.style.display = 'none';
      tab4.style.display = 'block';
      header3.innerText = 'Verlanglijst';
      for (var link of links) {
        link.style.textDecoration = 'none';
      }
      e.target.style.textDecoration = 'underline';
    }
  }, true);

  // Omdat voor tabblad 1 verschillende display zijn ingesteld, worden deze hier gecorrigeerd met
  // Javascript media queries.
  function tabblad1correctie(x) {
    if (x.matches) { // Als de media query gelijk is aan: min-width: 768px.
      tab1.style.display = 'flex';
    } else {
      tab1.style.display = 'initial';
    }
  }

  x.addListener(tabblad1correctie) // Blijf luisteren naar veranderingen qua resolutie e.d.



}