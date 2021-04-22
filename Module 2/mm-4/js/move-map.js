'use strict';
window.addEventListener('load', function () {

});

// Variabelen
var moveUpMap = d.getElementById('moveUp');
var moveDownMap = d.getElementById('moveDown');
var moveLeftMap = d.getElementById('moveLeft');
var moveRightMap = d.getElementById('moveRight');
var attracties = d.getElementById('attracties');
var mapY = 1;
var mapX = 32;

// Event listeners
moveUpMap.addEventListener('click', moveUp);
moveDownMap.addEventListener('click', moveDown);
moveLeftMap.addEventListener('click', moveLeft);
moveRightMap.addEventListener('click', moveRight);


// Functions 
/* Move/pan up map */
function moveUp() {
  mapY += 5;
  console.log('mapY: ' + mapY);

  if (mapY >= 50) {
    mapY = 50;
  }
  attracties.style.top = mapY + '%';
}

/* Move/pan down map */
function moveDown() {
  mapY -= 5;
  console.log('mapY: ' + mapY);

  if (mapY <= -50) {
    mapY = -50;
  }
  attracties.style.top = mapY + '%';
}

/* Move/pan left map */
function moveLeft() {
  mapX += 5;
  console.log('mapX: ' + mapX);

  if (mapX >= 60) {
    mapX = 60;
  }
  attracties.style.left = mapX + '%';
}

/* Move/pan left map */
function moveRight() {
  mapX -= 5;
  console.log('mapX: ' + mapX);

  if (mapX <= 0) {
    mapX = 0;
  }
  attracties.style.left = mapX + '%';
}

// Keyboard arrow keys 
window.addEventListener("keydown", function (e) {

  switch (e.keyCode) {
    case 37:
      console.log('Left');
      moveLeft();
      break;
    case 38:
      console.log('Up');
      moveUp();
      break;
    case 39:
      console.log('Right');
      moveRight();
      break;
    case 40:
      console.log('Down');
      moveDown();
      break;
  }
});

