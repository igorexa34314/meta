
// Init slider
$(document).ready(function () {
	var myStaffSwiper = new Swiper('#staff-swiper', {
		loop: true, // опция режима петли
		// Если нужен пейдж
		// Если вам нужно двигаться вперед и назад
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},

		// // Если вам нужна полоса прокрутки
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
		slidesPerView: 6,
		slidesPerGroup: 3,
		spaceBetween: 30,
		autoplay: {
			delay: 3000,
		}, // необязательный параметр, автоматический слайд

		initialSlide: 0, // Индекс, начиная с 0 по умолчанию, задайте количество слайдов, с которого нужно начать (установить индекс слайда во время инициализации)

		direction: 'horizontal', // Направление скольжения слайдов, можно установить горизонтальное (горизонтальное) или вертикальное (вертикальное), по умолчанию горизонтальное.

		speed: 600, // Скорость переключения, то есть время (в мс), когда ползунок автоматически скользит до конца, также является временем, которое нужно отпустить, чтобы соответствовать при касании слайда.

		grabCursor: true, // Если установлено значение true, указатель изменится на форму ладони, когда мышь накрывает Swiper, а указатель изменится на форму ручки при перетаскивании. (Зависит от формы браузера)
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			540: {
				slidesPerView: 2,
			},
			760: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
				slidesPerGroup: 2,
			},
			1280: {
				slidesPerView: 5,
			},
			1490: {
				slidesPerView: 6,
			},
		},
	})

	var myHeroSwiper = new Swiper('#hero-swiper', {
		loop: true, // опция режима петли
		// Если нужен пейдж
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// dinamicBullets: true,
			renderBullet: function (index, classname) {
				return '<div class = "' + classname + '">' + (index + 1) + '</div>';
			}
		},



		// // Если вам нужна полоса прокрутки
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 60,
		autoplay: {
			delay: 6000,
			disableOnInteraction: false,
		}, // необязательный параметр, автоматический слайд
		autoHeight: true,
		initialSlide: 0, // Индекс, начиная с 0 по умолчанию, задайте количество слайдов, с которого нужно начать (установить индекс слайда во время инициализации)

		direction: 'horizontal', // Направление скольжения слайдов, можно установить горизонтальное (горизонтальное) или вертикальное (вертикальное), по умолчанию горизонтальное.

		speed: 700, // Скорость переключения, то есть время (в мс), когда ползунок автоматически скользит до конца, также является временем, которое нужно отпустить, чтобы соответствовать при касании слайда.

		grabCursor: true, // Если установлено значение true, указатель изменится на форму ладони, когда мышь накрывает Swiper, а указатель изменится на форму ручки при перетаскивании. (Зависит от формы браузера)

	})




	// const moreBtn = $('.our-staff').find('.more');
	// $(moreBtn).click(function (e) {
	// 	mySwiper.params.init = false;
	// 	mySwiper.init();

	// });


}); 