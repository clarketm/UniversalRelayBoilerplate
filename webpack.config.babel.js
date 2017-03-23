import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const version = require( './configuration/package.js' ).version
const host = process.env.HOST

console.log( 'Running Webpack, process.env.NODE_ENV=' + process.env.NODE_ENV + ', version=' + version )

const config = {
  devServer: {
    host,
    port: 8080
  },
  entry: {
    client: [
      'whatwg-fetch',
      path.resolve( 'webapp/client.js' )
    ]
  },
  output: {
    path: path.resolve( `public/assets/${version}` ),
    filename: '[name].js',
    publicPath: `http://${host}:8080/${version}/`
  },
  module: {
    rules: [
      //{ test: /\.js(x)?$/, loader: 'eslint-loader', exclude: /node_modules/ } // TODO x1000: Consider removing
      {
        test: /\.js(x)?$/,
        use: [ 'react-hot-loader/webpack', 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract( { fallbackLoader: 'style-loader', loader: 'css-loader' } )
      },
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  plugins: [

    new webpack.EnvironmentPlugin(),
    new ExtractTextPlugin( '[name].css' ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin( {
      process: {
        env: {
          NODE_ENV: JSON.stringify( process.env.NODE_ENV )
        }
      }
    } ),
  ],

  devtool: ( process.env.NODE_ENV == 'production' ? 'source-map' : 'eval' ),
}

export default config
