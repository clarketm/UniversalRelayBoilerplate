import path from 'path'

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Read environment
require( 'dotenv' ).load()

const version = require( './units/_configuration/package.js' ).version
const host = process.env.HOST
const port_webpack = process.env.PORT_WEBPACK
const node_env = process.env.NODE_ENV

console.log( '📦  Running Webpack, process.env.NODE_ENV=' + node_env + ', version=' + version )

const publicPath =
  node_env === 'production' ? `/assets/${version}/` : `http://${host}:${port_webpack}/${version}/`
const ifProd = plugin => ( node_env === 'production' ? plugin : undefined )
const ifNotProd = plugin => ( node_env !== 'production' ? plugin : undefined )
const removeEmpty = array => array.filter( p => !!p )

const config = {
  devServer: {
    host,
    port: port_webpack,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  entry: {
    client: [ 'whatwg-fetch', path.resolve( 'units/urb-base-webapp/client.js' ) ],
    vendor: [
      'babel-polyfill',
      'farce',
      'found',
      'found-relay',
      'isomorphic-fetch',
      'material-ui',
      'prop-types',
      'react',
      'react-code-splitting',
      'react-dom',
      'react-event-listener',
      'react-helmet',
      'react-relay',
      'relay-runtime',
    ],
  },

  output: {
    path: path.resolve(
      `deployment/units/_configuration/urb-base-server/public_files/assets/${version}`
    ),
    filename: '[name].js',
    publicPath,
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: [
          { loader: 'react-hot-loader/webpack' },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [ 'react-native-stage-0' ],
              plugins: removeEmpty([
                'dynamic-import-webpack',
                ifProd( 'react-hot-loader/babel' ),
                'transform-class-properties',
                [
                  'transform-react-remove-prop-types',
                  {
                    mode: 'wrap',
                    plugins: [
                      [ 'babel-plugin-flow-react-proptypes', { omitRuntimeTypeExport: true } ],
                      'babel-plugin-transform-flow-strip-types',
                    ],
                  },
                ],
                ifNotProd( 'flow-react-proptypes' ),
                'syntax-dynamic-import',
                [
                  'relay',
                  {
                    schema: 'units/_configuration/urb-base-server/graphql/schema.graphql',
                  },
                ],
              ]),
            },
          },
          { loader: 'eslint-loader' },
        ],
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
    extensions: [ '.js', '.jsx' ],
  },

  plugins: removeEmpty([
    new webpack.EnvironmentPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].js',
    }),
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify( process.env.NODE_ENV ),
        },
      },
    }),

    // In development only:
    ifNotProd( new webpack.HotModuleReplacementPlugin() ),
    ifNotProd( new webpack.NamedModulesPlugin() ),

    // In production only:
    ifProd(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
          unused: true,
          dead_code: true,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      })
    ),
  ]),
}

if ( node_env !== 'production' ) config.devtool = 'source-map'

export default config
