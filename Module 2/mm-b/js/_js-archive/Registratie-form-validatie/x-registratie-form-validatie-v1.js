/* Registratie form validatie v1 */
'use strict';

window.addEventListener('load', function () {


  // Variabelen
  var naamVeld = document.querySelector('#naam');
  var emailVeld = document.querySelector('#email');
  var submitKnop = document.querySelector('#submit');
  var welkFormulier = document.querySelector('#registratieFormulier');
  // var leeftijdVeld = document.querySelector('#leeftijd');
  // Datum en aantal personen velden
  var eersteFout;

  function validateVeld(welkVeld) {
    var valid = false;
    if (welkVeld.type == 'text') {
      var pattern = /^[a-z0-9\s]{4,100}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.type == 'email') {
      var pattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,99}$/i;
      valid = pattern.test(welkVeld.value);
    }

    console.log(welkVeld.name, welkVeld.value, valid);

    createFeedback(welkVeld, valid);

    return valid;
  }

  function createFeedback(welkVeld, valid, melding = 'Controleer dit veld!') {
    var iconList = welkVeld.parentNode.getElementsByTagName('span');
    for (var icon of iconList) {
      welkVeld.parentNode.removeChild(icon);
    }

    var iconContainer = document.createElement('span');
    var iconFa = document.createElement('span');
    iconFa.setAttribute('aria-hidden', 'true');
    var iconText;

    if (valid) {
      welkVeld.style.backgroundColor = 'rgba(0,255,0,0.2)';
      welkVeld.style.borderColor = 'rgb(0,255,0)';
      iconFa.setAttribute('class', 'fa fa-check-circle');
      iconText = document.createTextNode('');
    } else {
      welkVeld.style.backgroundColor = 'rgba(255,0,0,0.2)';
      welkVeld.style.borderColor = 'rgb(255,0,0)';
      iconFa.setAttribute('class', 'fa fa-exclamation-circle');
      iconText = document.createTextNode(melding);
      if (!eersteFout) eersteFout = welkVeld;
    }
    iconContainer.appendChild(iconFa);
    iconContainer.appendChild(iconText);
    welkVeld.parentNode.appendChild(iconContainer);

  }

  submitKnop.addEventListener('click', function (e) {
    eersteFout = false;
    var naamCorrect = validateVeld(naamVeld);
    var emailCorrect = validateVeld(emailVeld);

    var allesCorrect = naamCorrect && emailCorrect;

    if (!allesCorrect) {
      eersteFout.focus();
      e.preventDefault();
    }
    e.preventDefault();
  });

  var eventList = ['blur', 'keyup', 'click', 'change'];

  var formObjecten = [naamVeld, emailVeld];


  for (var hetEvent of eventList) {
    for (var formObject of formObjecten) {
      formObject.addEventListener(hetEvent, function (e) {
        validateVeld(this);
      });
    }

  } // einde event loop


});