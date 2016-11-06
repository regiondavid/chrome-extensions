const webpack = require('webpack');
const PATH = require('path');
const ROOT_PATH = PATH.resolve(__dirname);
const APP_PATH = PATH.resolve(__dirname, "js");
const BUILD_PATH = PATH.resolve(__dirname, "dist");


module.exports = {
    entry: "./js/main.js",
    output: {
        filename: "bundle.js",
        path: BUILD_PATH
    },
    module: {
        loaders: [
            {
                test: /\*.js$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\*.css$/,
                loaders: ['style','css']
            }
        ]
    }
}
