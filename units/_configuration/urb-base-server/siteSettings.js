// @flow

// Read environment
require( 'dotenv' ).load()

const googleMapsJavascriptAPI = process.env.GOOGLE_MAPS_JAVASCRIPT_API
if (
  googleMapsJavascriptAPI == null ||
  typeof googleMapsJavascriptAPI !== 'string'
)
  throw new Error(
    '💔  urb-example-inscriptio-webapp requires the environment variable GOOGLE_MAPS_JAVASCRIPT_API to be set'
  )

const siteInformation = {
  site_id: '00000000-0000-0000-0000-000000000000',
  inEditingMode: false,
  isSiteBuilderDisabled: true,
  configurationAsObject: {
    appData: { api: { googleMapsJavascriptAPI } },
    serverData: {},
  },
}

export function getSiteInformation( req: Object, res: Object ) {
  return siteInformation
}
