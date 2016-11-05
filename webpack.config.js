var webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify(prod ? 'production': 'development')
  }
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  cache: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: './src/App.jsx'
  },
  output: {
    path: 'public/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
          'react',
          'es2015',
          'stage-0'
          ]
        }
      }
    ]
  },
  plugins: [
    definePlugin,
    commonsPlugin
  ]
};