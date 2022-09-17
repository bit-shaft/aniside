module.exports = function (plop) {
	// controller generator
	plop.setGenerator('component', {
		description: 'application component logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name please',
			},
			{
				type: 'input',
				name: 'path',
				message: 'path to component (after /src/components/)',
			},
			{
				type: 'input',
				name: 'element',
				message: 'HTML base element',
			},
		],
		actions: [
			{
				type: 'add',
				path: './src/{{path}}/{{ name }}/index.tsx',
				templateFile: 'generators/components/index.tsx.hbs',
			},
			{
				type: 'add',
				path: './src/{{path}}/{{ name }}/styles.ts',
				templateFile: 'generators/components/styles.ts.hbs',
			},
			{
				type: 'add',
				path: './src/{{path}}/{{ name }}/types.ts',
				templateFile: 'generators/components/types.ts.hbs',
			},
			{
				type: 'add',
				path: './src/{{path}}/{{ name }}/main.stories.tsx',
				templateFile: 'generators/components/index.stories.tsx.hbs',
			},
			{
				type: 'append',
				path: './src/{{path}}/index.ts',
				pattern: '/* ------------------ component exports ----------------- */',
				template: 'export * from \'./{{name}}\'',
			},
		],
	})
}
