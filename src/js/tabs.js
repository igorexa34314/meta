export function InitTabs(wrapper) {
	const tabs = $(wrapper).find('.tab');
	const paginations = $(wrapper).find('.tab-pagination');

	if (tabs && paginations) {
		$(paginations).each(function (pIndex, pagination) {
			$(pagination).append('<ol></ol>');
			$(tabs).each(function (tIndex, tab) {
				$(pagination).children().first().append('<li>' + (tIndex + 1) + '</li>');
			});
		});
		for (var pIndex = 0; pIndex < paginations.lenght; pIndex++) {
			const pageNums = $(paginations).children().first().children();
			console.log(pageNums);
			for (var tIndex = 0; tIndex < tabs.lenght; tIndex++) {

			}
		}


	}
}
