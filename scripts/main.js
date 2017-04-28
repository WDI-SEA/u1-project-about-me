$(function() {
    //===nav anchors
    $('a').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1200);
        return false;
    });

    //===hamburger
    $('#hamburger').on('click', function() {
        $('#navUL').slideToggle();
    });
    $('#navUL li a').on('click', function() {
        if (window.innerWidth < 561) {
            $('#navUL').slideToggle();
        }
    });


    //===contactForm
    var inputBox = $('.inputBox');

    $('#submitButt').on('click', clear);

    function checkForm() {
        for (var i = 0; i < inputBox.length; i++) {
            if (!inputBox[i].value) {
                $(inputBox[i]).addClass('error');
                $(inputBox[i]).siblings().show();
            }
        }
    }

    function clear(event) {
        event.preventDefault();
        for (var i = 0; i < inputBox.length; i++) {
            $(inputBox[i]).removeClass('error');
            $('.errorMsg').hide();
            checkForm();
        }
    }
    //===highlight nav <a>'s
    $('section').mouseenter(function() { $('nav a[href="#' + $(this).attr('id') + '"]').addClass('active'); });
    $('section').mouseleave(function() { $('nav a[href="#' + $(this).attr('id') + '"]').removeClass('active'); });
    //===Slick - gallery
    $(".single-item").slick({
        dots: true
    });
    //===Slick - superQuotes
    $(".superQuotes").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    //end of JS
    //===Do not Erase curly brace below

});
