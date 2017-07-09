
var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

var productionPlugin = new Webpack.DefinePlugin({
  'process.env':{
    'NODE_ENV': JSON.stringify('production')
  }
});


var config = {

  // We change to normal source mapping
  devtool: 'cheap-module-eval-source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
   plugins: [
    productionPlugin
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: __dirname + '/src/' },
      { test: /\.jsx$/, loaders: ['babel'], include: __dirname + '/src/' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};

module.exports = config;
