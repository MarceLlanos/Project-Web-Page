"use strict";
var App = {};

$(function() {
    App.init();
});

App = {
    init : function(){
        this.imgToBaground();
        this.carousel();
        this.tabs();
    },
    menu : function(){
        var $menuButtons = $( ".menu-trigger" ),
                $siteNav = $( ".site-nav" ),
                $body = $( "body" );
        $menuButtons.on( "click", function(){
            $siteNav.toggleClass( "active" );
            $body.toggleClass( "menu-open-mobile" );
    });
    },
    imgToBaground : function(){
        $('.elem-bg').each(function(index, el) {
            var srcImg = $(el).find('.img-to-bg').attr('src');
            $(el).css('background-image','url('+ srcImg +')');
        });
    },
    scroller : function(){
        $(".nano").nanoScroller({
            alwaysVisible: true
        });
    },
    tabs : function() {
        $('ul.tabs').find(".tab").each(function(index, elem){
            $(elem).find('a').on('click', function(e){
                e.preventDefault();
                var tab = $(this).attr("href");
                $("ul.tabs").find("a").removeClass("active");
                $(this).addClass("active");
                $(".tab-content").removeClass("active");
                $(tab).addClass("active");
            });
        });
    },
    carousel : function () {
        $('.hero-new').slick({
          dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            responsive: [
                {
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