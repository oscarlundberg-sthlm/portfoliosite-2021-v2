//Not imported anywhere right now. 
//Used to be included as <script src> at bottom of index.html
//BUG - shows landscapePopup on windows computers

const landscapePopup = document.createElement('div');
landscapePopup.id = 'landscape-popup';
landscapePopup.style.position = 'fixed';
landscapePopup.style.zIndex = 20000;
landscapePopup.style.backgroundColor = '#FF9A02';
landscapePopup.style.width = '100vw';
landscapePopup.style.height = '100vh';
landscapePopup.innerHTML = `
    <h1>Please rotate your device 90°<br/>The website looks way better in portrait mode =)</h1>
`;

const landscapePopupFunc = () => {
    let orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";

    switch (orientation) {
        case "Portrait":
            if (document.getElementById('landscape-popup')) {
                document.getElementById('landscape-popup').remove();
            }
            break;
        case "Landscape":
            document.body.insertAdjacentElement("afterbegin", landscapePopup);
            break;
        default:
            break;
    }
}

window.addEventListener('deviceorientation', landscapePopupFunc);