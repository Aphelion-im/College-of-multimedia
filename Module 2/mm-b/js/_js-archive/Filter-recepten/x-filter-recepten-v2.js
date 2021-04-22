'use strict';

window.addEventListener("load", function () {
  filterSlider();
  filterVlees();
});

// Filter experimenteel André

function filterSlider() {
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

function filterVlees() {

var vleesFilter = document.querySelector('#vleesFilter');

vleesFilter.addEventListener('change', function () {

  // Tel het aantal recepten met aangegeven waarde in Vlees filter
  if (vleesFilter.checked) {
  var idVlees = 'vlees';
  var countVlees = recepten.filter(function (obj) {
    console.log(obj.filterKey[0] === idVlees);
    return obj.filterKey[0] === idVlees;
  }).length;

  var resultaat = document.querySelector('.receptenFilter h2~span');
  resultaat.innerText = 'Resultaten: ' + countVlees;
}

// Filter op aantal personen. Bekijk de waarde in data-dieet attribute. 
// Data attribuut is aangegeven in de recepten database
var dataPersonen = document.querySelectorAll('.card');

for (var dataPersoon of dataPersonen) {
  var dataPersonenWaarde = dataPersoon.getAttribute('data-dieet');

  if (idVlees === 'vlees' && dataPersonenWaarde === idVlees) {

    // Verberg de cards die niet overeenkomen met het nummer op de rangeSlider
    dataPersoon.style.display = 'block';
  } else if (idVlees === 1) {
    dataPersoon.style.display = 'block';
    resultaat.innerText = 'Resultaten: ' + recepten.length;
  } else {
    dataPersoon.style.display = 'none';
  }
}
});
}