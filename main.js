$(function() {
    //nav anchors
    $('a').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1200);
        return false;
    });

    //contactForm
    var inputBox = $('.inputBox');

    $('#submitButt').on('click', clear);

    function checkForm() {
        for (var i = 0; i < inputBox.length; i++) {
            if (!inputBox[i].value) {
                $(inputBox[i]).addClass('error');
                $(inputBox[i]).siblings().show();
            }
        }
    }

    function clear(event) {
        event.preventDefault();
        for (var i = 0; i < inputBox.length; i++) {
            $(inputBox[i]).removeClass('error');
            $('.errorMsg').hide();
            checkForm();
        }
    }
    //highlight nav <a>'s
    $('section').mouseenter(function() { $('nav a[href="#' + $(this).attr('id') + '"]').addClass('active'); });
    $('section').mouseleave(function() { $('nav a[href="#' + $(this).attr('id') + '"]').removeClass('active'); });
    //end of JS

});
