import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { SITE_URL, SITE_BASE } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: SITE_BASE || '/',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "src/styles/global.scss" as *;`,
				},
			},
		},
	},
});
