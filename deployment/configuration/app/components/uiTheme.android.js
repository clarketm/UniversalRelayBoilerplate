Object.defineProperty(exports,"__esModule",{value:true});var _deepmerge=require('deepmerge');var _deepmerge2=_interopRequireDefault(_deepmerge);

var _uiThemeCommon=require('./uiThemeCommon');var _uiThemeCommon2=_interopRequireDefault(_uiThemeCommon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var uiThemePlatformSpecific={
dimensions:{
commonLineHeight:48,
commonLinePaddingLeft:16,
commonLinePaddingRight:16,
commonLineSeparatorPaddingLeft:0},

line:{
leftImageStyle:{




width:48,
height:48}}};exports.default=




(0,_deepmerge2.default)(_uiThemeCommon2.default,uiThemePlatformSpecific);
//# sourceMappingURL=uiTheme.android.js.map