"use strict";
var App = {};

$(function() {
    App.init();
});

App = {
    init: function() {
        this.imgToBackground();
        this.imgToBackgroundExpand();
        // this.carousel();
        this.tabs();
    },
    menu: function() {
        var $menuButtons = $(".menu-main"),
            $siteNav = $(".site-nav"),
            $body = $("body");
        $menuButtons.on("click", function() {
            $siteNav.toggleClass("active");
            $body.toggleClass("menu-open-mobile");
        });
    },
    imgToBackground: function() {
        $('.elem-bg').each(function(index, el) {
            var srcImg = $(el).find('.img-to-bg').attr('src');
            $(el).css('background-image', 'url(' + srcImg + ')');
        });
    },
    imgToBackgroundExpand: function() {
        var This = this;
        $('.background-image-expand').each(function(index, el) {
            var $bg = $(el).find('.background-image-expand_bg'),
                srcImg = String($(el).find('.img-to-bg').attr('src'));
            $bg.css({ "background-image": "url(" + srcImg + ")" });
            This.setElementWidth(el);
            This.onResize(function() {
                This.setElementWidth(el);
            });
        });
    },
    setElementWidth: function(el) {
        var $bg = $(el).find('.background-image-expand_bg'),
            container = $('.container').outerWidth(),
            windowWidth = $(window).outerWidth(),
            expand = windowWidth - container,
            expandOneSide = expand / 2,
            width = $(el).outerWidth(),
            widthBg = expand + width,
            widthBgOneSide = expandOneSide + width;

        $bg.css({ 'width': widthBgOneSide, 'margin-right': 0, 'margin-left': 0 });
        if ($(window).outerWidth() < 992) {
            if ($bg.hasClass('background-image-expand_bg--left'))
                $bg.css({ 'margin-right': -expandOneSide, 'width': widthBg });
            if ($bg.hasClass('background-image-expand_bg--right'))
                $bg.css({ 'margin-left': -expandOneSide, 'width': widthBg });
        }
    },
    onResize: function(callback) {
        $(window).on('resize', function() {
            callback();
        });
    },
    scroller: function() {
        $(".nano").nanoScroller({
            alwaysVisible: true
        });
    },
    tabs: function() {
        $('ul.tabs').find(".tab").each(function(index, elem) {
            $(elem).find('a').on('click', function(e) {
                e.preventDefault();
                var tab = $(this).attr("href");
                $("ul.tabs").find("a").removeClass("active");
                $(this).addClass("active");
                $(".tab-content").removeClass("active");
                $(tab).addClass("active");
            });
        });
    },
    carousel: function() {
        $('.hero-new').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            responsive: [{
                    breakpoint: 979,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    },
};