import * as myFunctions from "./modules/functions.js";
import { burger } from "./burger.js";
import { SetMarquee } from "./marquee.js";
import { Pagination } from "./pagination.js";
import { Counter } from './counter.js';
import { Animation } from './animation.js';
//import { spoiler } from "./spoiler.js";

// Проверка на поддержку Webp 
myFunctions.isWebp();

// Перенапраправление на главную при нажатии на лого
$('.logo').click(function () {
	location.href = "index.html";
});

$(document).ready(function () {
	// Меню бургер
	burger();

	// Бегущая строка
	SetMarquee();

	// Переливстывание вкладок в секции "History"
	Pagination('.story-navbar__link', '.story-item');

	Counter('.roadmap-item__count');
	Counter('.roadmap-item__subtitle');

	// Анимация контента
	Animation();

	// Спойлер
	//spoiler();
});