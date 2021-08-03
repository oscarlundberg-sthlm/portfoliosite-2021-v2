// import mobileMovement from './mobilemovement.js';
import mouseMovement from './mousemovement.js';

const section4 = document.getElementById('section-4');
const dove = document.querySelector('#dove');
const degrees = 10;
const transformsToKeep = '';

// mobileMovement(section4, dove, transformsToKeep);
mouseMovement(section4, dove, degrees, transformsToKeep);