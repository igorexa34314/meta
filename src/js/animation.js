
export function Animation() {
	// Function Animation on scroll
	function AnimateItem(animWrapper) {
		let animItems;
		if ($(animWrapper).hasClass('animation-item')) {
			animItems = animWrapper;
		}
		else {
			animItems = $(animWrapper).find('.animation-item');
		}
		if (animItems) {
			$(animItems).each(function (index, animItem) {
				$(animItem).removeClass('_active');
				var observer = new IntersectionObserver(entries => {
					$(entries).each(function (index, entry) {
						if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
							return;
						}
						if (entry.isIntersecting) {
							$(animItem).addClass('_active');
							return;
						}
						$(animItem).removeClass('_active');
					});
				})
				observer.observe(animWrapper);
			});
		}
	};

	// Animate items
	const animStatsWrappers = $('.animation-wrapper');
	if (animStatsWrappers.length > 0) {
		$(animStatsWrappers).each(function (index, animStatsWrapper) {
			AnimateItem(animStatsWrapper);
		});
	}
}
