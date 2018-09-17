'use strict';
var webpack = require( 'webpack' );
var fs = require( 'fs' );
// Builds example bundles
module.exports = {
    context: __dirname,
    entry: {
        commons: [ "react", "react-dom", 'openlayers' ],
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        sourceMapFilename: "[file].map",
    },
    module: {
        loaders: [ {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                }
        },
            {
                test: /\.xml$/,
                loader: 'raw-loader'
        },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
      ]
    },
    // externals: {
    //   'react':'React',
    //   'react-dom':'ReactDOM'
    // },
    plugins: [
      new webpack.DefinePlugin( {
            "process.env": {
                NODE_ENV: JSON.stringify( 'development' )
                // NODE_ENV: JSON.stringify('production')
            }
        } ),
      new webpack.optimize.CommonsChunkPlugin( {
            name: 'commons',
            filename: 'commons.js'
        } ),
      // new webpack.optimize.UglifyJsPlugin({
      //   compressor: {
      //     warnings: false,
      //   },
      // }),
    ]
};
// Load all entry points
var files = fs.readdirSync( __dirname + '/src' ).filter( function ( element,
    index, array ) {
    return element.match( /^.+\.jsx$/ );
} );
for ( var idx in files ) {
    var file = files[ idx ];
    if ( file.startsWith( "._" ) ) continue;
    var module_name = file.replace( /\.jsx$/, '' );
    module.exports.entry[ module_name ] = './src/' + file;
}
