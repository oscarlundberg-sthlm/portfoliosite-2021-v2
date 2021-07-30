let metas = document.getElementsByTagName('meta');

window.addEventListener('scroll', () => {
    let element = document.elementFromPoint(1,1);
    let parentSection = element.closest('section');
    let backgroundColor = getComputedStyle(parentSection).backgroundColor;

    metas["theme-color"].content =
    metas["msapplication-navbutton-color"].content =
    metas["apple-mobile-web-app-status-bar-style"].content = backgroundColor;
});
