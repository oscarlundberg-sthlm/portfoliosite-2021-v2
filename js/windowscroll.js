let metas = document.getElementsByTagName('meta');
let pfOrientation = window.innerWidth / window.innerHeight < 1 ? 'portrait': 'landscape';
let lastElement = '';
let halfWindowX = window.innerWidth / 2;
let halfWindowY = window.innerHeight / 2;

const topColor = (element) => {
    let parentSection = element.closest('section');
    let backgroundColor = getComputedStyle(parentSection).backgroundColor;

    metas["theme-color"].content =
    metas["msapplication-navbutton-color"].content =
    metas["apple-mobile-web-app-status-bar-style"].content = backgroundColor;
}

const portfolioAutoAni = (element) => {
    if (lastElement && lastElement != element) {
        lastElement.classList.remove('dvd-box-active');
    }
    if (element.classList.contains('img-dvd-box')) {
        element.classList.add('dvd-box-active');
        lastElement = element;
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY) {
        topColor(document.elementFromPoint(1,1));
        if (pfOrientation === 'portrait') {
            portfolioAutoAni(document.elementFromPoint(halfWindowX, halfWindowY).parentNode.parentNode);
        }
    }
});
