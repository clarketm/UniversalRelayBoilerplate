Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Card=require('material-ui/Card');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


Ensayo_PublicListing=function(_React$Component){_inherits(Ensayo_PublicListing,_React$Component);function Ensayo_PublicListing(){_classCallCheck(this,Ensayo_PublicListing);return _possibleConstructorReturn(this,(Ensayo_PublicListing.__proto__||Object.getPrototypeOf(Ensayo_PublicListing)).apply(this,arguments));}_createClass(Ensayo_PublicListing,[{key:'_handle_onClick',value:function _handle_onClick(

id)
{
this.context.router.push('/ensayo/item/'+id);
}},{key:'renderEnsayos',value:function renderEnsayos()


{var _this2=this;
return this.props.Viewer.Ensayos.edges.map(function(edge){return(
_react2.default.createElement(_Card.Card,{key:edge.node.id},
_react2.default.createElement(_Card.CardHeader,{
title:edge.node.Ensayo_Title,
subtitle:edge.node.Ensayo_Description}),

_react2.default.createElement(_Card.CardText,{
onClick:function onClick(){return _this2._handle_onClick(edge.node.id);}},

edge.node.Ensayo_Content)));});



}},{key:'render',value:function render()


{
return(
_react2.default.createElement('div',null,
this.renderEnsayos()));


}}]);return Ensayo_PublicListing;}(_react2.default.Component);


Ensayo_PublicListing.contextTypes={
router:_react2.default.PropTypes.object.isRequired};exports.default=



_reactRelay2.default.createContainer(Ensayo_PublicListing,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:2147483647}}],children:[{children:[{children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Ensayo_Title',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Description',kind:'Field',metadata:{},type:'String'},{fieldName:'Ensayo_Content',kind:'Field',metadata:{},type:'String'}],fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'Ensayo'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'EnsayosEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'Ensayos',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'EnsayosConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Ensayo_PublicListing_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=Ensayo_PublicListing.js.map