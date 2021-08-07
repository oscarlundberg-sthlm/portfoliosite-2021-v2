import {svgGuyOnPhone} from './svgguyonphone.js';

const wWidth = window.innerWidth;
const wHeight = window.innerHeight;
const section1 = document.getElementById('section-1');
const guyOnPhoneContainer = document.getElementById('guy-on-phone-container');
const section1BottomFade = document.getElementById('section-1-bottom-fade');


// insert svg guy on phone
guyOnPhoneContainer.insertAdjacentHTML('afterbegin', svgGuyOnPhone);
const insertedGuyOnPhone = guyOnPhoneContainer.getElementsByTagName('svg')[0];
insertedGuyOnPhone.setAttribute('id', 'guy-using-phone');



const getHeightFromWidth = (width) => {
    const ratio = 0.579947345375073;
    let height = parseInt(width / ratio);
    return height;
}



const guyOnPhone = document.getElementById('guy-using-phone');
let guyOnPhoneWidth;

const section1H1 = document.getElementById('section-1-h1');

//landscape
if (wWidth / wHeight > 1) {
    guyOnPhoneWidth = parseInt(wWidth * 0.6944444444);

    guyOnPhone.setAttribute('width', guyOnPhoneWidth + 'px');
    guyOnPhone.setAttribute('height', getHeightFromWidth(guyOnPhoneWidth) + 'px');

    guyOnPhone.style.top = -1 * (0.13 * getHeightFromWidth(guyOnPhoneWidth)) + 'px';
    guyOnPhone.style.left = 0.084 * guyOnPhoneWidth;

    section1H1.style.fontSize = '42px';
    section1H1.style.left = '50vw';
    section1H1.style.top = '42vh';

    let extraHeight = wWidth * 0.2;
    section1.style.height = wHeight + extraHeight + 'px';
    section1BottomFade.style.height = extraHeight + 'px';
}

//portrait
if (wWidth / wHeight <= 1) {
    guyOnPhoneWidth = parseInt(wWidth * 1.05333);

    guyOnPhone.setAttribute('width', guyOnPhoneWidth + 'px');
    guyOnPhone.setAttribute('height', getHeightFromWidth(guyOnPhoneWidth) + 'px');

    guyOnPhone.style.left = -1 * (0.1 * guyOnPhoneWidth) + 'px';

    section1H1.style.fontSize = '22px';
    section1H1.style.left = '52.2%';
    section1H1.style.top = '32.2%';
}

guyOnPhoneContainer.style.opacity = 1;
guyOnPhoneContainer.style.filter = 'brightness(1)';
section1H1.style.opacity = 1;
section1H1.style.filter = 'brightness(1)';