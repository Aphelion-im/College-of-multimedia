'use strict';

/* Image preloader */
var imagesPath = 'images/hero/';

var imagesList = [
  'bami-soep-o.jpg',
  'cuisine-keukenblad-ingredienten-o.jpg',
  'hero-4-o.jpg',
  'hero-5-o.jpg',
  'hero-6-o.jpg',
  'hero-7-o.jpg',
  'hero-nigella-rode-jurk-o.jpg',
  'shakshuka-o.jpg',
  'sushi-o.jpg',
  'thaise-curry-o.jpg',
  'vegetarische-sushi-o.jpg',
  'vintage-cooking-o.jpg',
  'vispan-met-schelvis-en-prei-o.jpg',
  'wortelsoep-met-kurkuma-o.jpg'
];

preloadImages();

function preloadImages() {
  for (const afbeelding of imagesList) {
    var temp = new Image();
    temp.src = imagesPath + afbeelding;
    console.log(temp);
  }
}