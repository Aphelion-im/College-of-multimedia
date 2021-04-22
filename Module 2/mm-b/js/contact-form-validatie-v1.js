/* Based on Registratie form validatie v3 */
/* Contact form validatie v1 */
'use strict';

window.addEventListener('load', function () {


  // Variabelen
  var naamVeld = document.querySelector('#naam');
  var emailVeld = document.querySelector('#email');
  var tekstVeld = document.querySelector('#bericht');
  var submitKnop = document.querySelector('#submit');
  var eersteFout;

  // V1 van contact form de welkVeld.name gebruikt ipv werkVeld.type
  // En zal ik proberen te herchrijven op het Contactformulier.
  // Deze code nog refactoren/herschrijven. Eerst minimaal werkend krijgen.
  function validateVeld(welkVeld) {
    var valid = false;
    if (welkVeld.name == 'naam') {
      var pattern = /^[a-z0-9\s]{4,100}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'email') {
      var pattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,99}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'bericht') {
      var tekstLengte = welkVeld.value.length;
      valid = tekstLengte > 1;
    }

    createFeedback(welkVeld, valid);

    return valid;
  }

  // Melding uitgeschakld ivm het design. Nu alleen een icoon te zien.
  // Creeer het feedback veld
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
      iconText = document.createTextNode('');
      if (!eersteFout) eersteFout = welkVeld;
    }
    iconContainer.appendChild(iconFa);
    iconContainer.appendChild(iconText);
    welkVeld.parentNode.appendChild(iconContainer);

  }

  // Als je op de submit knop klikt, controleer dan of alles correct is
  submitKnop.addEventListener('click', function (e) {
    eersteFout = false;
    var naamCorrect = validateVeld(naamVeld);
    var emailCorrect = validateVeld(emailVeld);
    var tekstCorrect = validateVeld(tekstVeld);

    var allesCorrect = naamCorrect && emailCorrect && tekstCorrect;

    if (!allesCorrect) {
      eersteFout.focus();
      e.preventDefault();
    }
    // e.preventDefault(); // Deze weer inschakelen als je gaat testen. 
  });


  // Zet op alle velden meerdere soorten event listeners, zodat je bij alle acties direkt
  // de feedback ziet (Instant feedback)
  var eventList = ['blur', 'keyup', 'click', 'change'];

  var formObjecten = [naamVeld, emailVeld, tekstVeld];

  for (var hetEvent of eventList) {
    for (var formObject of formObjecten) {
      formObject.addEventListener(hetEvent, function (e) {
        validateVeld(this);
      });
    }

  }


});