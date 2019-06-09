

$(function(){
    $('.slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
        breakpoint: 576,settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        }
        }]
    });
});

$(function(){
    var $width =770;
    var $height =513;
    var $interval = 5000;
    var $fade_speed = 1500; 
    $("#singleslide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
    $("#singleslide ul li").hide().css({"position":"absolute","top":0,"left":0});
    $("#singleslide ul li:first").addClass("active").show();
    setInterval(function(){
    var $active = $("#singleslide ul li.active");
    var $next = $active.next("li").length?$active.next("li"):$("#singleslide ul li:first");
    $active.fadeOut($fade_speed).removeClass("active");
    $next.fadeIn($fade_speed).addClass("active");
    },$interval);
    });

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

var _window = $(window),
    _header = $('.gnav'),
    headerChange = $('.header-change'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.header').height();
    if(_window.scrollTop() > heroBottom){
        headerChange.addClass('show');  
    }
    else{
        headerChange.removeClass('show');
    }
});
 
_window.trigger('scroll');