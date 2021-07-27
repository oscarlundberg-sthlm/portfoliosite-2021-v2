// dove 3d-transform on mousemovement
const section4 = document.getElementById('section-4');
const dove = document.querySelector('#dove');

const mouseMove = (e) => {
    let xCenter = e.clientX - (section4.clientWidth / 2);
    let yCenter = e.clientY - (section4.clientHeight / 2);

    let x0To1 = (xCenter / (section4.clientWidth / 2));
    let y0To1 = -1 * (yCenter / (section4.clientHeight / 2));

    dove.style.transform = `rotate3d(${y0To1},${x0To1},0,10deg)`;
}


const periodicalMovement = () => {
    setInterval(() => {
        section4.removeEventListener('mousemove', mouseMove);
        setTimeout(() => {
            section4.addEventListener('mousemove', mouseMove);
        }, 20);
    }, 500);
}

periodicalMovement();

// eqiulibrium when a and b is 0.98
// const genBirds = (a, b, size) => {
//     for (let i = 1; i <= 10; i++) {
//         let expL = Math.exp(i * a) / section4.clientWidth;
//         let expT = Math.exp(i * b) / section4.clientHeight;
//         let newDove = document.createElement('img');
//         newDove.src = '../assets/svg/duva-exp-2.svg';
//         newDove.alt = 'dove';
//         newDove.style.width = size + 'rem';
//         newDove.style.position = 'absolute';
//         newDove.style.zIndex = 0;
//         newDove.style.top = expT + '%';
//         newDove.style.left = expL + '%';
//         newDove.classList.add('doves');
//         section4.prepend(newDove);
//     }
// }

// let equiCenter = 0.98;
// let diverge = 0.20;
// let arrA = [];
// let arrB = [];

// for (let i = (equiCenter - diverge); i <= (equiCenter + diverge); i += 0.02) {
//     arrA.push(i);
//     arrB.push(i);
// }
// arrB = arrB.reverse();

// console.log(arrA, arrB);

// for (let i = 0; i < arrA.length; i++) {
//     genBirds(arrA[i], arrB[i], (i + 1));
// }























// const section4Content = document.getElementById('section-4-content');
// let section4ContentYPosition = section4Content.getBoundingClientRect().y;

// let windowHeight = document.documentElement.clientHeight;

// window.addEventListener('resize', () => {
//     windowHeight = document.documentElement.clientHeight;
// })


// let section4ContentYPositionLastValue = 0;

// document.addEventListener('scroll', (e) => {
//     section4ContentYPosition = section4Content.getBoundingClientRect().y;
    
//     if (section4ContentYPositionLastValue > section4ContentYPosition) {
//         //scroll down
//         if (section4ContentYPosition < (windowHeight * 0.8)) {
//             section4Content.style.transform = 'scale3d(1, 1, 1) rotate3d(0,0,0,0deg)'; //translateY(-50%)
//         }
//     } else if (section4ContentYPositionLastValue < section4ContentYPosition) {
//         //scroll up
//         if (section4ContentYPosition > (windowHeight * 0.1)) {
//             section4Content.style.transform = 'scale3d(0.4, 0.4, 0.4) translateY(-50%)'; // rotate3d(-1, 4, 5, 10deg)
//         }
//     }

//     section4ContentYPositionLastValue = section4ContentYPosition;
// })