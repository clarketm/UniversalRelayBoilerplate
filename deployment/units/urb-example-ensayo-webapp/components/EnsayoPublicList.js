Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='units/urb-example-ensayo-webapp/components/EnsayoPublicList.jsx';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

EnsayoPublicList=function(_React$Component){_inherits(EnsayoPublicList,_React$Component);function EnsayoPublicList(){_classCallCheck(this,EnsayoPublicList);return _possibleConstructorReturn(this,(EnsayoPublicList.__proto__||Object.getPrototypeOf(EnsayoPublicList)).apply(this,arguments));}_createClass(EnsayoPublicList,[{key:'_handle_onClick',value:function _handle_onClick(
id){
this.context.router.push('/ensayo/item/'+id);
}},{key:'renderEnsayos',value:function renderEnsayos()

{var _this2=this;
return this.props.Viewer.Ensayos.edges.map(function(edge){return(
_react2.default.createElement(_Card.Card,{key:edge.node.id,__source:{fileName:_jsxFileName,lineNumber:17}},
_react2.default.createElement(_Card.CardHeader,{title:edge.node.Ensayo_Title,subtitle:edge.node.Ensayo_Description,__source:{fileName:_jsxFileName,lineNumber:18}}),
_react2.default.createElement(_Card.CardText,{onClick:function onClick(){return _this2._handle_onClick(edge.node.id);},__source:{fileName:_jsxFileName,lineNumber:19}},'Click here to read!')));});


}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_ResponsiveContentArea2.default,{__source:{fileName:_jsxFileName,lineNumber:26}},
this.renderEnsayos()));


}}]);return EnsayoPublicList;}(_react2.default.Component);


EnsayoPublicList.contextTypes={
router:_propTypes2.default.object.isRequired};var _default=


_reactRelay2.default.createContainer(EnsayoPublicList,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:2147483647}}],children:[{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Ensayo_Title',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Description',kind:'Field',metadata:{},type:'String'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'Ensayo'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'EnsayosEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'Ensayos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'EnsayosConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'EnsayoPublicList_ViewerRelayQL',type:'Viewer'};}();}}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(EnsayoPublicList,'EnsayoPublicList','units/urb-example-ensayo-webapp/components/EnsayoPublicList.jsx');__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-webapp/components/EnsayoPublicList.jsx');}();;
//# sourceMappingURL=EnsayoPublicList.js.map