// Adaptive Menu
const menu = document.querySelector('#menu-adaptive')
const open = document.querySelector('.header__content__open');
const close = document.querySelector('.header__content__close');

open.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('visible');
    menu.classList.remove('hidden');
})

close.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('hidden');
    menu.classList.remove('visible');
    window.scrollTo({
        top: 0
    })
})

// Images
const images = document.querySelectorAll('.main__sponsors__img');

for (let i = 0; i < images.length; i++) {
    if (window.innerWidth > 425){
        images[i].setAttribute('src', 'img/img' + i + '.svg')
    } else if (window.innerWidth  <= 425) {
        images[i].setAttribute('src', 'img/img' + i + '-mini.svg');
    }
}

const img2 = document.querySelector('.main__finish__img');

if (window.innerWidth <= 630) {
    img2.setAttribute('src', 'img/img9.png')
}

// main__finish
const mainFinishContent = document.querySelector('.main__finish__content');
let n = (mainFinishContent.offsetHeight / 2) * (-1);
let margin = "margin-top: -121.5px;";
mainFinishContent.setAttribute('style', margin);