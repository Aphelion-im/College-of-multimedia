'use strict';

window.addEventListener('load', function () {

  /* HTML template 
        <a href="#" class="card">
          <h3>Simply nigella</h3>
          <p>Relaxt, inspirerend en om te watertanden.</p>
          <img src="../../images/boeken/simply-nigella/simply-nigella-boek-o.jpg" alt="Boek Simply Nigella">
          <div class="knopOranje">Simply nigella</div>
          <p>Simply Nigella bevat 125 inspirerende en toegankelijke recepten die moeiteloos in ons ...</p>
          <div class="prijsBoek">&euro; 20,00</div>
        </a>
  */

  createBoeken();

  function createBoeken() {

    // Definieer de directory waar de boekkaten vandaan komen voor in de card.
    var directoryAfbeeldingen = '../../images/boeken/';

    for (var boek of boeken) {

      var boekenMain = document.querySelector('.boekenMain');

      // Creeer de card en plak deze vast aan Section: boekenMain
      var anchor = document.createElement('a');
      anchor.setAttribute('href', `${boek.boekUrl}`);
      anchor.setAttribute('class', 'card')
      anchor.setAttribute('data-bedrag', `${boek.prijsBoek}`);
      anchor.setAttribute('data-taal', `${boek.filterKey[0]}`);
      anchor.setAttribute('data-keuken', `${boek.filterKey[1]}`);
      anchor.setAttribute('data-bedrag-flag', '0');
      anchor.setAttribute('data-taal-flag', '0');
      anchor.setAttribute('data-keuken-flag', '0');

      boekenMain.appendChild(anchor);

      // Creeer de header h3
      var headerH3 = document.createElement('h3');
      var headerH3Text = document.createTextNode(`${boek.boekTitel}`);
      headerH3.appendChild(headerH3Text);
      anchor.appendChild(headerH3);

      var quote = document.createElement('p');
      var quoteText = document.createTextNode(`${boek.boekQuote.substr(0, 50)}`);
      quote.appendChild(quoteText);
      anchor.appendChild(quote);

      var imageCard = document.createElement('img');
      imageCard.setAttribute('src', `${directoryAfbeeldingen + boek.afbeelding}`);
      imageCard.setAttribute('alt', `${boek.altDescription}`);
      anchor.appendChild(imageCard);

      var buttonOranje = document.createElement('div');
      buttonOranje.setAttribute('class', 'knopOranje');
      var buttonOranjeText = document.createTextNode(`${boek.buttonText}`);
      buttonOranje.appendChild(buttonOranjeText);
      anchor.appendChild(buttonOranje);

      var paragraph = document.createElement('p');
      var paragraphText = document.createTextNode(`${boek.cardParagraph.substr(0, 75) + '...'}`);
      paragraph.appendChild(paragraphText);
      anchor.appendChild(paragraph);

      var prijsBoek = document.createElement('div');
      prijsBoek.setAttribute('class', 'prijsBoek');
      var prijsBoekText = document.createTextNode(`${'€' + boek.prijsBoek.toFixed(2)}`);
      prijsBoek.appendChild(prijsBoekText);
      anchor.appendChild(prijsBoek);
    }
  }
}); // Einde window addEventListener