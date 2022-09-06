export function Counter(items) {
	$(items).each(function (index, element) {
		$(element).text(index + 1);
	});
}