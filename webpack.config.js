const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const uglifyPlugin = new UglifyJSPlugin({
    parallel: 4,
    uglifyOptions: {
        compress: true
    }
});

module.exports = {
    mode: 'production',
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        port: process.env.PORT,
        contentBase: path.resolve(__dirname, 'public')
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
          chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: [/node_modules/, /\.test.js$/],
                loader: 'eslint-loader',
        
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /\.test.js$/],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
              context: __dirname,
            },
          }),
        htmlPlugin, uglifyPlugin,
          new WebpackMd5Hash(),
          new ManifestPlugin({
            fileName: 'asset-manifest.json'
          }),
          new CompressionPlugin({
            filename: '[path].br[query]',
            algorithm: 'gzip',
            test: /\.(js|css|scss|gif|html|svg)$/,
            compressionOptions: { level: 9 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          }),
          new MiniCssExtractPlugin(),
          new SWPrecacheWebpackPlugin({
            cacheId: 'hacker-news-app',
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
          }),
          new CopyWebpackPlugin([
            { from: 'src/pwa' }, // define the path of the files to be copied
          ])
    ]
};