'use strict';

window.addEventListener('load', function () {
  verwijderProduct();
});


function verwijderProduct() {
  var verwijderen = document.querySelectorAll('.fa-trash-alt');

  // Zet op alle trashbin icoons op het scherm een event listener
  for (var verwijder of verwijderen) {

    verwijder.addEventListener('click', function (e) {

      // Als je op het trashbin icoon klikt, verwijder dan de product div
      e.target.parentNode.parentNode.parentNode.remove();
    });
  }
}














// Werkt nog niet: haal alle prijzen op uit het .prijs en tel deze op
function calculeerPrijs() {

var prijzen = document.querySelector('.priceBlock .prijs');
var prijs = parseInt(prijzen.value);

  console.log(parseInt(prijs));






}