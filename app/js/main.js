$(function() {

    var mixer = mixitup('.products__inner-box');


    $(".rate-star ").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });
    $(".product-slider__inner").slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

});