async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log('SW registration failed');
        }
    }
}

window.addEventListener('load', () => {
    registerSW();
});

const main = document.querySelector('main');
const upBtn = document.querySelector('#upBtn');
const downBtn = document.querySelector('#downBtn');
const resetBtn = document.querySelector('#resetBtn');
const counterDisplay = document.querySelector('#counter');
let counter = 0;

const updateDOM = () => {
    counterDisplay.innerHTML = counter;
    if (counter >= 10) {
        main.style.setProperty('--bgImg', 'url("./assets/m16a.jpg")');
    } else if (counter === 0) {
        main.style.setProperty('--bgImg', 'url("./assets/pillars-of-creation.jpg")');
    }
}

upBtn.addEventListener('click', e => {
    console.log(main);
    counter++;
    updateDOM();
});

downBtn.addEventListener('click', e => {
    counter--;
    updateDOM();
});

resetBtn.addEventListener('click', e => {
    counter = 0;
    updateDOM();
});

