
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //Menu
        $(".mobile_menu").click(function () {
            $("#menu").slideToggle(400);

        });
       

        // $('.insta_header').prependTo('.sbi_item.sbi_type_image:first-child');
        jQuery(window).resize(function () {
            var screenwidth = jQuery(window).width();
            if (screenwidth > 991) {
                jQuery("#menuArea").removeAttr("style");
            }
        });


        //       scroll_top   
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
                $('.header_area').addClass('stiky');
            } else {
                $('#toTop').fadeOut();
                $('.header_area').removeClass('stiky');
            }
        });

        $("#toTop").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });



    });


}(jQuery));