$(function() {

    // SLIDESHOW
    // when user clicks dot, go to the photo assigned to that dot in the slideshow
    // when user hovers on dot(or clicks ? ? ), effect of some kind

    // navigation
    // if link in header is clicked, slowly scroll to that place on the homepage
    // need to "animate" body to slide down
    // //css?
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // testimonials
    // three quotes - each as a div
    // after 15 seconds - switch to next div
    // var newQuote = $(".quote");
    // var quoteLength = newQuote.length;
    // var counter = 0;

    // newQuote.hide();
    // setTimeout(function() {
    //     startIteration(counter);
    // }, 1000);

    // function startIteration(counter) {
    //     newQuote.eq(counter).fadeIn('slow', function() {
    //         if (counter <= quoteLength) {
    //             setTimeout(function() {
    //                 newQuote.fadeOut('slow', function() {
    //                     if (counter == quoteLength) {
    //                         counter = 0;
    //                     } else {
    //                         counter++;
    //                     }
    //                     setTimeout(function() { startIteration(counter); }, 1000);
    //                 });
    //             }, 2000);
    //         }
    //     });
    // }

    // GALLERY

    $(".galleryimg").on("click", function(event) {
        event.preventDefault();

        var imgId = $(this).attr("src");


        $("#view-large").removeClass("hidden");
        $(".view-large-pic").attr("src", imgId);
        $("html, body").css("overflow", "hidden");
    });

    $("#view-large").on("click", function() {

        $("#view-large").addClass("hidden");
        $("html, body").css("overflow", "visible");
    });

    // CONTACT FORM SHOW
    // when click arrow-down, contact form slides up from bottom

    $(".fa-angle-down").on("click", function(event) {
        event.preventDefault();
        $("#contact-form").removeClass("hidden");
        $("html, body").animate({
            scrollTop: $("#intro").offset().top
        }, 1500);
    });

    $('selector').slippry();

});
