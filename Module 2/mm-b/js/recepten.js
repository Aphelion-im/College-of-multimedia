'use strict';

window.addEventListener("load", function () {
  createReceptenMain();
  createRecipes();
});

/* HTML template 1

        <a href="../../pages/recepten/bami-soep.html" class="card">
          <h3>Bami soep</h3>
          <ul>
            <li class="icoonPan">Koken</li>
            <li class="icoonVis">Vis</li>
            <li class="icoonTijd">Tijd</li>
          </ul>
          <span>30 min</span>
          <ul>
            <li><span>1 mienestje</span></li>
            <li><span>1 bosje Lente ui</span></li>
            <li><span>1 bosje Koriander</span></li>
            <li><span>1 Chilipeper</span></li>
            <li><span>Miso bouillon</span></li>
          </ul>
          <img src="../../images/recepten/noodle-soup-o.jpg" alt="Noodle soup">
          <div class="knopOranje">Bami soep maken</div>
        </a>
 */

/* HTML temnplate 2: 
<section class="receptenMain">
  <div class="container">
  </div>
</section> */


function createReceptenMain() {

  var main = document.querySelector('.main');
  var receptenMain = document.createElement('section');
  receptenMain.classList.add('receptenMain');
  main.appendChild(receptenMain);

  var container = document.createElement('div');
  container.classList.add('container');
  receptenMain.appendChild(container);
}


function createRecipes() {

  var directoryAfbeeldingen = '../../images/recepten/';

  for (var recept of recepten) {

    // Bepalen waar de recepten aan vast 'geplakt' worden
    var receptenMain = document.querySelector('.receptenMain .container');

    // Card van dit recept linkt naar de receptpagina
    var anchor = document.createElement('a');
    anchor.setAttribute('href', `${recept.receptPagina}`);
    anchor.classList.add('card');
    anchor.setAttribute('data-personen', `${recept.aantalPersonen}`);
    anchor.setAttribute('data-dieet', `${recept.filterKey[0]}`);
    anchor.setAttribute('data-bereiding', `${recept.filterKey[1]}`);
    anchor.setAttribute('data-personen-flag', '0');
    anchor.setAttribute('data-dieet-flag', '0');
    anchor.setAttribute('data-bereiding-flag', '0');


    receptenMain.appendChild(anchor);

    // Voeg de titel toe van het recept
    var header3 = document.createElement('h3');
    var header3Text = document.createTextNode(`${recept.titelCard}`);
    header3.appendChild(header3Text);
    anchor.appendChild(header3);

    // 3 iconen list 
    var listTop = document.createElement('ul');
    anchor.appendChild(listTop);

    // Creeer Icoon 1, en voeg toe aan de 3 iconen list
    var listTopItem1 = document.createElement('li');
    listTopItem1.classList.add(`${recept.icoon1}`);
    var listTopItem1Text = document.createTextNode(`${recept.icoon1Text}`);
    listTopItem1.appendChild(listTopItem1Text);
    listTop.appendChild(listTopItem1);

    // Creeer Icoon 2, en voeg toe aan de 3 iconen list
    var listTopItem2 = document.createElement('li');
    listTopItem2.classList.add(`${recept.icoon2}`);
    var listTopItem2Text = document.createTextNode(`${recept.icoon2Text}`);
    listTopItem2.appendChild(listTopItem2Text);
    listTop.appendChild(listTopItem2);

    // Creeer Icoon 3, en voeg toe aan de 3 iconen list
    var listTopItem3 = document.createElement('li');
    listTopItem3.classList.add(`${recept.icoon3}`);
    var listTopItem3Text = document.createTextNode(`${recept.icoon3Text}`);
    listTopItem3.appendChild(listTopItem3Text);
    listTop.appendChild(listTopItem3);

    // Bereidingstijd toevoegen
    var aantalMinuten = document.createElement('span');
    var aantalMinutenText = document.createTextNode(`${recept.kookTijd}`);
    aantalMinuten.appendChild(aantalMinutenText);
    anchor.appendChild(aantalMinuten);

    // Recepten list toevoegen
    var receptenList = document.createElement('ul');
    anchor.appendChild(receptenList);

    // Recepten list-items toevoegen
    // Ingredient 0, en voeg toe aan de Recepten list
    var listBottomItem1 = document.createElement('li');
    var listBottomItem1Span = document.createElement('span');
    var listBottomItem1SpanText = document.createTextNode(`${recept.ingredienten[0]}`);
    receptenList.appendChild(listBottomItem1);
    listBottomItem1.appendChild(listBottomItem1Span);
    listBottomItem1Span.appendChild(listBottomItem1SpanText);

    // Ingredient 1, en voeg toe aan de Recepten list
    var listBottomItem2 = document.createElement('li');
    var listBottomItem2Span = document.createElement('span');
    var listBottomItem2SpanText = document.createTextNode(`${recept.ingredienten[1]}`);
    receptenList.appendChild(listBottomItem2);
    listBottomItem2.appendChild(listBottomItem2Span);
    listBottomItem2Span.appendChild(listBottomItem2SpanText);

    // Ingredient 2, en voeg toe aan de Recepten list
    var listBottomItem3 = document.createElement('li');
    var listBottomItem3Span = document.createElement('span');
    var listBottomItem3SpanText = document.createTextNode(`${recept.ingredienten[2]}`);
    receptenList.appendChild(listBottomItem3);
    listBottomItem3.appendChild(listBottomItem3Span);
    listBottomItem3Span.appendChild(listBottomItem3SpanText);

    // Ingredient 3, en voeg toe aan de Recepten list
    var listBottomItem4 = document.createElement('li');
    var listBottomItem4Span = document.createElement('span');
    var listBottomItem4SpanText = document.createTextNode(`${recept.ingredienten[3]}`);
    receptenList.appendChild(listBottomItem4);
    listBottomItem4.appendChild(listBottomItem4Span);
    listBottomItem4Span.appendChild(listBottomItem4SpanText);

    // Ingredient 4, en voeg toe aan de Recepten list
    var listBottomItem5 = document.createElement('li');
    var listBottomItem5Span = document.createElement('span');
    var listBottomItem5SpanText = document.createTextNode(`${recept.ingredienten[4]}`);
    receptenList.appendChild(listBottomItem5);
    listBottomItem5.appendChild(listBottomItem5Span);
    listBottomItem5Span.appendChild(listBottomItem5SpanText);

    // Voeg productafbeelding toe
    var productAfbeelding = document.createElement('img');
    productAfbeelding.setAttribute('src', `${directoryAfbeeldingen + recept.afbeelding}`);
    productAfbeelding.setAttribute('alt', `${recept.altDescription}`);
    anchor.appendChild(productAfbeelding);

    // Voeg de knop toe
    var knop = document.createElement('div');
    knop.setAttribute('class', 'knopOranje');
    var knopText = document.createTextNode(`${recept.buttonText}`);
    knop.appendChild(knopText);
    anchor.appendChild(knop);




  }
}

