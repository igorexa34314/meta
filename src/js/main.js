import * as myFunctions from "./modules/functions.js";
import { burger } from "./burger.js";
//import { initSwiper } from "./init-swiper.js";
//import { popup } from "./popup.js";
//import { spoiler } from "./spoiler.js";
// import { InitTabs } from "./tabs.js";

myFunctions.isWebp();

// Перенапраправление на главную при нажатии на лого
$('.logo').click(function () {
	location.href = "index.html";
});

$(document).ready(function () {
	burger();
	//initSwiper();
	//popup();
	//spoiler();
	// InitTabs($('.blog-page__container'));
});