const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

// const path = require('path');
// const webpack = require('webpack');
const args = process.argv.slice(2);
const https = args[2] === '--https' && args[3] === 'true';
module.exports = merge(common, {
   mode: 'development',
   devtool: 'eval',
   //devtool: 'inline-source-map',
   devServer: {
    https,
    cert: './localhost.crt',
    key: './localhost.key',
    host: '0.0.0.0',
    port: 9999,
    hot: true,
    overlay: true,
    historyApiFallback: false,
    watchContentBase: true,
    disableHostCheck: true,
    headers: {
        'Access-Control-Allow-Origin': https ? 'https://0.0.0.0:9999' : 'http://0.0.0.0:9999'
    }, 
    

},
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.BABEL_ENV': JSON.stringify('development'),
    })
]
});






