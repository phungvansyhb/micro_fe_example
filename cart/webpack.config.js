const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode : 'development',
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer : {
        port : 8082
    },
 
    plugins : [
        new ModuleFederationPlugin({
            name : 'cart',
            filename : 'remoteEntry.js',
            exposes : {
                './CartTotal' : './src/index.js'
            },
            shared : ['@faker-js/faker']
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        })
    ]
}