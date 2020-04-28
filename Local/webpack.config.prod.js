const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// const path = require('path');
// const webpack = require('webpack');
// const args = process.argv.slice(2);
// const https = args[2] === '--https' && args[3] === 'true';
module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map'
});






