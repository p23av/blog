$(function() {
//	header-search-form
	$('.header-search').on('click', '.header-search-label', function () {
		$(this).addClass('label-close');
		$('.header-search-wrapper').addClass('search-wrapper-active');
		$('.header-search-input').focus()
	});
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.header-search-label').removeClass('label-close');
			$('.header-search-wrapper').removeClass('search-wrapper-active');
		}
	});
	$(document).mouseup(function (e) {
		var cart = $('.header-search');
		if (cart.has(e.target).length === 0) {
			$('.header-search-label').removeClass('label-close');
			$('.header-search-wrapper').removeClass('search-wrapper-active');
		}
	});
//	end
//	owl-carousel
	$(document).ready(function () {
		$('.owl-carousel-hero').owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			mouseDrag: false,
			navText: ['', ''],
			animateIn: "fadeIn",
			animateOut: "fadeOut",
		});
		$('.recomended-owl').owlCarousel({
			loop: true,
			items: 3,
			nav: true,
			margin: 30,
			navText: ['', ''],
			dots: false,
			// animateIn: "fadeIn",
			// animateOut: "fadeOut",
		});
		$('.aside-owl-carousel').owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			margin: 0,
			dots: false,
			navText: ['', ''],
			// animateIn: "fadeIn",
			// animateOut: "fadeOut",
		});
	});
//	end
//	header-nav
	$(document).on('click', '.menu-button', function () {
		$('.header-navbar-menu').toggleClass('move-right');
		$('.black-box').addClass('active');
	});
	$(document).on('click', '.black-box.active', function () {
		$('.header-navbar-menu').removeClass('move-right');
		$('.black-box').removeClass('active');
	});
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.header-navbar-menu').removeClass('move-right');
			$('.black-box').removeClass('active');
		}
	});
	$(document).mouseup(function (e) {
		var cart = $('.header-navbar-menu-ul');
		if (cart.has(e.target).length === 0) {
			$('.header-navbar-menu').removeClass('move-right');
			$('.black-box').removeClass('active');
		}
	});
//	end
});
