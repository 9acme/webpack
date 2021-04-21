const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /\.(html|css|js|png|jpg|gif|less|scss)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
