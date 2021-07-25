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

// popup for images without link

const imgsNoLink = document.querySelectorAll('.portfolio-img-no-link');

imgsNoLink.forEach(v => v.addEventListener('click', (e) => {
    const el = e.target;
    const imgAlt = el.alt;
    const imgSrc = el.currentSrc;
    const imgHeight = el.height;

    el.style.opacity = 0;
    
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

    bigImgDiv.appendChild(bigImg);
    document.body.appendChild(bigImgDiv);

    bigImgDiv.addEventListener('click', (e) => {
        console.log(bigImgDiv);
        bigImgDiv.remove();
        el.style.opacity = 1;
    })
}))