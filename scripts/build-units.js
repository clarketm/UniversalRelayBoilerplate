/* @flow weak */

import fs from 'fs'
import path from 'path'


const currentPackageJson = JSON.parse( fs.readFileSync( './package.json' ) )
const packageJson = JSON.parse( fs.readFileSync( './scripts/package.part.json' ) )

function addToPackageJson( fileName ) {
  const newPackageJson = JSON.parse( fs.readFileSync( fileName ) )

  if( newPackageJson.scripts )
    Object.assign( packageJson.scripts, newPackageJson.scripts )

  if( newPackageJson.betterScripts )
    Object.assign( packageJson.betterScripts, newPackageJson.betterScripts )

  if( newPackageJson.dependencies )
    Object.assign( packageJson.dependencies, newPackageJson.dependencies )

  if( newPackageJson.devDependencies )
    Object.assign( packageJson.devDependencies, newPackageJson.devDependencies )
}

function getPackages( directoryName: String ) {
  fs.readdirSync( directoryName )
    .filter( unitName => {
      if( fs.statSync( directoryName + unitName )
        .isDirectory() ) {
        const packageJsonName = path.resolve( directoryName, unitName, 'package.part.json' )
        try {
          addToPackageJson( packageJsonName )
        } catch( e ) {
          if( e.code === 'ENOENT' ) {
            getPackages( directoryName + unitName + "/" )
            return false
          } else
            throw e
        }
      }
    } )
}

function sortObject( object: Object ) {
  var t = {}
  Object.keys( object )
    .sort()
    .forEach( function ( k ) {
      t[ k ] = object[ k ]
    } )
  return t
}

function orderPackages() {
  packageJson.scripts = sortObject( packageJson.scripts )
  packageJson.betterScripts = sortObject( packageJson.betterScripts )
  packageJson.dependencies = sortObject( packageJson.dependencies )
  packageJson.devDependencies = sortObject( packageJson.devDependencies )
}

function createPackageJson() {
  // Make sure not to overwrite version information
  packageJson.version = currentPackageJson.version
  packageJson.name = currentPackageJson.name

  getPackages( 'units/' )
  orderPackages()

  console.log( 'Written: ' + path.resolve( './package.json' ) )
  fs.writeFileSync( './package.json', JSON.stringify( packageJson, null, 2 ), 'utf8' )
}

function getMutations( directoryName: String, mutationsImports: Array, mutationsExports: Array ) {
  fs.readdirSync( directoryName )
    .filter( unitName => {
      if( fs.statSync( directoryName + unitName )
        .isDirectory() ) {
        const mutationsDir = path.resolve( directoryName, unitName, 'graphql/mutation' )
        try {
          fs.readdirSync( mutationsDir )
            .filter( mutationName => {
              if( mutationName.endsWith( '.js' ) ) {
                const mutationNameNoJs = mutationName.substring( 0, mutationName.length - 3 )
                mutationsImports.push( "import " + mutationNameNoJs + " from '../../" + directoryName + unitName + "/graphql/mutation/" + mutationNameNoJs + "'" )
                mutationsExports.push( "  " + mutationNameNoJs + "," )
              }
            } )
        } catch( e ) {
          if( e.code === 'ENOENT' ) {
            getMutations( directoryName + unitName + "/", mutationsImports, mutationsExports )
            return false
          } else
            throw e
        }
      }
    } )
}

function createMutations() {
  const mutationsImports = []
  const mutationsExports = []

  getMutations( 'units/', mutationsImports, mutationsExports )

  let mutations = [
    '// @flow weak',
    ''
  ]
  mutations = mutations.concat( mutationsImports )
  mutations = mutations.concat( [
    '',
    'export default {'
  ] )
  mutations = mutations.concat( mutationsExports )
  mutations = mutations.concat( [
    '}'
  ] )

  console.log( 'Written: ' + path.resolve( './configuration/graphql/_mutations.js' ) )
  fs.writeFileSync( './configuration/graphql/_mutations.js', mutations.join( '\r\n' ), 'utf8' )
}

function getSchemas( directoryName: String, schemasImports: Array ) {
  fs.readdirSync( directoryName )
    .filter( unitName => {
      if( fs.statSync( directoryName + unitName )
        .isDirectory() ) {
        const schemasDir = path.resolve( directoryName, unitName, 'graphql/model' )
        try {
          fs.readdirSync( schemasDir )
            .filter( mutationName => {
              if( mutationName.endsWith( '.js' ) ) {
                const mutationNameNoJs = mutationName.substring( 0, mutationName.length - 3 )
                schemasImports.push( "import " + mutationNameNoJs.replace( '.', '_' ) + " from '../../" + directoryName + unitName + "/graphql/model/" + mutationNameNoJs + "'" )
              }
            } )
        } catch( e ) {
          if( e.code === 'ENOENT' ) {
            getSchemas( directoryName + unitName + "/", schemasImports )
            return false
          } else
            throw e
        }
      }
    } )
}

function createSchemas() {
  const schemasImports = []

  getSchemas( 'units/', schemasImports )

  let schemas = [
    '// @flow weak',
    '/* eslint no-unused-vars: 0 */',
    ''
  ]
  schemas = schemas.concat( schemasImports )
  schemas = schemas.concat( [
    '',
    'export default true'
  ] )

  console.log( 'Written: ' + path.resolve( './configuration/graphql/_schemas.js' ) )
  fs.writeFileSync( './configuration/graphql/_schemas.js', schemas.join( '\r\n' ), 'utf8' )
}

function getViewerFields( directoryName: String, viewerFieldsImports: Array, viewerFieldsExports: Array ) {
  fs.readdirSync( directoryName )
    .filter( unitName => {
      if( fs.statSync( directoryName + unitName )
        .isDirectory() ) {
        try {
          const viewerFieldsImportName = unitName.replace( /-/g, '_' )
          if( fs.statSync( directoryName + unitName + '/graphql/type/_ViewerFields.js' )
            .isFile() ) {
            viewerFieldsImports.push( "import " + viewerFieldsImportName + " from '../../" + directoryName + unitName + "/graphql/type/_ViewerFields'" )
            viewerFieldsExports.push( "  ..." + viewerFieldsImportName + "," )
          }
        } catch( e ) {
          if( e.code === 'ENOENT' ) {
            getViewerFields( directoryName + unitName + "/", viewerFieldsImports, viewerFieldsExports )
            return false
          } else
            throw e
        }
      }
    } )
}

function createViewerFields() {
  const viewerFieldsImports = []
  const viewerFieldsExports = []

  getViewerFields( 'units/', viewerFieldsImports, viewerFieldsExports )

  let viewerFields = [
    '// @flow weak',
    ''
  ]
  viewerFields = viewerFields.concat( viewerFieldsImports )
  viewerFields = viewerFields.concat( [
    '',
    'export default {'
  ] )
  viewerFields = viewerFields.concat( viewerFieldsExports )
  viewerFields = viewerFields.concat( [
    '}'
  ] )

  console.log( 'Written: ' + path.resolve( './configuration/graphql/_ViewerFields.js' ) )
  fs.writeFileSync( './configuration/graphql/_ViewerFields.js', viewerFields.join( '\r\n' ), 'utf8' )
}


createPackageJson()
createMutations()
createSchemas()
createViewerFields()
