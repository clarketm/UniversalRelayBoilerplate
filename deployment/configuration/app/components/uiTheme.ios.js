Object.defineProperty(exports,"__esModule",{value:true});var _deepmerge=require('deepmerge');var _deepmerge2=_interopRequireDefault(_deepmerge);

var _uiThemeCommon=require('./uiThemeCommon');var _uiThemeCommon2=_interopRequireDefault(_uiThemeCommon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var uiThemePlatformSpecific={
dimensions:{
commonLineHeight:44,
commonLinePaddingLeft:15,
commonLinePaddingRight:15,
commonLineSeparatorPaddingLeft:15},

line:{
leftImageStyle:{
marginLeft:15,



width:44,
height:44}}};exports.default=




(0,_deepmerge2.default)(_uiThemeCommon2.default,uiThemePlatformSpecific);
//# sourceMappingURL=uiTheme.ios.js.map