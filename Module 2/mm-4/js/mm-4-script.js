'use strict';

window.addEventListener('load', function () {
    closeWindow();
    removeCompass();
    zoomInAnimalLegend();
    zoomOutAnimalLegend();
    zoomInFacilitiesLegend();
    zoomOutFacilitiesLegend();
});

// Global variables
var d = document;
var counter = 1;
var reset = document.getElementById('resetView');
var attracties = d.getElementById('attracties');
var compass = d.querySelector('.compass');
var outputGraden = d.querySelector('.graden');
var animalLegend = d.querySelector('#animalLegend');
var facilitiesLegend = d.querySelector('#facilitiesLegend');
var information = d.querySelector('#information');
var klik = false;
var toggle = false;

// Event listeners
reset.addEventListener('click', resetView);

animalLegend.addEventListener('click', function () {

    if (klik) {
        zoomInAnimalLegend();
    } else {
        zoomOutAnimalLegend();
    }
});

facilitiesLegend.addEventListener('click', function () {
    if (toggle) {
        zoomInFacilitiesLegend();
    } else {
        zoomOutFacilitiesLegend();
    }
});


// Functions 
function resetView() {

    // Reset map to normal
    attracties.removeAttribute('style');
    attracties.style.display = 'block';
    attracties.style.transform = 'scale(1)';

    // Reset compass to normal
    compass.removeAttribute('style');

    graden = 0;
    attracties.style.transform = 'rotate(' + graden + 'deg)';
    outputGraden.innerHTML = 'Rotation: ' + graden + ' &#176;';

    mapY = 1;
    mapX = 32;
    zoomLevel = 0;
    zoom.innerHTML = 'Zoom: ' + (zoomLevel * 10).toFixed(0) + '&times;';

    moveMap(device);
    return graden;
}

/* Move the map if device width is below 768px */
function moveMap(device) {
    if (device.matches) { // If media query matches
        attracties.style.top = 0 + '%';
        attracties.style.left = 32 + '%';
    } else {
        attracties.style.top = 0 + '%';
        attracties.style.left = 0 + '%';
    }
}

var device = window.matchMedia("(min-width: 768px)")
moveMap(device);
device.addListener(moveMap);

/* Legends */
// Zoom in on the animal legend
function zoomInAnimalLegend() {
    animalLegend.style.transform = 'scale(1.5)';
    animalLegend.style.cursor = 'zoom-out';
    animalLegend.setAttribute('title', 'Click to reduce');
    return klik = false;
}

// Zoom out the animal legend
function zoomOutAnimalLegend() {
    animalLegend.style.transform = 'scale(1)';
    animalLegend.style.cursor = 'zoom-in';
    animalLegend.setAttribute('title', 'Click to enlarge');
    return klik = true;
}

// Zoom in on the facilities legend
function zoomInFacilitiesLegend() {
    facilitiesLegend.style.transform = 'scale(1.5)';
    facilitiesLegend.style.cursor = 'zoom-out';
    facilitiesLegend.setAttribute('title', 'Click to reduce');
    return toggle = false;
}

// Zoom out the facilities legend
function zoomOutFacilitiesLegend() {
    facilitiesLegend.style.transform = 'scale(1)';
    facilitiesLegend.style.cursor = 'zoom-in';
    facilitiesLegend.setAttribute('title', 'Click to enlarge');
    return toggle = true;
}

/* Closing stuff */
// Close window(s)
function closeWindow() {
    var closings = document.querySelectorAll('.close');
    for (close of closings) {
        close.addEventListener('click', function (e) {
            e.target.parentNode.style.display = 'none';
            counter = 1;
            checkExistenceInfoWindow();
        });
    }
}

// Check whether or not the Information window exists. If not: hide the slide prev & next buttons. If yes, show the prev & next buttons
function checkExistenceInfoWindow() {
    var informationWindow = d.querySelector('.informationWindow');
    var prev = d.querySelector('#prevSlide');
    var next = d.querySelector('#nextSlide');

    if (informationWindow.getAttribute('style', 'display: none')) {
        console.log('Does not exist');
        prev.style.display = 'none';
        next.style.display = 'none';
    } else {
        console.log('Exists');
        prev.style.display = 'block';
        next.style.display = 'block';
    }
}

// Hide compass
function removeCompass() {
    var compass = d.querySelector('.compass');
    compass.addEventListener('click', function () {
        compass.style.visibility = 'hidden';
    });
}