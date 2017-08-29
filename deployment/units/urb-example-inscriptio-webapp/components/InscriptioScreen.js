Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactGoogleMaps=require('react-google-maps');
var _withScriptjs=require('react-google-maps/lib/async/withScriptjs');var _withScriptjs2=_interopRequireDefault(_withScriptjs);
var _reactRelay=require('react-relay');

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var MapComponent=(0,_withScriptjs2.default)(
(0,_reactGoogleMaps.withGoogleMap)(function(props){return(
_react2.default.createElement(_reactGoogleMaps.GoogleMap,{defaultZoom:props.defaultZoom,center:props.center},
props.markers.map(function(marker,index){return(
_react2.default.createElement(_reactGoogleMaps.Marker,{key:index,position:marker.position}));})));}));





var styles={
card:{
minWidth:275,
minHeight:400}};var



InscriptioScreen=function(_React$Component){_inherits(InscriptioScreen,_React$Component);







function InscriptioScreen(props,context){_classCallCheck(this,InscriptioScreen);var _this=_possibleConstructorReturn(this,(InscriptioScreen.__proto__||Object.getPrototypeOf(InscriptioScreen)).call(this,
props,context));_this.










isUnmounted=false;_this.state={center:{lat:34.0522,lng:-118.243},markers:[]};return _this;}_createClass(InscriptioScreen,[{key:'render',value:function render()

{var
classes=this.props.classes;

var googleMapURL=
'https://maps.googleapis.com/maps/api/js?v=3.28&libraries=places,geometry&key='+
this.context.rbCtx.appData.api.googleMapsJavascriptAPI;

console.log(googleMapURL);

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Inscriptio'}),
_react2.default.createElement(_Card.CardContent,null,
_react2.default.createElement(MapComponent,{
defaultZoom:16,
center:this.state.center,
content:'Content here',
googleMapURL:googleMapURL,
markers:this.state.markers,
loadingElement:_react2.default.createElement('div',null,'Loading...'),
containerElement:_react2.default.createElement('div',{style:{height:400}}),
mapElement:_react2.default.createElement('div',{style:{height:400}})})))));





}}]);return InscriptioScreen;}(_react2.default.Component);InscriptioScreen.contextTypes={rbCtx:_propTypes2.default.object};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(InscriptioScreen),{Viewer:function Viewer(){return require('./__generated__/InscriptioScreen_Viewer.graphql');}});
//# sourceMappingURL=InscriptioScreen.js.map