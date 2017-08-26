// @flow

import fs from 'fs'
import { promisify } from 'util'

const readFileAsync = promisify( fs.readFile )
const writeFileAsync = promisify( fs.writeFile )

export default async function ensureFileContent(
  fileName: string,
  currentFileContent: ?string,
  newFileContent: string
) {
  // If the current file content is not provided, get it
  if ( currentFileContent == null )
    currentFileContent = ( await readFileAsync( fileName ) ).toString()

  if ( currentFileContent !== newFileContent ) {
    console.log( '✍️  written:  ' + fileName )
    await writeFileAsync( fileName, newFileContent, 'utf8' )
  } else {
    console.log( '📎  skipped:  ' + fileName )
  }
}
