var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var functions = require('postcss-functions');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// var plugins = [
//     new webpack.NoErrorsPlugin(),
// ];

// if (process.env.NODE_ENV === 'production') {
//   plugins = plugins.concat([
//     new webpack.DefinePlugin({
//       'process.env': {NODE_ENV: JSON.stringify('production')}
//     })
//   ]);

// };

// var config  = {
  
 
//   plugins: plugins,
//   resolve: {
//     extensions: ['', '.js', '.jsx', '.css'],
//     alias: {
//       '#app': path.join(__dirname, 'client'),
//       Components: path.join(__dirname, 'client/components'),
//       '#css': path.join(__dirname, 'client/css')
//     }
//   },
//   svgo1: {
//     multipass: true,
//     plugins: [
//       // by default enabled
//       {mergePaths: false},
//       {convertTransform: false},
//       {convertShapeToPath: false},
//       {cleanupIDs: false},
//       {collapseGroups: false},
//       {transformsWithOnePath: false},
//       {cleanupNumericValues: false},
//       {convertPathData: false},
//       {moveGroupAttrsToElems: false},
//       // by default disabled
//       {removeTitle: true},
//       {removeDesc: true}
//     ]
//   },
// };

module.exports = {
  context: `${__dirname}/src`,
  devtool: 'inline-source-map',
  entry: {
    bundle: path.join(__dirname, 'client/index.js')
  },
  output: {
    path: path.join(__dirname, 'server/data/static/build'),
    filename: '[name].js',
    publicPath: "/static/build/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'client'),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
      },


      {test: /\.(png|gif)$/, loader: 'url-loader?name=[name]@[hash].[ext]&limit=5000'},
      {test: /\.svg$/, loader: 'url-loader?name=[name]@[hash].[ext]&limit=5000!svgo-loader?useConfig=svgo1'},
      {test: /\.(pdf|ico|jpg|eot|otf|woff|ttf|mp4|webm)$/, loader: 'file-loader?name=[name]@[hash].[ext]'},
      {test: /\.json$/, loader: 'json-loader'},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '#app': path.join(__dirname, 'client'),
      Components: path.join(__dirname, 'client/components'),
      '#css': path.join(__dirname, 'client/css')
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ]
};