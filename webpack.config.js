var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	entry: [
		'./app/app.js'
	],
	output: {
		path: './dist',
		filename: "app_bundle.js"
	},
	module: {
		loaders: [{
				test: /\.js$/, 
				include: './app', 
				loader: "babel-loader"
		}]
	},
	watch: true,
	plugins: [HTMLWebpackPluginConfig]
}