var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'amir-doc.js',
		path: path.resolve(__dirname, '../'),
		// publicPath: '/assets/'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					less: 'vue-style-loader!css-loader!less-loader',
					extractCSS: true
				}
			},
			{
				test: /\.md$/,
				loader: 'vue-markdown-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			inject: true
		}),
		new ExtractTextPlugin('amir.css')
	]
}