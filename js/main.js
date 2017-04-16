$(document).ready(function() {


    $(window).scroll(function() {
        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 280) {
            $('.nav-bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 281) {
            $('.nav_bar').removeClass('navbar-fixed');
        }
    });
});



//*************SLIDER/CAROUSEL********************************//
$(document).ready(function() {
    $(".slider").slick({
        dots: true
    });
});








//     var width = 720;
//     var animationSpeed = 1000;
//     var pause = 1000;
//     var currentSlide = 1;

//     var $slider = $('#slider');
//     var $slideContainer = $slider.find('slides');
//     var $slides = $slideContainer.find('slide');

//     var interval;

//     function startSlider() {
//         interval = setInterval(function() {


//             $sliderContainer.animate({ 'margin-left': '-=' + width }), animationspeed, fucntion(), currentSlide++;
//             if (currentSlide === $slides.length) {
//                 currentSlide = 1;
//                 $sliderContainer.css('margin-left', 0);
//             }
//         });
//     }):

// }, pause);

// $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);


// });
