const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/my_file_index.js',
        shared: './src/js/shared.js',
        cities: './src/js/cities.js',
        about: './src/js/about.js',
        forecast: './src/js/forecast.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
        module: {
            rules: [
                
                {
                    test: /\.(sa|sc|c)ss$/,
                   use: [
                       // {
                       //    loader: 'css-hot-loader',
                      // },
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
       

plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'style.css'
    }),
    
        
   
    

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: '!!ejs-webpack-loader!./index.ejs',
        chunks: ['shared','index']
    }),
    
    new HtmlWebpackPlugin({
        filename: 'about.html',
        template: '!!ejs-webpack-loader!./about.ejs',
        chunks: ['shared','about']
    }),
    new HtmlWebpackPlugin({
        filename: 'listCity.html',
        template: '!!ejs-webpack-loader!./listCity.ejs',
        chunks: ['shared','cities']
    }),
    new HtmlWebpackPlugin({
        filename: 'forecast.html',
        template: '!!ejs-webpack-loader!./forecast.ejs',
        chunks: ['shared','forecast']
    })
],
devtool: 'eval-source-map',
devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    writeToDisk: true,
    watchContentBase: true,
    port: 9000,
}
}; 