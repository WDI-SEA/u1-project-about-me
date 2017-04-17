$(function() {
    // -------------hide title page---------------------
    $("#title").on("mouseover", function() {
        $("*").removeClass('hidden');
        $("#title").addClass('hidden');
    });
    // ---------hamburger-------------
    $(".hamburger").on("click", function() {
        event.preventDefault();
        $("#mobile").removeClass("hide-nav");
        $(".hamburger").on("click", function() {
            $("#mobile").addClass("hide-nav");
            //whenever you click on burger nav the drop-down menu will show
        });
    });


    // -----------desktop carousel------------------------
    $(".single-item").slick({
        dots: true
    });
    // -----------Moblie Responsive Carousel----------------

    $('.carousel').slick({
        dots: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }]
    });

    // ---------comment form--------------------------
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


});

// ----------Scrolling Quotes--------------

function scrollQuote() {

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
    scrollQuote();
});


// ------------------jump to section of page slowly using navone links---------------------------
$(document).on('click', 'a', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
