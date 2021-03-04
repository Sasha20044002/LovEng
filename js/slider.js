const swiper = new Swiper('.main__slider', {
    speed: 500,
    spaceBetween: 100,
    slidesPerView: 3,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    noSwiping: false,
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },

        530:{
            slidesPerView: 2
        },

        710: {
            slidesPerView: 2.5
        },

        800: {
            slidesPerView: 3
        }
    }
});