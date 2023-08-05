import { defineConfig } from 'astro/config';
import { imagetools } from 'vite-imagetools';
import lqip from 'vite-plugin-lqip';

export default defineConfig({
	site: 'https://brookschambers.com',
	vite: {
		plugins: [
			lqip(),
			imagetools({
				include: /^[^?]+\.(heic|heif|avif|jpeg|jpg|png|tiff|webp)(\?.*)?$/, // default, minus .gif
			}),
		],
	},
});
