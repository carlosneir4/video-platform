const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // indica el root file de la aplicación
    entry: './src/client/client.js',

    // indica donde se alojara el build 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);