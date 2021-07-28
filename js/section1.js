import mobileMovement from './mobilemovement.js';
import mouseMovement from './mousemovement.js';

const section1 = document.getElementById('section-1');
const enjoyInternetText = document.querySelector('#enjoy-internet');

let degrees = 15;
let transformsToKeep = 'translate(-50%, -50%)';

mobileMovement(section1, enjoyInternetText, transformsToKeep);
mouseMovement(section1, enjoyInternetText, degrees, transformsToKeep);


// responsiveness
const enjoyInternetTextCompWidth = parseInt(getComputedStyle(enjoyInternetText).width);

if (enjoyInternetTextCompWidth / document.body.clientWidth > 0.6) {
    enjoyInternetText.style.width = '80vw';
}

const guyOnPhone = document.getElementById('guy-using-phone');
const guyOnPhoneCompWidth = parseInt(getComputedStyle(guyOnPhone).width);

if (guyOnPhoneCompWidth / document.body.clientWidth > 0.95) {
    guyOnPhone.style.width = '95vw';
}