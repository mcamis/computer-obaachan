var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/scripts/app.js'
    ],
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    watch: true,
    plugins: [HTMLWebpackPluginConfig],
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint'
        }],
        // preLoaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'jshint-loader'
        // }],
        loaders: [{
            test: [/\.js$/, /\.es6$/],
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
}
