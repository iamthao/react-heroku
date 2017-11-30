const webpack = require('webpack');
module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.svg$/,
                loaders: [
                    'babel-loader',
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    devServer: {
        contentBase: __dirname + "/public/",
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};