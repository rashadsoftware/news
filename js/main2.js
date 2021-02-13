// aos
AOS.init();

$(function () {
	// owl carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		margin: 10,
		dots: false,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			777: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});
});
