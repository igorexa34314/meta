import fs from 'fs';
import glob from 'glob';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
	// Ищем файлы шрифтов .otf
	return app.gulp.src(`${app.path.srcFolder}/fonts/**/*.otf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		// Конвертируем в .ttf
		.pipe(fonter({
			formats: ['ttf']
		}))
		// Выгружаем в исходную папку
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
	// Ищем файлы шрифтов .ttf
	return app.gulp.src(`${app.path.srcFolder}/fonts/**/*.ttf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.gulp.dest(app.path.build.fonts))
		// Конвертируем в .woff
		.pipe(fonter({
			formats: ['woff']
		}))
		// Выгружаем в папку с результатом
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		// Ищем файлы шрифтов .ttf
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/**/*.ttf`))
		// Конвертируем в .woff2
		.pipe(ttf2woff2())
		// Выгружаем в папку с результатом
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		// Ищем файлы шрифтов .woff и woff2
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/**/*.{woff,woff2}`))
		// Выгружаем в папку с результатом
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
}
export const fontsStyle = () => {
	// Файл стилей подключения шрифтов
	let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
	// Проверяем существуют ли файлы шрифтов
	glob(`${app.path.build.fonts}**/*.woff2`, function (err, fontsFiles) {
		if (err) {
			throw new Error(err);
		}
		if (fontsFiles) {
			// Проверяем существует ли файл стилей для подключения шрифтов
			if (!fs.existsSync(fontsFile)) {
				// Если файла нет, создаем его
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					// Записываем подключения шрифтов в файл стилей
					let pathfolder = fontsFiles[i].split('/');
					let folderName = pathfolder[(pathfolder.length - 1) - 1];
					let fontFileName = fontsFiles[i].replace(/^.*[\\\/]/, '').split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
						if (fontWeight.toLowerCase().includes('thin')) {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase().includes('extralight')) {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase().includes('light')) {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase().includes('regular')) {
							fontWeight = 400;
						} else if (fontWeight.toLowerCase().includes('medium')) {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase().includes('semibold')) {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase().includes('bold')) {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase().includes('extrabold') || fontWeight.toLowerCase().includes('heavy')) {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase().includes('black')) {
							fontWeight = 900;
						} else {
							fontWeight = 'normal';
						}
						fs.appendFile(fontsFile, `@font-face {\n\tfont-family: '${fontName}';\n\tfont-display: swap;\n\tsrc: url("../fonts/${folderName}/${fontFileName}.woff2") format("woff2"), url("../fonts/${folderName}/${fontFileName}.woff") format("woff"), url("../fonts/${folderName}/${fontFileName}.ttf") format("truetype");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				// Если файл есть, выводим сообщение
				console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!");
			}
		}
	});

	return app.gulp.src(`${app.path.srcFolder}`);
	function cb() { }
}