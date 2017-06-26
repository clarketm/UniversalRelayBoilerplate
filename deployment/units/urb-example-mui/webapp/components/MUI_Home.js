Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Card=require('material-ui/Card');
var _ResponsiveContentArea=require('../../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

MUI_Home=function(_React$Component){_inherits(MUI_Home,_React$Component);function MUI_Home(){_classCallCheck(this,MUI_Home);return _possibleConstructorReturn(this,(MUI_Home.__proto__||Object.getPrototypeOf(MUI_Home)).apply(this,arguments));}_createClass(MUI_Home,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{title:'Icons',subtitle:'How to generate all icons'}),
_react2.default.createElement(_Card.CardText,null,'If all icons need to be generated, then comment out the line',

_react2.default.createElement('pre',null,'if( key > 50 ) return;'),'in units/urb-example-mui/scripts/build-mui-icon-list.js and run',



_react2.default.createElement('pre',null,'npm run build-mui-icon-list')))));






}}]);return MUI_Home;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(MUI_Home,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'MUI_Home_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=MUI_Home.js.map