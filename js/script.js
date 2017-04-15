$(function() {

    // hide title page
    $("#title").on("mouseover", function() {
        $("*").removeClass('hidden');
        $("#title").addClass('hidden');
    });
    // submit form
    $(".submit").on('click', function(event) {
        event.preventDefault();

        $(".edited-element").each(function() {

            if ($(this).val()) {
                // value is non-blank
                $(this).removeClass("error");
                $(this).siblings().hide();
            } else {
                // value is blank
                $(this).addClass("error");
                $(this).siblings().fadeIn(1000);
            }
        });
    });


    // carousel
    $('#carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 500
    });



});
