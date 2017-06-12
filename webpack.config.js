var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'react-hot-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', ['es2015', { 'loose': true }], 'stage-1']
            }
          }
        ],
        exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  externals: {
    env_config: JSON.stringify(process.env.ENV === 'production' 
                                ? require('./env_config/config.prod.json')
                                : require('./env_config/config.dev.json'))
  }
}

