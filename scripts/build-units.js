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

fs.writeFileSync( './package.json', JSON.stringify( packageJson, null, 2 ), 'utf8' )
