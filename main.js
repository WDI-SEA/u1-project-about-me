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



    // CONTACT FORM SHOW
    // when click arrow-down, contact form slides up from bottom

    $(".fa-angle-down").on("click", function(event) {
        event.preventDefault();
        $("#contact-form").removeClass("hidden");
        $("html, body").animate({
            scrollTop: $("#intro").offset().top
        }, 1500);
    });

    // COMMENT FORM VALIDATION

    $(".form").on("submit", function(event) {

        var basicForm = ($(".basic-form"));
        var formError = ($(".form-error"));

        console.log(basicForm);

        event.preventDefault();

        for (var i = 0; i < basicForm.length; i++) {
            if (!basicForm[i].value) {
                $(basicForm[i]).addClass("error");
                $(formError[i]).show();
            }
        }
    });


    $(".basic-form").on("keydown", function() {

        var basicForm = ($(".basic-form"));
        var formError = ($(".form-error"));

        for (var i = 0; i < basicForm.length; i++) {
            if (basicForm[i].value) {
                $(basicForm[i]).removeClass("error");
                $(formError[i]).hide();
            }
        }

    });

});
