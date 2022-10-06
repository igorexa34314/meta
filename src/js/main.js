import aos from 'aos';

import * as myFunctions from "./modules/functions.js";
import { DynamicAdapt } from "./modules/dynamic-adapt.js";

import { burger } from "./burger.js";
import { SetMarquee } from "./marquee.js";
import { Pagination } from "./pagination.js";
import { Counter } from './counter.js';
import { InitSwiper } from './swiper.js';


// Проверка на поддержку Webp 
myFunctions.isWebp();


$(document).ready(function () {
	// Меню бургер
	burger();

	// Hero swiper
	InitSwiper();

	// Бегущая строка
	SetMarquee();

	// Перемещениие соц сетей в бургер
	const da = new DynamicAdapt("max");
	da.init();

	// Переливстывание вкладок в секции "History"
	Pagination('.story-navbar__link', '.story-item');

	// Счетчик 
	Counter('.roadmap-item__count');
	Counter('.roadmap-item__subtitle');

	aos.init({
		disable: window.innerWidth < 980,
		startEvent: 'DOMContentLoaded',
		mirror: true,
		duration: 500,
		easing: 'ease-in',
	});

});