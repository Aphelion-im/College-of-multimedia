'use strict';

window.addEventListener("load", function () {
  filterRecepten();
});

// Filter experimenteel André

function filterRecepten() {
var rangeSlider = document.querySelector('#rangeSlider');

rangeSlider.addEventListener('change', function () {

  // Tel het aantal recepten met aangegeven waarde in de Aantal personen slider
  var id = parseInt(rangeSlider.value);
  var count = recepten.filter(function (obj) {
    return obj.aantalPersonen === id;
  }).length;
  var resultaat = document.querySelector('.receptenFilter h2~span');
  resultaat.innerText = 'Resultaten: ' + count;

// Filter op aantal personen. Bekijk de waarde in data-personen attribute. 
// Data attribuut is aangegeven in de recepten database
  var dataPersonen = document.querySelectorAll('.card');

  for (var dataPersoon of dataPersonen) {
    var dataPersonenWaarde = parseInt(dataPersoon.getAttribute('data-personen'));

    if (id === id && dataPersonenWaarde === id) {

      // Verberg de cards die niet overeenkomen met het nummer op de rangeSlider
      dataPersoon.style.display = 'block';
    } else if (id === 1) {
      dataPersoon.style.display = 'block';
      resultaat.innerText = 'Resultaten: ' + recepten.length;
    } else {
      dataPersoon.style.display = 'none';
    }
  }

});

}