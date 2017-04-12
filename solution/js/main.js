// function definitions






// js executed once page has finished loading
$(function() {
    console.log("jQuery loaded");
    // debugger;

    // add smooth scrolling to the nav's anchors
    $("nav").on('click', 'a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    // add highlighting menu item when scrolling to each section
    $(window).on("scroll", function() {
        var position = $(this).scrollTop();
        // offset highlights the section before reaching the very top of the page.
        var offset = 1;

        $(".section").each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr("id");

            if (position + offset >= target) {
                $("#navigation > ul > li > a").removeClass("active");
                $("#navigation > ul > li > a[href='#" + id + "']").addClass("active");
            }

        });
    });
    // Fade in & out text loop - jQuery
    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(4000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote();



});
