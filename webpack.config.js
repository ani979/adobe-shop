const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');
var path = require('path');
module.exports = (env, argv) => ({
    entry: "./src/",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name]${argv.mode === "development" ? '' : '[chunkhash:8]'}.js`,
        publicPath: ''
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.PUBLIC_URL': JSON.stringify(''),
        }),
    ],
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    optimization: {
        splitChunks: { 
            chunks: "all",
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            name:true,
            cacheGroups: {// Cache Group
                commons: {
                  name: 'vendors',
                  chunks: 'initial',
                  minChunks: 2
                },
                vendors: {
                    test: /[\/]node_modules[\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
            }
        },
        minimizer: [
          new UglifyJSPlugin({
            uglifyOptions: {
                mangle: {
                  keep_fnames: true,
                },
              },
          }),
        ],
    },
});