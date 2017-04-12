$(function() {

    //  SLIDESHOW
    // when user clicks dot, go to the photo assigned to that dot in the slideshow
    // when user hovers on dot(or clicks ? ? ), effect of some kind

    //  COMMENT FORM VALIDATION

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
