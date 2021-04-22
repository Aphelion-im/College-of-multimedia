"use strict";

window.addEventListener("load", function () {
  uitklapMenu();
});

function uitklapMenu() {
  var uitklapMenu = document.querySelectorAll(".uitklapMenu");
  var menuInhoud = document.querySelector("#menuInhoud");
  var menuInhoud2 = document.querySelector("#menuInhoud2");
  var uitklapMenuH3 = document.querySelector("h3#uitklapMenu>i");
  var uitklapMenuH32 = document.querySelector("h3#uitklapMenu2>i");

  uitklapMenuH3.classList.add("navUp");
  uitklapMenuH32.classList.add("navUp");

  uitklapMenu.addEventListener("click", function () {
    menuInhoud.classList.toggle("menuOnZichtbaar");

    if (uitklapMenu.className == "navDown") {
      uitklapMenuH3.classList.toggle("navUp");
    } else {
      uitklapMenuH3.classList.toggle("navDown");
    }
  });

  uitklapMenu2.addEventListener("click", function () {
    menuInhoud2.classList.toggle("menuOnZichtbaar");

    if (uitklapMenu2.className == "navDown") {
      uitklapMenuH32.classList.toggle("navUp");
    } else {
      uitklapMenuH32.classList.toggle("navDown");
    }
  });



}