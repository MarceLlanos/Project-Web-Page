"use strict";

var App = {};

$(function() {
    App.init();
}), App = {
    init: function() {
        this.imgToBaground(), this.carousel(), this.tabs();
    },
    menu: function() {
        var i = $(".menu-trigger"), t = $(".site-nav"), n = $("body");
        i.on("click", function() {
            t.toggleClass("active"), n.toggleClass("menu-open-mobile");
        });
    },
    imgToBaground: function() {
        $(".elem-bg").each(function(i, t) {
            var n = $(t).find(".img-to-bg").attr("src");
            $(t).css("background-image", "url(" + n + ")");
        });
    },
    scroller: function() {
        $(".nano").nanoScroller({
            alwaysVisible: !0
        });
    },
    tabs: function() {
        $("ul.tabs").find(".tab").each(function(i, t) {
            $(t).find("a").on("click", function(i) {
                i.preventDefault();
                var t = $(this).attr("href");
                $("ul.tabs").find("a").removeClass("active"), $(this).addClass("active"), $(".tab-content").removeClass("active"), 
                $(t).addClass("active");
            });
        });
    },
    carousel: function() {
        $(".hero-new").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: !0,
            responsive: [ {
                breakpoint: 979,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    arrows: !1
                }
            } ]
        });
    }
};