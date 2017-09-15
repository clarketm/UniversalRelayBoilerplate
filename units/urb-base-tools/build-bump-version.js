import fs from 'fs'

import { version } from '../_configuration/package.js'

// Read environment
require( 'dotenv' ).load()

console.log(
  'Current version in package.json: ' + process.env.npm_package_version
)
console.log( 'Current version in package.js:   ' + version )

const arrVersion = version.split( '.' )
let versionBuildNumber = arrVersion[3]

if ( versionBuildNumber == null ) versionBuildNumber = -1

if (
  process.env.npm_package_version !=
  arrVersion[0] + '.' + arrVersion[1] + '.' + arrVersion[2]
)
  versionBuildNumber = -1

// Increment build
versionBuildNumber++
const newVersion = process.env.npm_package_version + '.' + versionBuildNumber

const fileName = './units/_configuration/package.js'
const searchString = 'export const version = '
const newContentOfLine = 'export const version = \'' + newVersion + '\''

let fileLines = fs.readFileSync( fileName, 'utf8' ).split( '\n' )
let index = 0

while ( index < fileLines.length ) {
  if ( fileLines[index].indexOf( searchString ) > -1 ) {
    if ( fileLines[index] === newContentOfLine )
      console.log( '[' + fileName + '] is already up to date' )
    else {
      fileLines[index] = newContentOfLine
      fs.writeFileSync( fileName, fileLines.join( '\n' ) )

      console.log( 'New version in package.js:       ' + newVersion )
    }
    break
  } else index++
}
