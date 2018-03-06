const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
        vendors: ['react', 'react-dom'], //in all pages
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({template: 'index.html'}),
    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                        },
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    }, {
                        loader: "css-loader",  // translates CSS into CommonJS
                        options: {
                            sourceMap: true,
                        },
                    }, {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    }
};
