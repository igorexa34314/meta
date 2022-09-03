
// Spoiler Jquery
export function spoiler() {
	const more = $('.more');
	const lessTxt = "Скрыть";
	if (more.length > 0) {
		const servicesItems = $('.services__item');
		const whymeItems = $('.why-we__item');
		const specialistsItems = $('.specialists__item');
		function CheckRezolution(SpoilItem, rez1, rez2) {
			if (SpoilItem.length > 4) {
				if ($(window).width() < rez1) {
					if ($(window).width() < rez2) {
						for (let i = 2; i < SpoilItem.length; i++) {
							$(SpoilItem[i]).addClass('spoiler');
						}
					}
					else {
						for (let i = 4; i < SpoilItem.length; i++) {
							$(SpoilItem[i]).addClass('spoiler');
						}
					}
					$(SpoilItem).each(function (index, element) {
						if ($(element).hasClass('spoiler')) {
							$(element).hide();
						}
					});
				}
				else {
					$(SpoilItem).each(function (index, element) {
						$(element).removeClass('spoiler');
						$(element).show();
					});
				}
			}
		}
		// $(window).resize(CheckRezolution());
		CheckRezolution(servicesItems, 980, 640);
		CheckRezolution(whymeItems, 1280, 760);
		CheckRezolution(specialistsItems, 760, 760);
		$(more).each(function (index, el) {
			var moreTxt;
			$(el).click(function (e) {
				const spoilItem = $(this).toggleClass('_active').parent().parent().find('.spoiler').toggleClass('_hidden');
				if (!($(spoilItem).hasClass('slider'))) {
					$(spoilItem).slideToggle(300);
				}
				if ($(this).children().text() != lessTxt) {
					moreTxt = $(el).children().text();
					$(this).children().text(lessTxt);
				}
				else {
					$(this).children().text(moreTxt);
				}
			});
		});
	}
}
