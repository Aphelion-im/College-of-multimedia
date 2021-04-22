'use strict';

window.addEventListener("load", function () {

  // Filter experimenteel André de Groot
  // Variabelen
  var dataPersonen = document.querySelectorAll('.card');
  var resultaat = document.querySelector('.receptenFilter h2~span');
  var receptenAantalTotaal = recepten.length;

   // Tel aantal gerechten met vlees
   var aantalVlees = recepten.filter(function (obj) {
    return obj.filterKey[0] === 'vlees';
  }).length;

  // Tel aantal gerechten met vis
  var aantalVis = recepten.filter(function (obj) {
    return obj.filterKey[0] === 'vis';
  }).length;

  // Variabelen: filters
  var vleesFilter = document.querySelector('#vleesFilter');
  var visFilter = document.querySelector('#visFilter');
  var vegetarischFilter = document.querySelector('#vegetarischFilter');
  var rangeSlider = document.querySelector('#rangeSlider');
  var sliderValue;

  // Init
  resultaat.innerText = 'Resultaten: ' + recepten.length;

  // Event listeners
  // rangeSlider.addEventListener('change', filterAantalPersonen);
  vleesFilter.addEventListener('change', resultaatWeergeven);
  // visFilter.addEventListener('change', resultaatWeergeven);
  // vegetarischFilter.addEventListener('change', filterVegetarisch);


  // Functies 

  // Tel het aantal recepten met vlees






  // Tel 'X Aantal personen' recepten in de database die overeenkomen met het getal op de slider
  // function filterAantalPersonen() {
  //   sliderValue = parseInt(rangeSlider.value);
  //   var aantalPersonen = recepten.filter(function (obj) {
  //     return obj.aantalPersonen === sliderValue;
  //   }).length;
  //   resultaatWeergeven(null, null, sliderValue, aantalPersonen);
  // }





  function resultaatWeergeven() {
    // var dataPersonenWaarde = parseInt(dataPersoon.getAttribute('data-personen'));

    var aantalResultaten = aantalVlees;



      if (vleesFilter.checked) {

        // Vlees filter
        for (var dataPersoon of dataPersonen) {
          var dataDieet = dataPersoon.getAttribute('data-dieet');
        if (dataDieet === 'vlees') {
          dataPersoon.style.display = 'block';
          resultaat.innerText = 'Resultaten: ' + aantalResultaten;
        } 
      }
      }  else if (!vleesFilter.checked) {
        resultaat.innerText = 'Resultaten: ' + receptenAantalTotaal;
        dataPersoon.style.display = 'block';
      } else {
        dataPersoon.style.display = 'none';
      } 




  
  } // einde functie weergeven



}); // Einde hoofd event listener


// } else if (obj.filterKey[0] === 'vis' && dataDieet === dieet) {
//   dataPersoon.style.display = 'block';
//   resultaat.innerText = 'Resultaten: ' + aantalResultaten;
// } else if (!visFilter.checked) {
//   resultaat.innerText = 'Resultaten: ' + receptenAantalTotaal;
//   dataPersoon.style.display = 'block';
// } 

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