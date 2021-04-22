/* Uitklapmenu v3.0 */

"use strict";

window.addEventListener("load", function () {
  uitklapMenu();
});

function uitklapMenu() {

  var filterTop = document.querySelector('.filterTop h3.uitklapMenu');
  var menuInhoudTop = document.querySelector(".filterTop .menuInhoud");

  var filterBottom = document.querySelector('.filterBottom h3.uitklapMenu');
  var menuInhoudBottom = document.querySelector(".filterBottom .menuInhoud");

  var uitklapMenuH3Top = document.querySelector(".filterTop h3.uitklapMenu>i");
  uitklapMenuH3Top.classList.add("navUp");

  var uitklapMenuH3Bottom = document.querySelector(".filterBottom h3.uitklapMenu>i");
  uitklapMenuH3Bottom.classList.add("navUp");

  filterTop.addEventListener("click", function (e) {

    menuInhoudTop.classList.toggle("menuOnZichtbaar");
    uitklapMenuH3Top.classList.toggle('navDown');

  });


  filterBottom.addEventListener("click", function (e) {

    menuInhoudBottom.classList.toggle("menuOnZichtbaar");
    uitklapMenuH3Bottom.classList.toggle('navDown');

  });









}