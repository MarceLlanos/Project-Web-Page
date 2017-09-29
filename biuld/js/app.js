"use strict";
var App = {};

$(function() {
	App.init();
});

App = {
	init : function(){
		this.imgToBackground();
		this.imgToBackgroundExpand();
		// this.carousel();
		this.tabs();
		this.tabsB();
		this.tabsC();
		this.boleta();
		this.netbilling();
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
	imgToBackground : function(){
		$('.elem-bg').each(function(index, el) {
			var srcImg = $(el).find('.img-to-bg').attr('src');
			$(el).css('background-image','url('+ srcImg +')');
		});
	},
	imgToBackgroundExpand : function(){
		var This = this;
		$('.background-image-expand').each(function(index, el) {
			var $bg = $(el).find('.background-image-expand_bg'),
					srcImg = String($(el).find('.img-to-bg').attr('src'));
			$bg.css({"background-image": "url("+ srcImg +")"});
			This.setElementWidth(el);
			This.onResize(function(){
				This.setElementWidth(el);
			});
		});
	},
	setElementWidth : function(el){
		var $bg = $(el).find('.background-image-expand_bg'),
				container = $('.container').outerWidth(),
				windowWidth = $(window).outerWidth(),
				expand = windowWidth-container,
				expandOneSide = expand/2,
				width = $(el).outerWidth(),
				widthBg = expand + width,
				widthBgOneSide = expandOneSide + width;

		$bg.css({'width': widthBgOneSide, 'margin-right':0, 'margin-left':0});
		if($(window).outerWidth() < 992){
			if($bg.hasClass('background-image-expand_bg--left'))
				$bg.css({'margin-right': -expandOneSide, 'width': widthBg});
			if($bg.hasClass('background-image-expand_bg--right'))
				$bg.css({'margin-left': -expandOneSide, 'width': widthBg});
		}
	},
	onResize : function(callback){
		$(window).on('resize', function(){
			callback();
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
	tabsB : function() {
		$('.feature').find(".feature_link").each(function(index, elem){
			$(elem).on('click', function(e){
				console.log("click");
				e.preventDefault();
				var tab = $(this).attr("href");
				$(".feature").find("a").removeClass("active");
				$(this).addClass("active");
				$(".feature-tab-content").removeClass("active");
				console.log(tab);
				$(tab).addClass("active");
			});
		});
	},
	tabsC : function() {
		$('.articles-tab').each(function(index, elem){
			$(elem).attr('data-tg1');
			console.log(elem);
			$(elem).find('.article-tabs').each(function(index, elem){
				console.log(elem);
				var linkTab = $(elem).find('.article-tabs_link');
				$(linkTab).on('click', function(e){
					e.preventDefault();
					var tab = $(this).attr("href");
					console.log(tab);
					$(".article-tabs").removeClass("active");
					$(elem).addClass("active");
					$(".box-container").removeClass("active");
					$(tab).addClass("active");
				});
			});
		});
	},

	boleta : function() {
		$('.ticket_figure').each(function(index, elem){
			$(elem).find('.ticket_link').each(function(index, elem){
				console.log(elem);
				$(elem).on('click', function(e){
					e.preventDefault();
					var button = $(this).attr("href");
					console.log(button);
					$(".ticket_figure").removeClass("active");
					$(elem).addClass("active");
					$(".ticket_clicked").removeClass("active");
					$(button).addClass("active");
				});
			});
		});
	},

	netbilling : function() {
		$('.list-steps').each(function(index, elem){
			$(elem).find('.link.article_text').each(function(index, elem){
				console.log(elem);
				$(elem).on('click', function(e){
					e.preventDefault();
					var button = $(this).attr("href");
					console.log(button);
					$(".list-steps").removeClass("active");
					$(elem).addClass("active");
					$(".box").removeClass("active");
					$(button).addClass("active");
				});
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