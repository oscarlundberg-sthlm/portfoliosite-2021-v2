const enjoyText = document.getElementById('enjoy-internet');
const enjoyTextCompWidth = parseInt(getComputedStyle(enjoyText).width);

if (enjoyTextCompWidth / document.body.clientWidth > 0.6) {
    enjoyText.style.width = '80vw';
}



const guyOnPhone = document.getElementById('guy-using-phone');
const guyOnPhoneCompWidth = parseInt(getComputedStyle(guyOnPhone).width);

if (guyOnPhoneCompWidth / document.body.clientWidth > 0.95) {
    guyOnPhone.style.width = '95vw';
}