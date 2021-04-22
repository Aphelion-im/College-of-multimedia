window.addEventListener('load', function () {
    koeDelen();
});

// Source: https://www.meerdanvlees.nl/page/67/welk-deel-van-de-koe

function koeDelen() {

    var standaard = {
        titel: 'De Koe',
        thumb: 'koe',
        intro: 'Welk deel van de koe?',
        tekst: 'Klik op de gekleurde delen van de koe om meer informatie te verkrijgen over het stuk vlees.'
    };

    var koeDelen = [];

    var biefstuk = {
        titel: 'Biefstuk',
        thumb: 'biefstuk',
        intro: 'Biefstuk wordt gesneden uit de bovenbil van het rund',
        tekst: 'Sommige slagers gebruiken ook wel eens het spierstuk. In die bovenbil zitten een grote spier en een iets kleinere, de kogel. U raadt het al: uit die kogel komt de kogelbiefstuk. Een bijzondere cut van de biefstuk is de corazon de cuadril, erg populair in Zuid-Amerika. Deze wordt gesneden van de dikke lende. Men noemt de tournedos (ossenhaas) ook wel biefstuk: biefstuk van de haas. Die zit in de rug van het rund. Ook hoor je vlees van de dikke lende, wij hebben het hier over \"gewone\" biefstuk.'
    };
    koeDelen.push(biefstuk);

    var ossenhaas = {
        titel: 'Ossenhaas',
        thumb: 'ossenhaas',
        intro: 'Ossenhaas wordt gesneden uit de lende van het rund',
        tekst: 'Ossenhaas, ook wel tournedos, biefstuk van de haas, filet, tenderloin. Wordt gesneden uit de lende van het volwassen rund. Het heeft geen bot. Er is nogal wat verwarring over “gewone” biefstuk en ossenhaas. Toch is het simpel: een koe is een dier, niet elk dier een koe. Zo ook de ossenhaas: elke ossenhaas is biefstuk, lang niet elke biefstuk is ossenhaas. De ossenhaas is een vrij klein stuk in de koe, en in elk beestje zitten er maar 2 (links en rechts van de wervelkolom). Het is uitermate zacht vlees en daarom erg geliefd.'
    };
    koeDelen.push(ossenhaas);

    var sukade = {
        titel: 'Sukade',
        thumb: 'sukade',
        intro: 'Sukade wordt gesneden uit de schouder van het rund',
        tekst: 'Sukade. Sommigen schrijven nog wel eens sucade. Heerlijk suddervlees. Of toch niet…? Sukade is een vrij stevig stuk vlees met de typerende zeen die er dwars doorheen loopt. Sukade wordt gesneden uit de schouder van het rund.'
    };
    koeDelen.push(sukade);

    var tbone = {
        titel: 'T-bone',
        thumb: 'tbone',
        intro: 'T-bone wordt gesneden uit de lende van het rund',
        tekst: 'T-bone, ook wel Porterhouse steak (in sommige staten van Amerika) en bistecca Fiorentina, wordt gesneden, eigenlijk gezaagd, uit de lende van het rund (zie afbeelding). Het is een grote portie heerlijk vlees voor grote vleesliefhebbers. Een beetje grillrestaurant heeft hem op de kaart staan. T-bone is niet goedkoop: het bevat dan ook de twee meest kostbare stukken vlees die in een koe te vinden zijn: de tournedos en de entrecote.'
    };
    koeDelen.push(tbone);

    /* Object Sniffing */

    if (!document.getElementById('koeDelen')) {
        return false;
    }

    /* Globale variabelen */

    /* Kleuren huisstijl */
    var cuisineBlauw = '#418C9F';
    var cuisineOranje = '#D98A3F';

    var omtrek = document.getElementById('omtrek');

    // Array met buttons
    var koeDelen_buttons = [];

    // Koppel de juiste ID's aan een button
    var biefstuk_button = document.getElementById('biefstuk');
    var ossenhaas_button = document.getElementById('ossenhaas');
    var tbone_button = document.getElementById('tbone');
    var sukade_button = document.getElementById('sukade');

    // Voeg buttons toe aan het einde van de buttons array
    koeDelen_buttons.push(biefstuk_button);
    koeDelen_buttons.push(ossenhaas_button);
    koeDelen_buttons.push(tbone_button);
    koeDelen_buttons.push(sukade_button);

    // Artikel onderdelen
    var koeKopTekst = document.getElementById('koeKopTekst');
    var koeThumbnail = document.getElementById('koeThumbnail');
    var koeIntro = document.getElementById('koeIntro');
    var koeParagraaf = document.getElementById('koeParagraaf');

    /* Vul met standaard tekst als Javascript actief is. 
    Als JS niet actief is, laat HTML tekst zien. */
    koeParagraaf.textContent = standaard.tekst;


    /* Functies */
    // Als op de omtrek van de koe wordt geklikt, dan:
    omtrek.addEventListener('click', function () {

        // Plaats de standaard koptekst
        koeKopTekst.textContent = standaard.titel;

        // Plaats de standaard koe avatar/thumbnail
        koeThumbnail.setAttribute('src', '../../images/nieuws/' + standaard.thumb + '-thumb-o.jpg');

        // Zet de intro op de standaard tekst
        koeIntro.textContent = standaard.intro;

        // Paragraaf wordt standaard tekst
        koeParagraaf.textContent = standaard.tekst;

        for (button of koeDelen_buttons) {
            button.style.fill = cuisineBlauw;
        }
    });


    // Loop door de buttons array
    for (button of koeDelen_buttons) {

        // zet op elke button een event listener
        button.addEventListener('click', function (e) {

            // Verkrijg de ID van de geklikte buttons, en gebruik deze om de bijhorende plaatjes en tekst te tonen
            var koedeel_button = this.getAttribute('id');

            //de rest van de  items worden blauw
            for (button of koeDelen_buttons) {
                button.style.fill = cuisineBlauw;
            }

            // Maak de specifieke button waarop geklikt is oranje
            this.style.fill = cuisineOranje;

            // Bekijk of de aangeklikte button overeenkomt met de thumbnail en return dit deel van de koe
            function zoekKoeDeel() {
                for (koedeel of koeDelen) {
                    if (koedeel.thumb == koedeel_button) {
                        return koedeel;

                    }
                }
                return false;
            }

            //Toon de bijhorende kop, thumb, intro en paragraaf die horen bij de geklikte button/deel van de koe
            zoekKoeDeel();
            // Plaats koptekst van het specifieke deel van de koe
            koeKopTekst.textContent = koedeel.titel;
            // Plaats thumbnail van het specifieke deel van de koe
            koeThumbnail.setAttribute('src', '../../images/nieuws/' + koedeel.thumb + '-thumb-o.jpg');
            // Plaats introtekst van het specifieke deel van de koe
            koeIntro.textContent = koedeel.intro;
            // Plaats paragraaf van het specifieke deel van de koe
            koeParagraaf.textContent = koedeel.tekst;
        });
    }
}