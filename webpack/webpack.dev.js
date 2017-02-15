'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebPak = webpack.optimize.CommonsChunkPlugin;
const helpers = require('./helpers');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    },
    devtool: 'source-map',
    entry: {
        polyfills: './src/polyfills.ts',
        app: [ path.resolve(rootDir, 'src', 'main')],
        vendor: [path.resolve(rootDir, 'src', 'vendor')]
    },
    module: {
        loaders: [
            { test: /\.(css|html)$/, loader: 'raw' },
            { test: /\.ts$/ , loader: 'ts', exclude: /node_modules/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [

        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
        ),

        /*new ChunkWebPak([{
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        },{
            filename: 'polyfills.bundle.js',
            minChunks: Infinity,
            name: 'polyfills'
        }
        
        
        ]),*/
        new ChunkWebPak({
            name: [ 'vendor', 'polyfills']
        }),
        new HtmlWebpack({
            filename: 'index.htm',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};