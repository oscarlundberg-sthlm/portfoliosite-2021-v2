let o = '';
window.addEventListener('load', (e) => {
    let h = e.target.documentElement.clientHeight;
    let w = e.target.documentElement.clientWidth;

    if (h > w) {
        o = 'portrait';
    } else if (w > h) {
        o = 'landscape';
    }
})
window.addEventListener('resize', (e) => {
    let h = e.target.innerHeight;
    let w = e.target.innerWidth;

    if (h > w && o === 'landscape') {
        location.reload();
    } else if (w > h && o === 'portrait') {
        location.reload();
    }
});