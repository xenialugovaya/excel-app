const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];
  if (isDev) {
    loaders.push('eslint-loader');
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 8082,
    hot: isDev,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: isProd,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'main.css' : '[contenthash].css',
    }),
  ],
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDev,
          reloadAll: true,
        },
      },
      'css-loader',
      'sass-loader',
      ],
    },
    {
      test: /\.js$/,
      exclude: /node-modules/,
      use: jsLoaders(),
    },

    ],
  },
};
