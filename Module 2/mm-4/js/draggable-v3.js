'use strict';

/* Move the menu's to another location if desired - version 3.0 - André de Groot */

window.addEventListener('load', function () {
  moveWindow();
});

function moveWindow() {
  var elements = document.querySelectorAll('.movableWindow');

  for (var elmnt of elements) {
    dragElement(elmnt);
  }

  function dragElement(elmnt) {
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;

    elmnt.addEventListener('mousedown', dragMouseDown);

    function dragMouseDown(e) {
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      //When releasing the mousebutton, drop the menu
      document.addEventListener('mouseup', closeDragElement);

      // call a function whenever the cursor moves:
      document.addEventListener('mousemove', elementDrag);
    }

    function elementDrag(e) {
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
      elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.removeEventListener('mouseup', closeDragElement);
      document.removeEventListener('mousemove', elementDrag);
    }
  }
}