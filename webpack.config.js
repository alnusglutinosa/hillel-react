const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer'); 
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
	entry: './dev/index.js',
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'bundle.js'
	},
	devtool: isDev && 'eval-source-map',
	mode: env,
	watch: isDev,
	devServer: {
		contentBase: path.resolve(__dirname, 'site'),
		host: 'localhost',
		port: 9090
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
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
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve('./dev/static'),
				to: path.resolve('./site')
			}
		])
	]
}