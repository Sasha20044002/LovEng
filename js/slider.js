$(document).ready(function () {
    $('.main__slider').slick({
        arrows: false,
        slidesToShow: 3.5,
        draggable: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        pauseOnHover: true,
        variableHeight: true,
        centerMode: true,
    })
})