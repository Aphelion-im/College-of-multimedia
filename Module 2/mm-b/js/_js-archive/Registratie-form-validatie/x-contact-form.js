"use strict";

window.addEventListener("load", function () {
  valideren();
  disableButton();
});

var verzendKnop = document.getElementById("verzendKnop");

//Schakel de Verstuur knop uit als het contactformulier nog niet is gevalideerd
function valideren() {
  var naam = document.getElementById("naam");

  naam.addEventListener("input", validateForm);

  function validateForm() {
    if (naam.value == "") {
      disableButton();
    } else {
      enableButton();
    }
  }
}

function disableButton() {
  verzendKnop.disabled = true;
  verzendKnop.classList.remove("knopOranje");
  verzendKnop.classList.add("knopGrijs");
}

function enableButton() {
  verzendKnop.disabled = false;
  verzendKnop.classList.remove("knopGrijs");
  verzendKnop.classList.add("knopOranje");
}