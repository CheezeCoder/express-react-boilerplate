'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool : 'eval-source-map',
    entry: path.join(__dirname, 'src/main.js'),
    output:{
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false
        })
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: ['react-hot-loader', 'babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    }

};