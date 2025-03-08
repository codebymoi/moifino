const loadColorEl = document.querySelector('.load-color');
const logoEl = document.querySelector('.logo');
const iconsEl = document.querySelector('.icons');
const lqntEl = document.querySelector('.lqnt');
const fuerteEl = document.querySelector('.fuerte');

window.addEventListener('load', () => {
    loadColorEl.style.opacity = '0';

    setTimeout(() => {
        loadColorEl.style.display = 'none';
    }, 2000);

    logoEl.style.animation = 'slide-in-left 500ms';
    iconsEl.style.animation = 'zoom-in 500ms';
    lqntEl.style.animation = 'slide-in-right 500ms';
    fuerteEl.style.animation = 'slide-in-right 500ms';
});