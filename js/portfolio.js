const images = document.querySelectorAll('.portfolio-img');
const shadows = document.querySelectorAll('.portfolio-img-shadow');

// dvd
let dvdBox = document.querySelectorAll('.img-dvd-box');
let dvdSideColor = 'hsl(0, 0%, 80%)';
let dvdBottomColor = 'hsl(0, 0%, 30%)';


dvdBox.forEach(v => {
    v.classList.add('dvd-transition');

    let dvdLeft, dvdRight, dvdBottom;
    dvdLeft = document.createElement('div');
    dvdRight = document.createElement('div');
    dvdBottom = document.createElement('div');
    dvdLeft.style.backgroundColor = dvdSideColor;
    dvdRight.style.backgroundColor = dvdSideColor;
    dvdBottom.style.backgroundColor = dvdBottomColor;
    dvdLeft.classList.add('dvdLeft');
    dvdRight.classList.add('dvdRight');
    dvdBottom.classList.add('dvdBottom');

    v.insertAdjacentElement('afterbegin', dvdLeft);
    v.insertAdjacentElement('afterbegin', dvdRight);
    v.insertAdjacentElement('afterbegin', dvdBottom);
})

let dvdLeft = document.querySelectorAll('.dvdLeft');
let dvdRight = document.querySelectorAll('.dvdRight');
let dvdBottom = document.querySelectorAll('.dvdBottom');

const transformBoxSides = (boxSideList) => {
    boxSideList.forEach(v => {
        let style = getComputedStyle(v);
        let parentStyle = getComputedStyle(v.parentNode);
        let imgTotalWidth = v.parentNode.lastElementChild.offsetWidth;
        let imgTotalHeight = v.parentNode.lastElementChild.offsetHeight;
        let move, height, width;

        switch (boxSideList) {
            case dvdLeft:
                width = parseFloat(style.width);
                move = (imgTotalWidth - width) / 2;
                v.style.left = move + 'px';
                v.style.transform = `rotateY(-90deg) translateZ(${imgTotalWidth / 2}px)`;
                break;
            case dvdRight:
                width = parseFloat(style.width);
                move = (imgTotalWidth - width) / 2;
                v.style.left = move + 'px';
                v.style.transform = `rotateY(90deg) translateZ(${imgTotalWidth / 2}px)`;
                break;
            case dvdBottom:
                height = parseFloat(style.height);
                v.style.width = parentStyle.width;
                move = (imgTotalHeight - height) / 2;
                v.style.top = move + 'px';
                v.style.transform = `rotateX(-90deg) translateZ(${imgTotalHeight / 2}px)`;
                break;
        
            default:
                break;
        }
    })
}
transformBoxSides(dvdLeft);
transformBoxSides(dvdRight);
transformBoxSides(dvdBottom);

window.addEventListener('resize', () => {
    dvdBox.forEach(v => v.classList.remove('dvd-transition'));

    transformBoxSides(dvdLeft);
    transformBoxSides(dvdRight);
    transformBoxSides(dvdBottom);

    dvdBox.forEach(v => v.classList.add('dvd-transition'));
})
// end of dvd


if (window.MouseEvent) {
    dvdBox.forEach((v, k) => v.addEventListener('mouseenter', () => {
            dvdBox[k].classList.add('dvd-box-active');
    }))
    dvdBox.forEach((v, k) => v.addEventListener('mouseleave', () => {
            dvdBox[k].classList.remove('dvd-box-active');
    }))
}

const pfScrollEffect = () => {
    let pfOrientation = window.innerWidth / window.innerHeight < 1 ? 'portrait': 'landscape';
    if (pfOrientation === 'portrait') {
        let lastElement = '';
        document.getElementById('portfolio-slider').addEventListener('scroll', (e) => {
            if (e.target.scrollLeft) {
                let element = document.elementFromPoint((window.innerWidth / 2), (window.innerHeight / 2)).parentNode;
                if (element.classList.contains('img-dvd-box')) {
                    if (lastElement && lastElement != element) {
                        lastElement.classList.remove('dvd-box-active');
                    }
                    element.classList.add('dvd-box-active');
                    lastElement = element;
                }
            }
        })
    }
}
pfScrollEffect();

// popup for images without link
const imgsNoLink = document.querySelectorAll('.portfolio-img-no-link');

imgsNoLink.forEach(v => v.addEventListener('click', (e) => {
    const el = e.target;
    const dvdBox = el.parentNode;
    const boundingBox = el.getBoundingClientRect();
    const imgAlt = el.alt;
    const imgSrc = el.currentSrc;
    const imgHeight = el.height;
    const imgWidth = el.width;
    
    let bigImg = document.createElement('img');
    bigImg.setAttribute('src', imgSrc);
    bigImg.setAttribute('alt', imgAlt);
    bigImg.setAttribute('height', imgHeight);
    bigImg.setAttribute('width', imgWidth);
    bigImg.style.position = 'absolute';
    bigImg.style.left = boundingBox.x + 'px';
    bigImg.style.top = boundingBox.y + 'px';
    bigImg.style.height = imgHeight + 'px';
    bigImg.style.width = 'auto';
    bigImg.classList.add('popup-image');
    bigImg.style.border = '1px solid black';

    let bigImgDiv = document.createElement('div');
    bigImgDiv.style.position = 'fixed';
    bigImgDiv.style.left = 0;
    bigImgDiv.style.top = 0;
    bigImgDiv.style.height = '100vh';
    bigImgDiv.style.width = '100vw';
    bigImgDiv.style.zIndex = 1000;
    bigImgDiv.classList.add('popup-img-div');

    dvdBox.style.opacity = 0;
    bigImgDiv.appendChild(bigImg);
    document.body.appendChild(bigImgDiv);

    bigImgDiv.addEventListener('click', () => {
        bigImgDiv.remove();
        dvdBox.style.opacity = 1;
    })
}))