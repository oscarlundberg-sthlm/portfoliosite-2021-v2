import mobileMovement from './mobilemovement.js';
import mouseMovement from './mousemovement.js';
import {svgGuyOnPhone} from './svgguyonphone.js';

const section1 = document.getElementById('section-1');
const enjoyInternetText = document.querySelector('#enjoy-internet');

let degrees = 15;
let transformsToKeep = 'translate(-50%, -50%)';

mobileMovement(section1, enjoyInternetText, transformsToKeep);
mouseMovement(section1, enjoyInternetText, degrees, transformsToKeep);


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
document.getElementById('path94480').style = 'fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;';



// responsiveness
const enjoyInternetTextCompWidth = parseInt(getComputedStyle(enjoyInternetText).width);

if (enjoyInternetTextCompWidth / document.body.clientWidth > 0.6) {
    enjoyInternetText.style.width = '80vw';
}

const guyOnPhone = document.getElementById('guy-using-phone');
const guyOnPhoneCompWidth = parseInt(getComputedStyle(guyOnPhone).width);

if (guyOnPhoneCompWidth / document.body.clientWidth > 0.95) {
    guyOnPhone.style.width = '85vw';
}