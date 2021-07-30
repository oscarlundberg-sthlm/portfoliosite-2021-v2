// shadow on hover
const images = document.querySelectorAll('.portfolio-img');
const shadows = document.querySelectorAll('.portfolio-img-shadow');

if (window.MouseEvent) {
    images.forEach((v, k) => v.addEventListener('mouseenter', () => {
        requestAnimationFrame(() => {
            images[k].style.transform = 'rotate3d(0, 0, 0, 7deg) translateY(-2%) translateZ(10px)';
            images[k].style.position = 'relative';
            images[k].style.zIndex = 2;
            images[k].style.cursor = 'pointer';
    
            shadows[k].style.backgroundColor = 'rgba(2, 2, 2, 0.4)';
            shadows[k].style.transform = 'rotate3d(1, 0, 0, 90deg) translateY(5px)';
            shadows[k].style.filter = 'blur(5px)';
        })
    
        // images.forEach(v2 => {
        //     if (images[k] === v2) {} else {
        //         v2.style.filter = 'brightness(50%)';
        //     }
        // })
    }))
    images.forEach((v, k) => v.addEventListener('mouseleave', () => {
        requestAnimationFrame(() => {
            images[k].style.transform = '';
            images[k].style.position = '';
            images[k].style.zIndex = '';
            images[k].style.cursor = '';
    
            shadows[k].style.backgroundColor = '';
            shadows[k].style.transform = '';
            shadows[k].style.filter = '';
        })
    
        // images.forEach(v2 => {
        //     if (images[k] === v2) {} else {
        //         v2.style.filter = 'brightness(100%)';
        //     }
        // })
    }))
}

// popup for images without link
const imgsNoLink = document.querySelectorAll('.portfolio-img-no-link');

imgsNoLink.forEach(v => v.addEventListener('click', (e) => {
    const el = e.target;
    const imgAlt = el.alt;
    const imgSrc = el.currentSrc;
    const imgHeight = el.height;
    
    let bigImg = document.createElement('img');
    bigImg.setAttribute('src', imgSrc);
    bigImg.setAttribute('alt', imgAlt);
    bigImg.style.position = 'absolute';
    bigImg.style.left = el.x + 'px';
    bigImg.style.top = el.y + 'px';
    bigImg.style.height = imgHeight + 'px';
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

    requestAnimationFrame(() => {
        el.style.opacity = 0;
        bigImgDiv.appendChild(bigImg);
        document.body.appendChild(bigImgDiv);
    })

    bigImgDiv.addEventListener('click', () => {
        requestAnimationFrame(() => {
            bigImgDiv.remove();
            el.style.opacity = 1;
        })
    })
}))





// displaying 'more info' dynamically on hover

// const entities = document.querySelectorAll('.portfolio-entity');

// const handleMouseEnter = (e) => {
//     e.target.children[1].classList.add('portfolio-more-info-hover');
// };
// const handleMouseLeave = (e) => {
//     e.target.children[1].classList.remove('portfolio-more-info-hover');
// };

// entities.forEach(v => v.addEventListener('mouseenter', handleMouseEnter));
// entities.forEach(v => v.addEventListener('mouseleave', handleMouseLeave));