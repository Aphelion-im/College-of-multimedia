"use strict";

window.addEventListener("load", function () {
  teller();
});

// Aantal personen tellen voor de rangeSlider. Pagina: Recepten.
function teller() {
  var rangeSlider = document.getElementById("rangeSlider");
  var sliderCounter = document.getElementById("sliderCounterRight");

  rangeSlider.addEventListener("input", function () {
    sliderCounter.textContent = rangeSlider.value;
  });
}