module.exports = {

    // indica a webpack correr babel para archivo
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                  'isomorphic-style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1
                    }
                  },
                  'postcss-loader'
                ]
              }
        ]
    }
};