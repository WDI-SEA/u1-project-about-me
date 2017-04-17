//*************SLIDER/CAROUSEL********************************//
$(document).ready(function() {
    $(".slider").slick({
        dots: true
    });
    $("nav a").click(function(e) {
        var btnId = "section" + this.id;

        $('html, body').animate({
            scrollTop: $("#" + btnId).offset().top
        }, 1000);
    });


});
