import Swiper, { Pagination, Autoplay, EffectCoverflow } from 'swiper';

export function InitSwiper() {
	var mySwiper = new Swiper(".swiper", {
		loop: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			scale: 0.5,
			depth: 0,
			modifier: 1,
			slideShadows: true,
		},
		spaceBetween: 0,
		speed: 1500,
		grabCursor: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		centeredSlides: true,
		slidesPerView: 3,
		initialSlide: 1,
		keyboardControl: true,
		mousewheelControl: true,
		watchSlidesProgress: true,
		autoheight: true,
		modules: [Pagination, Autoplay, EffectCoverflow],
		pagination: {
			el: ".swiper-pagination",
		},
	});
	const breakpoint = window.matchMedia('(max-width:980px)');

	function handleTabletChange() {
		if (breakpoint.matches) {
			mySwiper.disable();
		}
		else mySwiper.enable();
	}
	breakpoint.addListener(handleTabletChange);
	handleTabletChange(breakpoint);
}
