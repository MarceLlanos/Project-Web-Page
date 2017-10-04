"use strict";

var App = {};

$(function() {
    App.init();
}), App = {
    init: function() {
        this.imgToBackground(), this.imgToBackgroundExpand(), this.tabs();
    },
    menu: function() {
        var n = $(".menu-main"), i = $(".site-nav"), t = $("body");
        n.on("click", function() {
            i.toggleClass("active"), t.toggleClass("menu-open-mobile");
        });
    },
    imgToBackground: function() {
        $(".elem-bg").each(function(n, i) {
            var t = $(i).find(".img-to-bg").attr("src");
            $(i).css("background-image", "url(" + t + ")");
        });
    },
    imgToBackgroundExpand: function() {
        var n = this;
        $(".background-image-expand").each(function(i, t) {
            var e = $(t).find(".background-image-expand_bg"), a = String($(t).find(".img-to-bg").attr("src"));
            e.css({
                "background-image": "url(" + a + ")"
            }), n.setElementWidth(t), n.onResize(function() {
                n.setElementWidth(t);
            });
        });
    },
    setElementWidth: function(n) {
        var i = $(n).find(".background-image-expand_bg"), t = $(".container").outerWidth(), e = $(window).outerWidth() - t, a = e / 2, o = $(n).outerWidth(), s = e + o, r = a + o;
        i.css({
            width: r,
            "margin-right": 0,
            "margin-left": 0
        }), $(window).outerWidth() < 992 && (i.hasClass("background-image-expand_bg--left") && i.css({
            "margin-right": -a,
            width: s
        }), i.hasClass("background-image-expand_bg--right") && i.css({
            "margin-left": -a,
            width: s
        }));
    },
    onResize: function(n) {
        $(window).on("resize", function() {
            n();
        });
    },
    scroller: function() {
        $(".nano").nanoScroller({
            alwaysVisible: !0
        });
    },
    tabs: function() {
        $("ul.tabs").find(".tab").each(function(n, i) {
            $(i).find("a").on("click", function(n) {
                n.preventDefault();
                var i = $(this).attr("href");
                $("ul.tabs").find("a").removeClass("active"), $(this).addClass("active"), $(".tab-content").removeClass("active"), 
                $(i).addClass("active");
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
//# sourceMappingURL=app.js.map