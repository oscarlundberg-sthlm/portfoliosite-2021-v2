import mobileMovement from './mobilemovement.js';
import mouseMovement from './mousemovement.js';
import {svgGuyOnPhone} from './svgguyonphone.js';

const section1 = document.getElementById('section-1');
const enjoyInternetText = document.querySelector('#enjoy-internet');

let degrees = 15;
let transformsToKeepMouseMove = 'translate(-50%, -50%) translateZ(200px)';
let transformsToKeepMobile = 'translate(-50%, -50%) translateZ(150px)';
let opacityWhileMoving = null;

mobileMovement(section1, enjoyInternetText, transformsToKeepMobile);
mouseMovement(section1, enjoyInternetText, degrees, transformsToKeepMouseMove);

const enjoyInternetTextBehind = document.querySelector('#enjoy-internet-behind');
transformsToKeepMouseMove = 'translate(-50%, -50%) translateZ(-200px)';
transformsToKeepMobile = 'translate(-50%, -50%) translateZ(-100px)';
opacityWhileMoving = 1;

mobileMovement(section1, enjoyInternetTextBehind, transformsToKeepMobile, opacityWhileMoving);
mouseMovement(section1, enjoyInternetTextBehind, degrees, transformsToKeepMouseMove, opacityWhileMoving);


// insert svg guy on phone
const section1Splash = document.getElementById('section-1-splash');
section1Splash.insertAdjacentHTML('afterbegin', svgGuyOnPhone);
const insertedGuyOnPhone = section1Splash.getElementsByTagName('svg')[0];
const guyOnPhoneWidthRatio = 0.579947345375073;
insertedGuyOnPhone.setAttribute('height', section1.clientHeight + 'px')
insertedGuyOnPhone.setAttribute('width', section1.clientHeight * guyOnPhoneWidthRatio + 'px')
// insertedGuyOnPhone.setAttribute('viewBox', `0 0 ${section1.clientHeight * guyOnPhoneWidthRatio}px ${section1.clientHeight}px`)
insertedGuyOnPhone.setAttribute('id', 'guy-using-phone');

//remove inline fill on phone screen
// document.getElementById('path94480').style = 'fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;';



// responsiveness
const enjoyInternetTextCompWidth = parseInt(getComputedStyle(enjoyInternetText).width);

if (enjoyInternetTextCompWidth / document.body.clientWidth > 0.6) {
    enjoyInternetText.style.width = '50vw';
    section1Splash.style.perspective = '400px';
}
const enjoyInternetTextBehindCompWidth = parseInt(getComputedStyle(enjoyInternetTextBehind).width);

if (enjoyInternetTextBehindCompWidth / document.body.clientWidth > 0.6) {
    enjoyInternetTextBehind.style.width = '70vw';
}

const guyOnPhone = document.getElementById('guy-using-phone');
const guyOnPhoneCompWidth = parseInt(getComputedStyle(guyOnPhone).width);

if (guyOnPhoneCompWidth / document.body.clientWidth > 0.95) {
    guyOnPhone.style.width = '65vw';
}