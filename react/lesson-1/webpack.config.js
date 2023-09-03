const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, argv) {
  const isDev = env.mode === 'development';

  return {
    mode: env.mode,
    entry: './src/index.js',
    output: {
      filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true,
      port: 8008,
      open: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/i,
          exclude: /raw\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(png|jpg|jpeg|gif)/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
      })
    ]
  }
}
