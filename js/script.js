$(function() {
    $("#title").on("mouseover", function() {
        $("*").removeClass('hidden');
        $("#title").addClass('hidden');
    });

    $(".single-item").slick({
        dots: true
    });


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
    // hide title page

});
