Object.defineProperty(exports,"__esModule",{value:true});exports.























getSiteInformation=getSiteInformation;require('dotenv').load();var googleMapsJavascriptAPI=process.env.GOOGLE_MAPS_JAVASCRIPT_API;if(googleMapsJavascriptAPI==null||typeof googleMapsJavascriptAPI!=='string')throw new Error('💔  urb-example-inscriptio-webapp requires the environment variable GOOGLE_MAPS_JAVASCRIPT_API to be set');var siteInformation={site_id:'00000000-0000-0000-0000-000000000000',inEditingMode:false,isSiteBuilderDisabled:true,configurationAsObject:{appData:{api:{googleMapsJavascriptAPI:googleMapsJavascriptAPI}},serverData:{}}};function getSiteInformation(req,res){
return siteInformation;
}
//# sourceMappingURL=siteSettings.js.map