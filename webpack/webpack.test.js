'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            {  test: /\.ts$/, loader: 'tslint', exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.(css|html)$/ , loader: 'raw' },
            { test: /\.ts$/ , loader: 'ts', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'src')
    },
    tslint: {
        emitErrors: true
    }
};
