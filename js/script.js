/*jslint browser: true*/
/*global $, jQuery, alert*/

//Smooth Scroll function
$(document).ready(function () {
    'use strict';
    //Calculate the Height of navbar
    var outerHeight = $("nav").outerHeight();
    $('.Scroll-items, #scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - outerHeight
                }, 1000);
                return false;
            }
        }
    });
});
//Add active class to click menu item
$(document).ready(function () {
    'use strict';
    $(".nav li a").click(function () {
        $(".nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});
//Highlight menu item on scroll
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        $("section, header").each(function () {
            // Grab the id of that section eg: About, Contact
            var sectioId = $(this).attr("id");
            //Grab the height of that section
            var heightOfSec = $(this).outerHeight();
            //Grab the height from top minus height of navbar
            var heightFromTop = $(this).offset().top - 52;
            if ($(window).scrollTop() > heightFromTop && $(window).scrollTop() < heightFromTop + heightOfSec) {
                $(".nav li a").parent().removeClass("active");
                $(".nav li a[href='#" + sectioId + "']").parent().addClass("active");
            }
        });
    });
});
