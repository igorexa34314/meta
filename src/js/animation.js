
// Function Animation on scroll
function AnimateItems(animWrapper) {
	var animItems;
	if ($(animItems).hasClass('animation-item')) {
		animItems = animWrapper;
	}
	else {
		animItems = $(animWrapper).find('.animation-item');
	}
	if (animItems.length > 0) {
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
}

// Animate items
const animStatsWrappers = $('.');
if (animStatsWrappers.length > 0) {
	$(animStatsWrappers).each(function (index, animStatsWrapper) {
		AnimateItems(animStatsWrapper);
	});
}
