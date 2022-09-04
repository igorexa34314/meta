
// menu-burger
export function burger() {
	const menuBurger = $('.burger-menu');

	if (menuBurger) {
		$(menuBurger).click(function () {
			$('body').toggleClass('_lock');
			$('.menu__body').toggleClass('_active');
			$(menuBurger).toggleClass('_active');
		});

		$('.menu__link').each(function (index, menuLink) {
			$(menuLink).click(function (e) {
				$('body').removeClass('_lock');
				$('.menu__body').removeClass('_active');
				$(menuBurger).removeClass('_active');
			});
		});
		$(window).resize(function () {
			if ($(window).width() <= 480) {
				// Перемещаем соц сети к бургер меню
				$('.header__socials').detach().appendTo('.menu__body');
			}
			else {
				$('.header__socials').detach().appendTo('.header__container');
			}
		});
	}
}
