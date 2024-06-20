var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5.58,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    loopedSlides: 4,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2.3,
        },
        600: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 15,
        },
        479: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
        },
    }
});
$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        }, 800);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});
$(function() {
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#static").toggleClass("static");
    });
});
jQuery(window).on('load', function() {
    'use strict';
    jQuery('#loader').css('opacity', 0);
    setTimeout(function() {
        jQuery('#loader').hide();
    }, 350);
});