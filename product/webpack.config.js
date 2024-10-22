const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode : 'development',
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer : {
        port : 8081
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'product',
            filename : 'remoteEntry.js',
            exposes : {
                './ProductList' : './src/index.js'
            },
            shared : ['@faker-js/faker']
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        })
    ]
}