export function popup() {
	$('#select-city-btn').magnificPopup({
		type: 'inline',

		// Fixed position will be used
		fixContentPos: true,

		// Since disabled, Magnific Popup
		// will not put close button
		// inside content of popup
		closeBtnInside: false,
		preloader: false,

		// Delay in milliseconds before
		// popup is removed
		removalDelay: 160,

		// // Class that is added to
		// // popup wrapper and background
		// mainClass: 'select-city'
		closeBtnInside: true,
		midClick: true,
	});


	let cities = $("input[name='cities']");
	$(cities).each(function (index, city) {
		$(city).click(function (e) {
			const cityTxt = $(`[for="${$(city).attr('id')}"]`).children().text();
			$('.header__location').find('.ic-location').text(cityTxt);
			$.magnificPopup.close();
		});
	});

	// ===========================================================================================
	$('.registration__item').each(function (index, element) {
		$(element).magnificPopup({
			type: 'inline',

			// Fixed position will be used
			fixContentPos: true,

			// Since disabled, Magnific Popup
			// will not put close button
			// inside content of popup
			closeBtnInside: false,
			preloader: false,

			// Delay in milliseconds before
			// popup is removed
			removalDelay: 160,

			// // Class that is added to
			// // popup wrapper and background
			// mainClass: 'select-city'
			closeBtnInside: true,
			midClick: true,
		});
	});
	$('.skip').each(function (index, element) {
		$(element).click(function (e) {
			$.magnificPopup.close();
		});
	});

	// ================================================================================================
	$('#about-us').click(function (e) {
		$('.about-menu').toggleClass('_active');
	});
}
