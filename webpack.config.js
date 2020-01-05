const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
    entry: "./src/",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    sourceMap:true
                }
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader"
            }
            ]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.module\.s(a|c)ss$/,
            loader: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        },
        {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                    sourceMap: true
                    }
                }
            ]
        }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: "index.html",
        }),
    ],
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx', '.scss', '.css']
      },
};