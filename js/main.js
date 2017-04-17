//*************SLIDER/CAROUSEL********************************//
$(document).ready(function() {
    $(".slider").slick({ //used slick to create carousel - used lazy slider.  gave each img id name data-lazy and deleted src per instructions//
        dots: true
    });

    //Click on Navigation Bar Links to a certain section. Create click function on nav tag//
    $("nav a").click(function(e) {
        var btnId = "section" + this.id; //create a button variable to call the section.  give each section an id name to call it//

        $('html, body').animate({ //add a animate timer to scroll up to the top.
            scrollTop: $("#" + btnId).offset().top //added div #top to body so that section will float to the top.
        }, 1000);
    });


    // //give images a class and call it with a click function//
    // $(".img1").click(function() {
    //         $src = $(this).attr("src"); //call the attribute//
    //         if (!$(i = 0;
    //                 "#light-box".length > 0; i++) { //if there is no lightbox- then create an attribute lightbox//
    //                 $("#light-box").show(); //make element visible by adding show effect//
    //                 $("#light-box img").attr("src", $src);

    //             } else { //else if the attribute does exist, then show//
    //                 $("#light-box").show();
    //                 $("#light-box img").attr("src", $src);
    //             }
    //         });




});
