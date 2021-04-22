"use strict";

window.addEventListener("load", function () {
  setFooterDate();
});

/* Stel de footer datum jaartal in. Deze zal elk jaar automatisch geupdate worden */
function setFooterDate() {
  var date = new Date();
  var fullYear = date.getFullYear();
  var currentYear = document.getElementById("currentYear");
  currentYear.textContent = fullYear + ". ";
}