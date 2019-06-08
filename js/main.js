

$(function(){
    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
        breakpoint: 576,settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        }
        }]
    });
});

$('.singleslide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
})

$(function(){
    function sliderSetting(){
 
        var width = $(window).width();
 
        if(width <= 576){
            $('.banner').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                infinite: true,
            });
        } else {
            $('.banner.slick-initialized').slick('unslick');
        }
    }
 
    sliderSetting();
 
    $(window).resize( function() {
        sliderSetting();
    });
});  