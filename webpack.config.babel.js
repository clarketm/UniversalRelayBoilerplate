import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Read environment
require('dotenv').load()

const version = require('./units/_configuration/package.js').version
const host = process.env.HOST
const port_webpack = process.env.PORT_WEBPACK

console.log(
  '📦  Running Webpack, process.env.NODE_ENV=' + process.env.NODE_ENV + ', version=' + version,
)

const config = {
  devServer: {
    host,
    port: port_webpack,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  entry: {
    client: ['whatwg-fetch', path.resolve('units/urb-base-webapp/client.js')],
    vendor: [
      'babel-polyfill',
      'found',
      'found-relay',
      'material-ui',
      'prop-types',
      'react',
      'react-dom',
      'react-event-listener',
      'react-helmet',
      'relay-runtime',
    ],
  },

  output: {
    path: path.resolve(
      `deployment/units/_configuration/urb-base-server/public_files/assets/${version}`,
    ),
    filename: '[name].js',
    publicPath: `http://${host}:${port_webpack}/${version}/`,
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.EnvironmentPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      },
    }),
  ],

  devtool: process.env.NODE_ENV == 'production' ? 'source-map' : 'eval',
}

export default config
