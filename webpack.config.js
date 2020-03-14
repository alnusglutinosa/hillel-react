const path = require('path');
const autoprefixer = require('autoprefixer'); 

module.exports = {
	entry: './dev/index.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			
			{
				test: /\.css$/, 
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]",
							sourceMap: true
						},
					},
					{
						loader: require.resolve('postcss-loader'),
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-flexbugs-fixes'),
								autoprefixer({
									browsers: [
										'>1%',
										'last 4 versions',
										'Firefox ESR',
										'not ie < 9', // React doesn't support IE8 anyway
									],
									flexbox: 'no-2009',
								}),
								require('postcss-modules-values'),
							],
						},
					},
				],
			},
		]
	}
}