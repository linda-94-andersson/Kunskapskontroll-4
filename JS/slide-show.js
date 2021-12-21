$(document).ready(function () {
    $('.slide-show').slick({
        dots: true,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidestoShow: 5,
        slidesToScroll: 1,
        accessibility: true,
        draggable: true, 
    });
});
