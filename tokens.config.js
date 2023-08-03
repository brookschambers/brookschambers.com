import pluginSass from '@cobalt-ui/plugin-sass';

/** @type import('@cobalt-ui/core').Config */
export default {
	tokens: './tokens.yaml',
	outDir: './src/tokens/',
	plugins: [
		pluginSass({
			cssVars: true,
			pluginCSS: {},
		}),
	],
};
