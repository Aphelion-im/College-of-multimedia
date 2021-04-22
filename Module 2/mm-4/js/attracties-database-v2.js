window.addEventListener('load', function () {
    jurassicPark();
});

function jurassicPark() {

    var standard = {
        title: 'Jurassic Park&trade; Wiki',
        thumb: 'standard',
        intro: 'Welcome to Jurassic Park',
        article: '<p>The map on the left hand side is a map of the <strong>Jurassic Park</strong>.</p> <p>The map includes the <strong>Visitor Center</strong>, the main gate, helicopter pads, the harbour and most of the main dinosaurs.</p><strong>Manual</strong><p>Use (numeric) keyboard cursor keys to move the map.</p><p>+/-/mouse-wheel to zoom in/out.</p><p>Enlarge the legends by clicking on them when seeing the + symbol.</p><p>Reset the view by clicking the Jurassic Park logo, <i class="fas fa-ban"></i> icon or pressing <strong>Spacebar</strong>.</p>',
        tooltip: ''
    };

    var attracties = [

        visitorcenter = {
            title: 'Visitor Center',
            thumb: 'visitorcenter',
            intro: 'Main Hub of Jurassic Park',
            article: '<p>The Jurassic Park Visitor Center was a visitor center at the hub of Jurassic Park, featured in the 1990 novel and 1993 movie of the same name as well as its game adaptations.</p><p>The center was located at the zoo-like amusement park set up by millionaire <strong>John Hammond</strong> founder of InGen, on the island of Isla Nublar near Costa Rica.</p> <p>It was themed around dinosaurs and it was intended to be the main hive of activity for guests visiting the theme park.</p>',
            tooltip: 'Visitors\' Center',
            diet: ''
        },

        brachiosaurus = {
            title: 'Brachiosaurus',
            thumb: 'brachiosaurus',
            intro: 'Arm lizard',
            article: '<p>Brachiosaurus is a member of the sauropod family and one of the most well known of all dinosaurs. It gets its name from the great height of its humerus, or upper arm bone - which is longer than most humans are tall.</p><p>For almost a century, Brachiosaurus was considered the tallest of all dinosaurs, being over <strong>nine metres tall</strong>. Since then, other dinosaurs have been discovered to have been taller.</p>',
            tooltip: 'Brachiosaurus',
            diet: 'Diet: Herbivore'
        },

        gallimimus = {
            title: 'Gallimimus',
            thumb: 'gallimimus',
            intro: 'Fowl or Chicken Mimic',
            article: '<p>Gallimimus was a speedy theropod, the largest of its type. They were called chicken mimics because they probably moved like modern flightless birds.</p><p> Unlike other theropods, Gallimimus had no teeth. In fact, it had a very small head. This was probably one of the fastest dinosaurs, with speed like an ostrich, it could probably run up to <strong>30 miles per hour</strong>.</p><p>With its small, toothless head, it is believed that Gallimimus probably had a diet of insects, small animals, eggs, and maybe even some plants.</p>',
            tooltip: 'Gallimimus Valley',
            diet: 'Diet: Omnivore'
        },

        triceratops = {
            title: 'Triceratops',
            thumb: 'triceratops',
            intro: 'Three Horned Face',
            article: '<p>Triceratops was a very common dinosaur which lived at the very end of the Cretaceous period. It had a huge frilled head with horns over each eye that could reach over 4 feet long.</p><p>Triceratops had a third, smaller horn on its nose. These would be fearsome weapons against a predator.</p><p>Triceratops is one of the most common dinosaur fossils found. More than 50 skulls have been found. Within the genus, at least 7 species have been identified. Triceratops is the largest member of this family, reaching the size of a school bus.</p>',
            tooltip: 'Triceratops territory',
            diet: 'Diet: Herbivore'
        },

        parasaurolophus = {
            title: 'Parasaurolophus',
            thumb: 'parasaurolophus',
            intro: 'Near Crested Lizard',
            article: '<p>Parasaurolophus is a hadrosaurid (sometimes called a duck-billed dinosaur) from approximately 76.5–73 million years ago (late Cretaceous). It is a herd animal feeding on the park\’s rich vegetation. The most stunning feature of the Parasaurolophus is the crest on its head.<p></p>Scientists were unsure of its function until today. Some believed it was a snorkel for when the animal was in the water, others felt that it was used in combat. We now know that it serves for display and for communication, allowing the animals to remain in contact over distance by amplifying their haunting, beautiful cries.</p>',
            tooltip: 'Parasaurolophus field',
            diet: 'Diet: Herbivore'
        },

        proceratosaurus = {
            title: 'Proceratosaurus',
            thumb: 'proceratosaurus',
            intro: 'Before Horned Lizard',
            article: '<p>Proceratosaurus was a primitive coelurosaurian theropod that lived in England, Europe in the Middle Jurassic Period. It looked somewhat similar to the later Ceratosaurus, for which it is named after, but only due to it also having a horn-like crest.</p><p>Despite its name, it is not related to Ceratosaurus, but to the later Tyrannosaurus. Overall, Proceratosaurus was a much more gracile and delicate animal. Recent research has speculated with good supporting evidence that Proceratosaurus is the earliest tyrannosauroid.</p>',
            tooltip: 'Proceratosaurus',
            diet: 'Diet: Carnivore'
        },

        metriacanthosaurus = {
            title: 'Metriacanthosaurus',
            thumb: 'metriacanthosaurus',
            intro: 'Moderately-Spined Lizard',
            article: '<p>Metriacanthosaurus was a fairly large meat-eater that lived in Northern Europe near the end of the Jurassic Period. This carnivore was fairly typical of Jurassic theropods.</p><p>Metriacanthosaurus gets its name for its backbones, which have spines on top that are taller than in many meat-eaters (such as Allosaurus or Tyrannosaurus) but much smaller than those of Spinosaurus.</p>',
            tooltip: 'Metriacanthosaurus',
            diet: 'Diet: Carnivore'
        },

        segisaurus = {
            title: 'Segisaurus',
            thumb: 'segisaurus',
            intro: 'Segi (canyon) Lizard',
            article: '<p>Segisaurus is an Early Jurassic meat-eater that seemed adapted for life in a dry, sandy environment. Though all early dinosaur predators had evolved to be quicker than the animals they replaced, scientists believe Segisaurus has features that made it extra fast.</p><p>The North American landscape where Segisaurus lived was very arid and sandy. This little dinosaur seemed to have features that would have made it well adapted to squatting down and sitting out a sandstorm. With only post-cranial remains, the exact look of this dinosaur is unknown.</p>',
            tooltip: 'Segisaurus',
            diet: 'Diet: Carnivore'
        },

        trex = {
            title: 'Tyrannosaurus Rex',
            thumb: 'trex',
            intro: 'Tyrant Lizard King',
            article: '<p>Tyrannosaurus rex, commonly known as T. rex, is a species of theropod dinosaur that lived during the Late Cretaceous Period, 68 to 66 million years ago. Arguably the most famous species of dinosaur, T. rex lived in what is now North America.</p><p>An apex predator capable of reaching thirteen meters in length, Tyrannosaurus was the largest species of Tyrannosaurid, and was intended to be the star attraction of John Hammond\'s vision for the original Jurassic Park.</p>',
            tooltip: 'Tyrannosaurus Rex enclosure',
            diet: 'Diet: Carnivore'
        },

        velociraptor = {
            title: 'Velociraptor',
            thumb: 'velociraptor',
            intro: 'Swift Thief',
            article: '<p>Velociraptor, in real life, was a genus of dromaeosaurid theropod dinosaur from the Late Cretaceous period which inhabited what is now the Mongolia-China border with other unique dinosaurs.</p><p>Velociraptor was no bigger than a wolf and with its feathers it bore a very bird-like appearance that would make it all the more different from the films, being more akin to a flightless hawk.</p><p>It had a long claw ("terrible claw") on the second toe of both feet, 8 cm (3 in) long, which was probably used as a weapon, plunging into the flesh of victims and causing deep wounds.</p>',
            tooltip: 'Velociraptor enclosure',
            diet: 'Diet: Carnivore'
        },

        dilophosaurus = {
            title: 'Dilophosaurus',
            thumb: 'dilophosaurus',
            intro: 'Double-crested Lizard',
            article: '<p>Dilophosaurus was one of the largest carnivorous dinosaurs of the Early Jurassic Period. Dilophosaurus gets its name from the two thin crests of bone on the top of its head.</p><p>These were probably used as a display for courtship purposes. Dilophosaurus has been found in the United States.</p><p>Dilophosaurus didn\'t have forward facing eyes to give it stereo vision. It may have used scent as an integral part of its hunting technique.</p>',
            tooltip: 'Dilophosaurus',
            diet: 'Diet: Carnivore'
        },

        herrerasaurus = {
            title: 'Herrerasaurus',
            thumb: 'herrerasaurus',
            intro: 'Herrera\'s Lizard',
            article: '<p>Herrerasaurus was one of the oldest and most primitive Theropods, or meat-eating dinosaurs, though in its day it was relatively hyper-advanced.</p><p>Its body displayed many of the same features of the later theropods. It walked on its hind legs, which sported feet with five digits each with the middle three being able to bear weight</p><p>Its arms ended in a long five-digit hand with the first three ending in powerful claws used for grasping prey.</p>',
            tooltip: 'Herrerasaurus enclosure',
            diet: 'Diet: Carnivore'
        },

        baryonyx = {
            title: 'Baryonyx',
            thumb: 'baryonyx',
            intro: 'Heavy Claw',
            article: '<p>Baryonyx is a Spinosaur, a member of the same group as the northern African dinosaurs Spinosaurus and Suchomimus. Baryonyx was smaller than these relatives but was still a big predator.</p><p>It was 9.5 meters (31.2 feet) long and 2.5 meters (8.25 feet) high at the hips. Although studies in the fossils of Baryonyx, indicate that it had not yet reached its adult stage, so it could be larger.</p><p>Also another study found that there were vertebrae a little larger than others, which would indicate a possible candle or hump in the adult specimen.</p>',
            tooltip: 'Baryonyx',
            diet: 'Diet: Carnivore; Piscivore(partially)'
        },

        port = {
            title: 'Port',
            thumb: 'port',
            intro: 'East dock',
            article: '<p>The East Dock was the shipping port for Jurassic Park on Isla Nublar.</p><p>InGen built the East Dock between 1989 and 1993 during the construction of Jurassic Park as a shipping port for Isla Nublar.</p>',
            tooltip: 'Port - East Dock',
            diet: ''
        },

        heliport = {
            title: 'Heliport',
            thumb: 'heliport',
            intro: 'Isla Nublar Heliport',
            article: '<p>The Isla Nublar Heliport is an iconic location within the Jurassic Park series. It is where the visitors of Isla Nublar land and start their adventure.</p> <p>The heliport is located just outside the perimeter fence and it is most likely that the heilport is used for VIP guests, Hammond and emergencies.</p>',
            tooltip: 'Heliport',
            diet: ''
        },

        electricfence = {
            title: 'Electric fence',
            thumb: 'electricfence',
            intro: 'To contain the cloned dinosaurs',
            article: '<p>The fences were first seen in service on Isla Nublar. They were 24 feet tall and 30 feet long between posts, and 50-80 miles long total.</p><p>They had a minimum of <strong>10,000 volts</strong> to stop the dinosaurs from attempting escape, however, this was a severe problem as well, because it could fry a dinosaur, killing it and making it no use to the public eye.</p><p>It was also their fatal flaw, when Nedry turned off the electric power he rendered the 10,000 volt fence a bunch of useless wires.</p>',
            tooltip: 'Electric fence',
            diet: ''
        },

        tourroad = {
            title: 'Tour road',
            thumb: 'tourroad',
            intro: 'The park drive',
            article: '<p>The Park Drive (also called Safari Tour) was the main attraction for Jurassic Park. It exists in both the novel and movie canons, but has different dinosaurs for both.<p> <p>In both canons, the point of the attraction is to safely transport visitors through enclosures while educating them about the dinosaurs in the park. In the film, a rail ran through the center of a road to guide the Ford Explorer Tour Vehicles on their journey through the Park.</p><p>The tour traveled counter clockwise along the road, the tour vehicles making a right turn once the vehicles went through the main gate and into the Park itself.</p>',
            tooltip: 'Tour road',
            diet: ''
        },

        accessroad = {
            title: 'Access road',
            thumb: 'accessroad',
            intro: 'Access road',
            article: '<p>The access road serves to bring visitors to the park, to and from the ports, to the Visitors\' center.</p>',
            tooltip: 'Access road',
            diet: ''
        }
    ];

    /* Object Sniffing */

    if (!d.getElementById('attracties')) {
        return false;
    }

    var logo = d.querySelector('.jurassicParkLogo');

    // Information window event listener
    information.addEventListener('click', activateInformationWindowCounter);

    // 1 click: open information window. 2 clicks: close information window
    function activateInformationWindowCounter() {
        var informationWindow = d.querySelector('.informationWindow');
        counter++;
        console.log('Counter: ' + counter);
        if (counter % 2) {
            informationWindow.style.display = 'none';
            hideSliderButtons();
        } else {
            activateInformationWindow();
            showSliderButtons();
        }
    }

    function activateInformationWindow() {
        var informationWindow = d.querySelector('.informationWindow');
        checkExistenceInfoWindow();
        informationWindow.style.display = 'block';
        showSliderButtons();
        slideCounter = -1;
        showStandardText();
    }

    // Logo event listener. Reset standard text.
    logo.addEventListener('click', function () {
        slideCounter = -1;
        checkIfEmpty();
        showStandardText();
        resetView();
    });

    // Array met buttons
    var attracties_buttons = [];
    var tooltip = d.querySelector('.tooltip');

    // Koppel meerdere knoppen
    var visitorcenter_button = d.querySelectorAll('.visitorcenter');
    var brachiosaurus_button = d.querySelectorAll('.brachiosaurus');
    var gallimimus_button = d.querySelectorAll('.gallimimus');
    var triceratops_button = d.querySelectorAll('.triceratops');
    var parasaurolophus_button = d.querySelectorAll('.parasaurolophus');
    var proceratosaurus_button = d.querySelectorAll('.proceratosaurus');
    var metriacanthosaurus_button = d.querySelectorAll('.metriacanthosaurus');
    var segisaurus_button = d.querySelectorAll('.segisaurus');
    var trex_button = d.querySelectorAll('.trex');
    var velociraptor_button = d.querySelectorAll('.velociraptor');
    var dilophosaurus_button = d.querySelectorAll('.dilophosaurus');
    var herrerasaurus_button = d.querySelectorAll('.herrerasaurus');
    var baryonyx_button = d.querySelectorAll('.baryonyx');
    var port_button = d.querySelectorAll('.port');
    var heliport_button = d.querySelectorAll('.heliport');
    var electricfence_button = d.querySelectorAll('.electricfence');
    var tourroad_button = d.querySelectorAll('.tourroad');
    var accessroad_button = d.querySelectorAll('.accessroad');


    // Voeg meerdere buttons toe aan het einde van de buttons array
    for (visitorcenter of visitorcenter_button) {
        attracties_buttons.push(visitorcenter);
    }

    for (brachiosaurus of brachiosaurus_button) {
        attracties_buttons.push(brachiosaurus);
    }

    for (gallimimus of gallimimus_button) {
        attracties_buttons.push(gallimimus);
    }

    for (triceratops of triceratops_button) {
        attracties_buttons.push(triceratops);
    }

    for (parasaurolophus of parasaurolophus_button) {
        attracties_buttons.push(parasaurolophus);
    }

    for (proceratosaurus of proceratosaurus_button) {
        attracties_buttons.push(proceratosaurus);
    }

    for (metriacanthosaurus of metriacanthosaurus_button) {
        attracties_buttons.push(metriacanthosaurus);
    }

    for (segisaurus of segisaurus_button) {
        attracties_buttons.push(segisaurus);
    }

    for (trex of trex_button) {
        attracties_buttons.push(trex);
    }

    for (velociraptor of velociraptor_button) {
        attracties_buttons.push(velociraptor);
    }

    for (dilophosaurus of dilophosaurus_button) {
        attracties_buttons.push(dilophosaurus);
    }

    for (herrerasaurus of herrerasaurus_button) {
        attracties_buttons.push(herrerasaurus);
    }

    for (baryonyx of baryonyx_button) {
        attracties_buttons.push(baryonyx);
    }

    for (port of port_button) {
        attracties_buttons.push(port);
    }

    for (heliport of heliport_button) {
        attracties_buttons.push(heliport);
    }

    for (electricfence of electricfence_button) {
        attracties_buttons.push(electricfence);
    }

    for (tourroad of tourroad_button) {
        attracties_buttons.push(tourroad);
    }

    for (accessroad of accessroad_button) {
        attracties_buttons.push(accessroad);
    }

    // Artikel onderdelen
    var jurassicKopTekst = d.getElementById('jurassicKopTekst');
    var jurassicThumbnail = d.getElementById('jurassicThumbnail');
    var jurassicIntro = d.getElementById('jurassicIntro');
    var jurassicDiet = d.getElementById('jurassicDiet');
    var jurassicParagraph = d.getElementById('jurassicParagraph');

    // Slider Attracties
    var prev = d.getElementById('prevSlide');
    var next = d.getElementById('nextSlide');
    prev.addEventListener('click', showPrevSlide);
    next.addEventListener('click', showNextSlide);
    var slideCounter = -1;

    function showPrevSlide() {
        slideCounter--;
        console.log('Slide#: ' + slideCounter);

        if (slideCounter < 0) {
            console.log('Lengte: ' + attracties.length);
            slideCounter = (attracties.length) - 1;
        }
        showSlide();
    }

    function showNextSlide() {
        slideCounter++;
        console.log('Slide#: ' + slideCounter);

        if (slideCounter == attracties.length) {
            slideCounter = 0;
        }
        showSlide();
    }

    function showSliderButtons() {
        prevSlide.style.display = 'block';
        nextSlide.style.display = 'block';
    }

    function hideSliderButtons() {
        prevSlide.style.display = 'none';
        nextSlide.style.display = 'none';
    }

    function showSlide() {
        jurassicKopTekst.innerHTML = attracties[slideCounter].title;
        jurassicThumbnail.setAttribute('src', 'images/attractions/' + attracties[slideCounter].thumb + '-thumb-o.png');
        jurassicIntro.textContent = attracties[slideCounter].intro;
        jurassicDiet.textContent = attracties[slideCounter].diet;
        jurassicParagraph.innerHTML = attracties[slideCounter].article;
    }


    /* Vul met standaard tekst als Javascript actief is. 
    Als JS niet actief is, laat standaard HTML tekst zien. */
    function showStandardText() {
        jurassicKopTekst.innerHTML = standard.title;
        jurassicThumbnail.setAttribute('src', 'images/attractions/standard-jp-visitorcenter-thumb-o.png');
        jurassicIntro.textContent = standard.intro;
        jurassicParagraph.innerHTML = standard.article;
        jurassicDiet.textContent = ''; // Verhinderen dat het dieet in sommige gevallen toch te zien is.
    }

    // Tooltips
    for (button of attracties_buttons) {

        button.addEventListener('mouseover', function (e) {

            var attractie_button = this.getAttribute('class');

            //Tooltips event
            if (e.target) {
                zoekAttractie();
                xpos = e.pageX;
                ypos = e.pageY;
                tooltip.style.left = xpos + 'px';
                tooltip.style.top = ypos + 'px';
                tooltip.textContent = attractie.tooltip;
                tooltip.style.display = 'block';

                setTimeout(function () {
                    tooltip.style.display = 'none';
                }, 1500);
            }

            // Bekijk of de aangeklikte button overeenkomt met de thumbnail en return dit deel
            function zoekAttractie() {
                for (attractie of attracties) {

                    if (attractie.thumb == attractie_button) {
                        return attractie;
                    }
                }
                return false;
            }

        });
    }

    // Klik op een attractie. Loop door de buttons array.
    for (button of attracties_buttons) {

        // zet op elke button een event listener
        button.addEventListener('click', function (e) {
            // Verkrijg de ID van de geklikte buttons, en gebruik deze om de bijhorende plaatjes en tekst te tonen
            console.log(this);
            var attractie_button = this.getAttribute('class');

            // Verhinder dat het plaatje opent in een nieuwe browser als JS aan staat
            e.preventDefault();

            // Bekijk of de aangeklikte button overeenkomt met de thumbnail en return dit deel
            function zoekAttractie() {
                for (attractie of attracties) {

                    // Als een database vak leeg is, verwijder dan ook het Html vak.
                    checkIfEmpty();

                    if (attractie.thumb == attractie_button) {

                        return attractie;
                    }
                }
                return false;
            }

            //Toon de bijhorende kop, thumb, intro en paragraaf die horen bij de geklikte button/deel van de attractie
            zoekAttractie();
            activateInformationWindow();

            // Plaats koptekst van het specifieke deel van de attractie
            jurassicKopTekst.textContent = attractie.title;

            // Plaats thumbnail van het specifieke deel van de aangeklikte attractie
            jurassicThumbnail.setAttribute('src', 'images/attractions/' + attractie.thumb + '-thumb-o.png');

            // Zet de alt description die hoort bij de aangeklikte attractie
            jurassicThumbnail.setAttribute('alt', attractie.title);

            // Plaats introtekst van het specifieke deel van de aangeklikte attractie
            jurassicIntro.textContent = attractie.intro;

            jurassicDiet.textContent = attractie.diet;
            // Plaats paragraaf van de aangeklikte attractie
            jurassicParagraph.innerHTML = attractie.article;
        });
    }

    // Als een database record leeg is, verwijder dan ook het bijhorende Html vak.
    function checkIfEmpty() {
        if (attractie.diet == '') {
            jurassicDiet.style.display = 'none';
        } else {
            jurassicDiet.style.display = 'block';
        }
    }


}