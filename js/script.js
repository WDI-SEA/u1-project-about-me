$(function() {
    // -------------hide title page---------------------
    //this function loads when the page starts. It enabbles the user to click on the phrase to enter webpage with an click event listner.
    $("#title").on("mouseover", function() {
        $("header, main, footer, #experience, .experience, #testimonials, #contact").removeClass('hidden');
        $("#title").addClass('hidden');
    });
    // ---------hamburger-------------
    $(".hamburger").on("click", function() {
        event.preventDefault();

        // when you intially click on burger nav the drop-down menu will show (removing hide-nav class)
        $("#mobile").toggleClass("hide-nav");
    });

    // -----------Moblie Responsive Carousel----------------
    //Makes the carousel mobile responsive by designating the breakpoint at screen size 600.
    //infinite:true, means you want this to run continously
    $('.carousel').slick({
        dots: true
    });

    // ---------comment form--------------------------
    //When the user clicks on the submit button on form will run function
    $(".submit").on('click', function(event) {
        event.preventDefault(); //preventingDefault tells computer to not submit form, rather to do follow funciton

        $(".edited-element").each(function() { //hey, jQuery find the 'edited-elemnt' and do this function

            if ($(this).val()) { //if the form feild is filled then don't display error message
                $(this).removeClass("error");
                $(this).siblings().hide();
            } else {
                $(this).addClass("error"); //do this (display error message and apply css style) when a form feild is left empty
                $(this).siblings().fadeIn(1000); //add a fade in effect at the rate of 1 second.
            }
        });
    });

    scrollQuote();

    // ------------------jump to section of page slowly using navone links---------------------------
    //jQuery finds links in HTML document and fires event to slowdown speed that it takes for page to jump to section.
    $('.navone a').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top //hey, jQuery find this attribute link and tells it to 
        }, 500); //go this speed
    });
});

// ----------Scrolling Quotes--------------
/*referenced online website to give the Testimonails section functionality*/

function scrollQuote() { //this function declares the scrolling feature in Testimonials section

    var $quotesWrapper = $(".cust-quotes"); //variable is asking jQuery to locate .cust-quotes class and storing it
    var $quotes = $quotesWrapper.find("blockquote"); //variable takes the stored variable $quotesWrapper and finds the element blockquote

    if (!$quotes.length) { //if statement finds instance of an element with blockquote 
        return;
    }

    var selectNextQuote = function() { // finds next instance of quote 

        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);

        setTimeout(selectNextQuote, $quote.data("timeout")); //tells the page to slow its roll when navigating to section
    };

    setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

}
