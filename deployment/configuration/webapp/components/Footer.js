Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _colors=require('material-ui/styles/colors');
var _withWidth=require('../../../webapp/scripts/withWidth');

var _FullWidthSection=require('../../../webapp/components/FullWidthSection');var _FullWidthSection2=_interopRequireDefault(_FullWidthSection);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var styles={
footer:{
backgroundColor:_colors.grey900,
textAlign:'center',
paddingRight:24},

a:{
color:_colors.darkWhite},

p:{
margin:'0 auto',
padding:0,
color:_colors.lightWhite,
maxWidth:356}};var




Footer=function(_React$Component){_inherits(Footer,_React$Component);function Footer(){_classCallCheck(this,Footer);return _possibleConstructorReturn(this,(Footer.__proto__||Object.getPrototypeOf(Footer)).apply(this,arguments));}_createClass(Footer,[{key:'render',value:function render()


{
if(this.props.width==_withWidth.LARGE)
styles.footer.paddingLeft=256+24;else

styles.footer.paddingLeft=24;

return(
_react2.default.createElement(_FullWidthSection2.default,{style:styles.footer},
_react2.default.createElement('p',{style:styles.p},
'Hand crafted with love by the engineers at ',
_react2.default.createElement('a',{style:styles.a,href:'http://codefoundries.com'},'Code Foundries'),


' and our awesome ',
_react2.default.createElement('a',{
style:styles.a,
href:'https://github.com/codefoundries/UniversalRelayBoilerplate/graphs/contributors'},'contributors'),'.',



' Universal Relay Boilerplate is ',
_react2.default.createElement('a',{style:styles.a,href:'https://github.com/codefoundries/UniversalRelayBoilerplate'},'available on github'),'.')));





}}]);return Footer;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(Footer,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Footer_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=Footer.js.map