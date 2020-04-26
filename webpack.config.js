const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].js'
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        port: process.env.PORT,
        contentBase: path.resolve(__dirname, 'dist')
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
                loader: 'style-loader!css-loader'
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
    plugins: [htmlPlugin, uglifyPlugin]
};