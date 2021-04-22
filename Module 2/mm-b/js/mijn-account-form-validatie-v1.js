/* Based on Registratie form validatie v1 */
/* Mijn account form validatie v1  */
'use strict';

window.addEventListener('load', function () {


  // Variabelen
  var voornaamVeld = document.querySelector('#voornaam');
  var achternaamVeld = document.querySelector('#achternaam');
  var straatnaamVeld = document.querySelector('#straatnaam');
  var huisnummerVeld = document.querySelector('#huisnummer');
  var postcodeVeld = document.querySelector('#postcode');
  var telefoonVeld = document.querySelector('#telefoon');
  var emailVeld = document.querySelector('#email');
  var submitKnop = document.querySelector('#submit');
  var eersteFout;

  // V1 van contact form de welkVeld.name gebruikt ipv werkVeld.type
  // !!! Deze code nog refactoren/herschrijven in een Switch/case:
  function validateVeld(welkVeld) {
    var valid = false;
    if (welkVeld.name == 'voornaam') {
      var pattern = /^[a-z0-9\s]{4,100}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'achternaam') {
      var pattern = /^[a-z0-9\s]{4,100}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'straatnaam') {
      var pattern = /^[a-z0-9\s]{4,100}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'huisnummer') {
      var pattern = /^[0-9]{1,10}[a-zA-Z]?$/;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'postcode') {
      var pattern = /^[1-9][0-9]{3}[\s]?[a-zA-Z]{2}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'telefoon') {
      var pattern = /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.name == 'email') {
      var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      valid = pattern.test(welkVeld.value);
    }

    createFeedback(welkVeld, valid);

    return valid;
  }
  // Melding uitgeschakld ivm het design. Nu alleen een icoon te zien.
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

  submitKnop.addEventListener('click', function (e) {
    eersteFout = false;
    var voornaamCorrect = validateVeld(voornaamVeld);
    var achternaamCorrect = validateVeld(achternaamVeld);
    var straatnaamCorrect = validateVeld(straatnaamVeld);
    var huisnummerCorrect = validateVeld(huisnummerVeld);
    var postcodeCorrect = validateVeld(postcodeVeld);
    var telefoonCorrect = validateVeld(telefoonVeld);
    var emailCorrect = validateVeld(emailVeld);


    var allesCorrect = voornaamCorrect &&
      achternaamCorrect &&
      straatnaamCorrect &&
      huisnummerCorrect &&
      postcodeCorrect &&
      telefoonCorrect &&
      emailCorrect;


    if (!allesCorrect) {
      eersteFout.focus();
      e.preventDefault();
    }
    // e.preventDefault(); // Deze weer inschakelen als je gaat testen. 
  });


  // Zet op alle velden meerdere soorten event listeners, zodat je bij alle acties direkt
  // de feedback ziet (Instant feedback)
  var eventList = ['blur', 'keyup', 'click', 'change'];

  var formObjecten = [voornaamVeld, achternaamVeld, straatnaamVeld, huisnummerVeld, postcodeVeld, telefoonVeld, emailVeld];

  for (var hetEvent of eventList) {
    for (var formObject of formObjecten) {
      formObject.addEventListener(hetEvent, function (e) {
        validateVeld(this);
      });
    }

  }


});