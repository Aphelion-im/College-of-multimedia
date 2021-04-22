/* Registratie form validatie v3 */
'use strict';

window.addEventListener('load', function () {


  // Variabelen
  var naamVeld = document.querySelector('#naam');
  var emailVeld = document.querySelector('#email');
  var datumVeld = document.querySelector('#datum');
  var submitKnop = document.querySelector('#submit');
  var personenVeld = document.querySelector('#personen');
  var eersteFout;

  // Dit is voor het Aantal personen veld. Je kunt alleen een datum vanaf vandaag boeken.
  var datumObj = new Date();
  var maand = datumObj.getUTCMonth() + 1;
  var maand2 = ((maand < 10) ? "0" : "") + maand; // Zet er een 0 voor als maand onder de 10
  var dag = datumObj.getUTCDate();
  var dag2 = ((dag < 10) ? "0" : "") + dag; // Zet er een 0 voor als dag, onder de 10
  var jaar = datumObj.getUTCFullYear();
  var datum = jaar + "-" + maand2 + "-" + dag2;
  datumVeld.setAttribute('min', `${datum}`);

  // Deze validatiefunctie werkt met type="". Dit is helaas wat beperkt en kan maar 1x gebruikt worden.
  // En zal ik proberen te herchrijven op het Contactformulier.
  // Deze code nog refactoren/herschrijven. Eerst minimaal werkend krijgen.
  function validateVeld(welkVeld) {
    var valid = false;
    if (welkVeld.type == 'text') {
      var pattern = /^[a-z0-9\s]{4,100}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.type == 'email') {
      var pattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,99}$/i;
      valid = pattern.test(welkVeld.value);
    } else if (welkVeld.type == 'date') {
      // Vergelijk de datum met de ingestelde min/max attribuut waarde in de HTML
      var minVal = welkVeld.getAttribute('min');
      var maxVal = welkVeld.getAttribute('max');
      var userVal = welkVeld.value;
      valid = (userVal >= minVal) && (userVal <= maxVal);
    } else if (welkVeld.type == 'number') {
      // Vergelijk aantal personen met de ingestelde min/max attribuut waarde in de HTML
      var minVal = welkVeld.getAttribute('min');
      var maxVal = welkVeld.getAttribute('max');
      var userVal = welkVeld.value;
      valid = (userVal >= minVal) && (userVal <= maxVal);
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
    var naamCorrect = validateVeld(naamVeld);
    var emailCorrect = validateVeld(emailVeld);
    var datumCorrect = validateVeld(datumVeld);
    var personenCorrect = validateVeld(personenVeld);

    var allesCorrect = naamCorrect && emailCorrect && datumCorrect && personenCorrect;

    if (!allesCorrect) {
      eersteFout.focus();
      e.preventDefault();
    }
    // e.preventDefault(); // Deze weer inschakelen als je gaat testen.
  });


  // Zet op alle velden meerdere soorten event listeners, zodat je bij alle acties direkt
  // de feedback ziet (Instant feedback)
  var eventList = ['blur', 'keyup', 'click', 'change'];

  var formObjecten = [naamVeld, emailVeld, datumVeld, personenVeld];

  for (var hetEvent of eventList) {
    for (var formObject of formObjecten) {
      formObject.addEventListener(hetEvent, function (e) {
        validateVeld(this);
      });
    }

  }


});