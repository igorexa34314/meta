
export function Pagination(link, item) {
	$(link).each(function (index, link) {
		$(link).click(function (e) {
			$('.story-navbar__link').removeClass('_active');
			$(link).addClass('_active');
			$(item).removeClass('_active');
			const storyItem = $(item)[index];
			$(storyItem).addClass('_active');
		});
	});
}
