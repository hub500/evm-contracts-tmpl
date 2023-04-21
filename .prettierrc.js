// https://segmentfault.com/a/1190000012909159
module.exports = {
	useTabs: true,
	singleQuote: true,
	printWidth: 120,
	bracketSpacing: true,
	semi: true,
	alwaysParens: "always",
	overrides: [
		{
			files: '*.sol',
			options: {
				printWidth: 120,
				singleQuote: false,
				explicitTypes: 'always',
				parser: 'solidity-parse',
			},
		},
	],
	plugins: [require('prettier-plugin-solidity')],
};
