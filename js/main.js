$(document).ready( function() {
    $('.slider-features').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.costamer-testimonials__slider').slick({
    	arrows: true,
    	dots: false,
    	idesToShow: 1,
        slidesToScroll: 1
    })
});