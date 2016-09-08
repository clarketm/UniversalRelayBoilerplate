/* @flow weak */

import fs from 'fs'
import path from 'path'


const currentPackageJson = JSON.parse( fs.readFileSync( './package.json' ) )
const packageJson = JSON.parse( fs.readFileSync( './scripts/package.json' ) )

function addToPackageJson( fileName )
{
  const newPackageJson = JSON.parse( fs.readFileSync( fileName ) )

  if( newPackageJson.scripts )
    Object.assign( packageJson.scripts, newPackageJson.scripts )

  if( newPackageJson.betterScripts )
    Object.assign( packageJson.scripts, newPackageJson.betterScripts )

  if( newPackageJson.dependencies )
    Object.assign( packageJson.dependencies, newPackageJson.dependencies )

  if( newPackageJson.devDependencies )
    Object.assign( packageJson.devDependencies, newPackageJson.devDependencies )
}

function createPackageJson( )
{
  // Make sure not to overwrite version information
  packageJson.version = currentPackageJson.version

  fs.readdirSync( './units/' ).filter( unitName => {
    if( fs.statSync( './units/' + unitName ).isDirectory( ) )
    {
      const packageJsonName = path.resolve( './units/', unitName, 'package.json' )
      try {
        addToPackageJson( packageJsonName )
      }
      catch( e )
      {
        if( e.code === 'ENOENT' )
          return false
        else
          throw e
      }
    }
  } )

  console.log( 'Written: ' + path.resolve( './package.json' ) )
  fs.writeFileSync( './package.json', JSON.stringify( packageJson, null, 2 ), 'utf8' )
}

function creteMutations( )
{
  const mutationsImports = [ ]
  const mutationsExports = [ ]

  fs.readdirSync( './units/' ).filter( unitName => {
    if( fs.statSync( './units/' + unitName ).isDirectory( ) )
    {
      const mutationsDir = path.resolve( './units/', unitName, 'graphql/mutation' )
      try {
        fs.readdirSync( mutationsDir ).filter( mutationName => {
          if( mutationName.endsWith( '.js' ) )
          {
            const mutationNameNoJs = mutationName.substring( 0, mutationName.length - 3 )
            mutationsImports.push( "import " + mutationNameNoJs + " from '../../units/" + unitName + "/graphql/mutation/" + mutationNameNoJs + "'" )
            mutationsExports.push( "  " + mutationNameNoJs + "," )
          }
        } )
      }
      catch( e )
      {
        if( e.code === 'ENOENT' )
          return false
        else
          throw e
      }
    }
  } )

  let mutations = [
    '/* @flow */',
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

function creteSchemas( )
{
  const schemasImports = [ ]

  let importNumber = 1
  fs.readdirSync( './units/' ).filter( unitName => {
    if( fs.statSync( './units/' + unitName ).isDirectory( ) )
    {
      const schemasDir = path.resolve( './units/', unitName, 'graphql/model' )
      try {
        fs.readdirSync( schemasDir ).filter( mutationName => {
          if( mutationName.endsWith( '.js' ) )
          {
            const mutationNameNoJs = mutationName.substring( 0, mutationName.length - 3 )
            schemasImports.push( "import i" + (importNumber++) + " from '../../units/" + unitName + "/graphql/model/" + mutationNameNoJs + "'" )
          }
        } )
      }
      catch( e )
      {
        if( e.code === 'ENOENT' )
          return false
        else
          throw e
      }
    }
  } )

  let schemas = [
    '/* @flow */',
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

function creteViewerFields( )
{
  const viewerFieldsImports = [ ]
  const viewerFieldsExports = [ ]

  fs.readdirSync( './units/' ).filter( unitName => {
    if( fs.statSync( './units/' + unitName ).isDirectory( ) )
    {
      try {
        const viewerFieldsImportName = unitName.replace( /-/g, '_' ) + '_ViewerFields'
        if( fs.statSync( './units/' + unitName + '/graphql/type/_ViewerFields.js' ).isFile( ) )
        {
          viewerFieldsImports.push( "import " + viewerFieldsImportName + " from '../../units/" + unitName + "/graphql/type/_ViewerFields'" )
          viewerFieldsExports.push( "  ..." + viewerFieldsImportName + "," )
        }
      }
      catch( e )
      {
        if( e.code === 'ENOENT' )
          return false
        else
          throw e
      }
    }
  } )

  let viewerFields = [
    '/* @flow */',
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

  console.log( 'Written: ' + path.resolve( './configuration/graphql/_viewerFields.js' ) )
  fs.writeFileSync( './configuration/graphql/_viewerFields.js', viewerFields.join( '\r\n' ), 'utf8' )
}


createPackageJson( )
creteMutations( )
creteSchemas( )
creteViewerFields( )
