// @flow

const siteInformation = {
  site_id: '00000000-0000-0000-0000-000000000000',
  inEditingMode: false,
  isSiteBuilderDisabled: true,
  configurationAsObject: {
    appData: {},
    serverData: {},
  },
}

export function getSiteInformation(req: Object, res: Object) {
  return siteInformation
}
