'use strict';

window.addEventListener('load', function () {

});

// Variabelen 
var zoomLevel = 0;
var zoomIn = d.getElementById('zoomIn');
var zoomUit = d.getElementById('zoomOut');
var attracties = d.getElementById('attracties');
var zoom = document.getElementById('zoomLevel');

// Event Listeners
zoomIn.addEventListener('click', inZoomen);
zoomUit.addEventListener('click', uitZoomen);

function inZoomen() {

  zoomLevel += 0.1;
  console.log('Zoom: ' + zoomLevel);
  if (zoomLevel >= 1) {
    console.log('Maximum zoom reached.');
    zoomLevel = 1;
  }
  zoom.innerHTML = 'Zoom: ' + (zoomLevel * 10).toFixed(0) + '&times;';
  // Transform rotate en scale moeten bijelkaar, anders werkt het niet
  //https://stackoverflow.com/questions/15768315/css3-how-to-rotate-and-scale-an-img-at-the-same-time/22699885
  attracties.style.transform = 'rotate(' + graden + 'deg) scale(' + (1 + zoomLevel) + ')';

  return zoomLevel;
}

function uitZoomen() {

  zoomLevel -= 0.1;
  console.log('Zoom: ' + zoomLevel);
  if (zoomLevel <= -1) {
    console.log('Minimum zoom reached.');
    zoomLevel = -1;
  }
  zoom.innerHTML = 'Zoom: ' + (zoomLevel * 10).toFixed(0) + '&times;';
  attracties.style.transform = 'rotate(' + graden + 'deg) scale(' + (1 + zoomLevel) + ')';

  return zoomLevel;
}


// Mousewheel zoom in/out
window.addEventListener("wheel", function (e) {

  var y = e.deltaY;
  if (y < 0) {
    console.log('Waarde Y: ' + y);
    inZoomen();
  } else {
    uitZoomen();
  }
});

// Zoom in/out with + and -. Reset with Spacebar.  
window.addEventListener("keydown", function (e) {

  switch (e.keyCode) {
    case 189:
      console.log('Zoom out');
      uitZoomen();
      break;
    case 187:
      console.log('Zoom in');
      inZoomen();
      break;
    case 32:
      console.log('Reset spacebar');
      resetView();
      break;
    case 109:
      console.log('Zoom out numeric');
      uitZoomen();
      break;
    case 107:
      console.log('Zoom in numeric');
      inZoomen();
      break;
  }

});