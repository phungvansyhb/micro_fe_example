const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')


module.exports = {
    mode : 'development',
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer : {
        port : 8080
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'container',
            remotes : {
                cart : 'cart@http://localhost:8082/remoteEntry.js',
                product : 'product@http://localhost:8081/remoteEntry.js',
            }
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        })
    ]
}