const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({ //npm install --save-dev html-webpack-plugin
    template: './public/index.html'
  }),
  new MiniCssExtractPlugin()], // npm install --save-dev mini-css-extract-plugin
  module: {
    rules: [
      { //npm i babel-loader @babel/core @babel/preset-env --save-dev
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] //A modifier pour utiliser le css-loader à defaut (npm i css-loader --save-dev)  
    }
    ]
  }
};