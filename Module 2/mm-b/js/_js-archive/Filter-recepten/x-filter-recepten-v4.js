'use strict';

window.addEventListener("load", function () {

  // Filter experimenteel André de Groot
  // Variabelen
  var dataPersonen = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');
  var receptenAantalTotaal = recepten.length;

  // Variabelen: filters
  var vleesFilter = document.querySelector('#vleesFilter');
  var rangeSlider = document.querySelector('#rangeSlider');
  var sliderValue;

  // Init
  resultaat.innerText = 'Resultaten: ' + recepten.length;

  // Event listeners
  rangeSlider.addEventListener('change', filterAantalPersonen);
  vleesFilter.addEventListener('change', filterVlees);


  // Functies 

  // Tel het aantal recepten met vlees
  function filterVlees() {
    if (vleesFilter.checked) {
      var dieet = 'vlees';
      var aantalVlees = recepten.filter(function (obj) {
        return obj.filterKey[0] === dieet;
      }).length;
    }
    resultaatWeergeven(dieet, aantalVlees, null, null);
  }

  // Tel 'X Aantal personen' recepten in de database die overeenkomen met het getal op de slider
  function filterAantalPersonen() {
    sliderValue = parseInt(rangeSlider.value);
    var aantalPersonen = recepten.filter(function (obj) {
      return obj.aantalPersonen === sliderValue;
    }).length;
    resultaatWeergeven(null, null, sliderValue, aantalPersonen);
  }





  function resultaatWeergeven(dieet, aantalVlees, sliderValue, aantalPersonen) {



    for (var dataPersoon of dataPersonen) {

      var dataPersonenWaarde = parseInt(dataPersoon.getAttribute('data-personen'));
      var dataDieet = dataPersoon.getAttribute('data-dieet');
      var aantalResultaten = aantalVlees + aantalPersonen;

      // Vlees filter
      if (dieet === 'vlees' && dataDieet === dieet) {
        dataPersoon.style.display = 'block';
        resultaat.innerText = 'Resultaten: ' + aantalResultaten;
      } else if (!vleesFilter.checked) {
        resultaat.innerText = 'Resultaten: ' + receptenAantalTotaal;
        dataPersoon.style.display = 'block';
      } else {
        dataPersoon.style.display = 'none';
      }
  




      // // Range slider
      // else if (sliderValue === dataPersonenWaarde) {
      //   console.log('SliderValue: ' + sliderValue);
      //   dataPersoon.style.display = 'block';
      //   resultaat.innerText = 'Resultaten: ' + aantalResultaten;
      // } else if (sliderValue === 1) {
      //   dataPersoon.style.display = 'block';
      //   resultaat.innerText = 'Resultaten: ' + receptenAantalTotaal;
      // } else if (aantalPersonen === 0) {
      //   dataPersoon.style.display = 'none';
      //   resultaat.innerText = 'Resultaten: ' + '0';
      // } 









    }
  }





}); // Einde event listener