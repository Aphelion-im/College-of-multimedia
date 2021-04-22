/* Uitklapmenu v2.0 */

"use strict";

window.addEventListener("load", function () {
  uitklapMenu();
});

function uitklapMenu() {
  var uitklapMenus = document.querySelectorAll(".uitklapMenu");


  var menuInhoud = document.querySelectorAll(".menuInhoud");


  var uitklapMenuH3 = document.querySelector("h3.uitklapMenu>i");


  uitklapMenuH3.classList.add("navUp");


for (var uitklapMenu of uitklapMenus) {

  uitklapMenu.addEventListener("click", function (e) {



    menuInhoud[0].classList.toggle("menuOnZichtbaar");


    if (e.target.className == "navDown") {
      e.target.classList.toggle("navUp");
    } else {
      e.target.classList.toggle("navDown");
    }
  });


}







}