const path = require('path');

module.exports = {
  mode: 'development',
  entry: [path.resolve('src/index.tsx')],
  module: {
    rules: require(path.resolve('config/webpack/webpack.rules')),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: require(path.resolve('config/webpack/webpack.plugins')),
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
