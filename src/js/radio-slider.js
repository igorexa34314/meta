// Radio slider
jQuery(($) => {
	$('#value1').toggleClass('_active');
	const switchRadio = $('#radio-switch');
	$(switchRadio).change(function (e) {
		$('#value1').toggleClass('_active');
		$('#value2').toggleClass('_active');
	});
});