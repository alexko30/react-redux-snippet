import webpack from 'webpack';
import path from 'path';

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './bundle'),
    filename: 'index.bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)/i,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    publicPath: '/bundle',
    inline: false,
    historyApiFallback: true,
    compress: true,
    hot: false,
    port: 8080
  }
};
