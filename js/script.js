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


const slickTrack = document.querySelector('.slick-track');
console.log(slickTrack)