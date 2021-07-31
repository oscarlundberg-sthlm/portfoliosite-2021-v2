// shadow on hover
const images = document.querySelectorAll('.portfolio-img');
const shadows = document.querySelectorAll('.portfolio-img-shadow');

if (window.MouseEvent) {
    images.forEach((v, k) => v.addEventListener('mouseenter', () => {
            images[k].classList.add('portfolio-img-active');
            shadows[k].classList.add('portfolio-img-shadow-active');
    }))
    images.forEach((v, k) => v.addEventListener('mouseleave', () => {
            images[k].classList.remove('portfolio-img-active');
            shadows[k].classList.remove('portfolio-img-shadow-active');
    }))
}

const pfScrollEffect = () => {
    let pfOrientation = window.innerWidth / window.innerHeight < 1 ? 'portrait': 'landscape';
    if (pfOrientation === 'portrait') {
        let lastElement = '';
        document.getElementById('portfolio-slider').addEventListener('scroll', (e) => {
            if (e.target.scrollLeft) {
                let element = document.elementFromPoint((window.innerWidth / 2), (window.innerHeight / 2));
                if (element.classList.contains('portfolio-img')) {
                    if (lastElement && lastElement != element) {
                        lastElement.classList.remove('portfolio-img-active');
                        lastElement.previousElementSibling.classList.remove('portfolio-img-shadow-active');
                    }
                    element.classList.add('portfolio-img-active');
                    element.previousElementSibling.classList.add('portfolio-img-shadow-active');
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

    el.style.opacity = 0;
    bigImgDiv.appendChild(bigImg);
    document.body.appendChild(bigImgDiv);

    bigImgDiv.addEventListener('click', () => {
        bigImgDiv.remove();
        el.style.opacity = 1;
    })
}))