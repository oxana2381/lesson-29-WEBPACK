const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
        entry: './src/js/my_file_index.js',
        output: {
           path: path.resolve(__dirname, 'build'),
           filename: 'bundle.js'
        },
        module: {
            rules: [
    
                {
                    test: /\.scss$/,
                    
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css"
            }),
        ]
    };
     