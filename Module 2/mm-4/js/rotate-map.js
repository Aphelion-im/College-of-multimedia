'use strict';

window.addEventListener('load', function () {

});

// Variabelen 
var roteerLinks = d.querySelector('#rotateLeft');
var roteerRechts = d.querySelector('#rotateRight');
var attracties = d.querySelector('#attracties');
var compass = d.querySelector('.compass');
var outputGraden = d.querySelector('.graden');
var graden = 0;

// Event Listeners
roteerLinks.addEventListener('click', rotateLeft);
roteerRechts.addEventListener('click', rotateRight);

/* Roteren landkaart */
function rotateLeft() {

  graden -= 10;

  console.log(graden + ' graden.');

  if (graden <= -90) {
    graden = -90;
  }

  outputGraden.innerHTML = 'Rotation: ' + graden + '&#176;';
  compass.style.transform = 'rotate(' + graden + 'deg)';
  attracties.style.transform = 'rotate(' + graden + 'deg) scale(' + (1 + zoomLevel) + ')';

  return graden;

}

function rotateRight() {

  graden += 10;

  console.log(graden + ' graden.');
  if (graden >= 90) {
    graden = 90;
  }
  outputGraden.innerHTML = 'Rotation: ' + graden + '&#176;';
  compass.style.transform = 'rotate(' + graden + 'deg)';
  attracties.style.transform = 'rotate(' + graden + 'deg) scale(' + (1 + zoomLevel) + ')';

}

   