import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import Unfonts from 'unplugin-fonts/vite';

const UnfontsConfig: Parameters<typeof Unfonts>[0] = {
	custom: {
		families: [
			{
				name: 'Inter',
				local: 'Inter',
				src: './src/assets/static/fonts/Inter/*.woff2',
				transform(font) {
					if (font.basename === 'Inter-400') font.weight = 400;
					else if (font.basename === 'Inter-500') font.weight = 500;
					else if (font.basename === 'Inter-600') font.weight = 600;
					else if (font.basename === 'Inter-700') font.weight = 700;

					return font;
				},
			},
		],
		display: 'auto',
		preload: true,
		prefetch: false,
		injectTo: 'head-prepend',
	},
};

export default defineConfig({
	plugins: [react(), svgr(), tsconfigPaths(), Unfonts(UnfontsConfig)],
	base: '',
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
});
