/*jslint browser: true*/
/*global $, jQuery, alert*/

//Toggle Menu Items
$(document).ready(function(){
    $("nav .nav-toggle").click( function(){
        $(".nav-list").slideToggle(600);
    });
});

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
    $(".nav-list li a").click(function () {
        $(".nav-list li a").parent().removeClass("active");
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
                $(".nav-list li a").parent().removeClass("active");
                $(".nav-list li a[href='#" + sectioId + "']").parent().addClass("active");
            }
        });
    });
});

//Change Nav Bar color on scroll
$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
        if($(document).scrollTop() > 100){
            $("header nav").css("background-color", "rgba(0, 0, 0, .5)");
        }else{
            $("header nav").css("background-color", "transparent");
        }
    });
});
