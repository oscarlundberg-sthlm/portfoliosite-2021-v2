import mobileMovement from './mobilemovement.js';
import mouseMovement from './mousemovement.js';
import {svgGuyOnPhone} from './svgguyonphone.js';

const section1 = document.getElementById('section-1');
const enjoyInternetText = document.querySelector('#enjoy-internet');

let degrees = 15;
let transformsToKeepMouseMove = 'translate(-50%, -50%) translateZ(200px)';
let transformsToKeepMobile = 'translate(-50%, 0%) translateZ(200px)';
let opacityWhileMoving = null;

mobileMovement(section1, enjoyInternetText, transformsToKeepMobile, null, true);
mouseMovement(section1, enjoyInternetText, degrees, transformsToKeepMouseMove, null, true);

const enjoyInternetTextBehind = document.querySelector('#enjoy-internet-behind');
transformsToKeepMouseMove = 'translate(-50%, -50%) translateZ(-200px)';
transformsToKeepMobile = 'translate(-50%, -50%) translateZ(-200px)';
opacityWhileMoving = 1;

mobileMovement(section1, enjoyInternetTextBehind, transformsToKeepMobile, opacityWhileMoving);
mouseMovement(section1, enjoyInternetTextBehind, degrees, transformsToKeepMouseMove, opacityWhileMoving);


// insert svg guy on phone
const section1Splash = document.getElementById('section-1-splash');
section1Splash.insertAdjacentHTML('afterbegin', svgGuyOnPhone);
const insertedGuyOnPhone = section1Splash.getElementsByTagName('svg')[0];
const guyOnPhoneWidthRatio = 0.579947345375073;
let guyOnPhoneHeight = 1000;
let guyOnPhoneWidth = parseInt(guyOnPhoneHeight * guyOnPhoneWidthRatio);
insertedGuyOnPhone.setAttribute('height', guyOnPhoneHeight + 'px');
insertedGuyOnPhone.setAttribute('width', guyOnPhoneWidth + 'px');
insertedGuyOnPhone.setAttribute('id', 'guy-using-phone');


// responsiveness
const enjoyInternetTextCompWidth = parseInt(getComputedStyle(enjoyInternetText).width);

if (enjoyInternetTextCompWidth / document.body.clientWidth > 0.6) {
    enjoyInternetText.style.width = '80vw';
    section1.style.perspective = '500px';
}
const enjoyInternetTextBehindCompWidth = parseInt(getComputedStyle(enjoyInternetTextBehind).width);

if (enjoyInternetTextBehindCompWidth / document.body.clientWidth > 0.6) {
    enjoyInternetTextBehind.style.width = '80vw';
}

const guyOnPhone = document.getElementById('guy-using-phone');

if (window.innerWidth / window.innerHeight < 1) {
    guyOnPhoneHeight = Math.floor(window.innerHeight * 1.2);
    guyOnPhoneWidth = parseInt(guyOnPhoneHeight * guyOnPhoneWidthRatio);
    guyOnPhone.setAttribute('height', guyOnPhoneHeight + 'px');
    guyOnPhone.setAttribute('width', guyOnPhoneWidth + 'px');
    guyOnPhone.style.top = 0;
    guyOnPhone.style.left = 0;
    guyOnPhone.style.left = -1 * (guyOnPhoneWidth - window.innerWidth) + 'px';
    guyOnPhone.style.transform = 'translate(0, 0)';
} else {
    guyOnPhoneHeight = Math.floor(window.innerHeight * 1.2);
    guyOnPhoneWidth = parseInt(guyOnPhoneHeight * guyOnPhoneWidthRatio);
    guyOnPhone.setAttribute('height', guyOnPhoneHeight + 'px');
    guyOnPhone.setAttribute('width', guyOnPhoneWidth + 'px');
    guyOnPhone.style.top = 0;
    guyOnPhone.style.left = 0 + '%';
    // guyOnPhone.style.left = -1 * (guyOnPhoneWidth - window.innerWidth) + 'px';
    guyOnPhone.style.transform = 'translate(-4%, -5%)';
}