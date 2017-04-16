$(function() {
    $("#title").on("mouseover", function() {
        $("*").removeClass('hidden');
        $("#title").addClass('hidden');
    });

    // desktop carousel
    $(".single-item").slick({
        dots: true
    });
    // responsive carousel


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



// end js


function initQuoteCarousel() {

    var $quotesWrapper = $(".cust-quotes");
    var $quotes = $quotesWrapper.find("blockquote");

    if (!$quotes.length) {
        return;
    }

    var selectNextQuote = function() {
        // keep move first quote in dom to the end to make continous
        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

        setTimeout(selectNextQuote, $quote.data("timeout"));
    };

    setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

}

$(function() {
    initQuoteCarousel();
});
