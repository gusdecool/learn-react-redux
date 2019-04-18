const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, 'src/');

module.exports = {
    watch: process.env.NODE_ENV === 'development',
    cache: true,
    context: SOURCE_DIR,
    entry: {
        widget: SOURCE_DIR + '/Entry.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: '[name].js',
        publicPath: 'build',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(scss|css)$/,
                include: SOURCE_DIR,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]'
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
        new BrowserSyncPlugin(
            {
                server: {
                    baseDir: './build/',
                    index: 'index.html'
                },
                files: 'build/',
                https: true,
                host: 'localhost',
                ghostMode: false
            }
        )
    ]
};
