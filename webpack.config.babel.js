import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const version = require('./configuration/package.js').version
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
    client: ['whatwg-fetch', path.resolve('webapp/client.js')],
    vendor: [
      'isomorphic-relay',
      'isomorphic-relay-router',
      'material-ui',
      'prop-types',
      'react',
      'react-dom',
      'react-event-listener',
      'react-helmet',
      'react-relay',
      'react-relay-network-layer',
      'react-router',
      'react-router-relay',
      'react-tap-event-plugin',
    ],
  },

  output: {
    path: path.resolve(`public/assets/${version}`),
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
    // TODO: Enable once fixed
    /*
    /Users/alex/Documents/Projects/cfworkspace/urb/main/node_modules/webpack/lib/HotModuleReplacementPlugin.js:59
                                records.chunkModuleIds[chunk.id] = chunk.mapModules(function(m) {
                                                                         ^
    TypeError: chunk.mapModules is not a function
        at /Users/alex/Documents/Projects/cfworkspace/urb/main/node_modules/webpack/lib/HotModuleReplacementPlugin.js:59:46
    */
    // new webpack.HotModuleReplacementPlugin(),
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
