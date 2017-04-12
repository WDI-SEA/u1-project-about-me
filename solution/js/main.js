$(function() {
    console.log("jQuery loaded");
    // debugger;

    // $("#projects").click(function (){
    //                 $('html, body').animate({
    //                     scrollTop: $("#div1").offset().top
    //                 }, 2000);
    //             });

    // add smooth scrolling to the nav's anchors
    $("nav").on('click', 'a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    // add highlighting menu item when scrolling to each section
    // $(window).scroll(function() {
            //     var position = $(this).scrollTop();

            //     $('.section').each(function() {
            //         var target = $(this).offset().top;
            //         var id = $(this).attr('id');

            //         if (position >= target) {
            //             $('#navigation > ul > li > a').removeClass('active');
            //             $('#navigation > ul > li > a[href=#' + id + ']').addClass('active');
            //         }

            //     });
            // });

});
