"use strict";

window.addEventListener("load", function () {
  tellerPrijs();
});

// Aantal personen tellen voor de rangeSlider. Pagina: Recepten.
function tellerPrijs() {
  var rangeSliderPrijs = document.querySelector("#rangeSliderPrijs");
  var sliderCounter = document.getElementById("sliderCounterPrijsRight");

  rangeSliderPrijs.addEventListener("input", function () {
    sliderCounter.innerHTML = '&euro; ' + rangeSliderPrijs.value;
  });
}