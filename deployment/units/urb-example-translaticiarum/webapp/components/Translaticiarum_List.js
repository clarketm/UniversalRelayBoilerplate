Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _List=require('material-ui/List');

var _Translaticiarum_Item=require('./Translaticiarum_Item');var _Translaticiarum_Item2=_interopRequireDefault(_Translaticiarum_Item);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Translaticiarum_List=function(_React$Component){_inherits(Translaticiarum_List,_React$Component);function Translaticiarum_List(){_classCallCheck(this,Translaticiarum_List);return _possibleConstructorReturn(this,(Translaticiarum_List.__proto__||Object.getPrototypeOf(Translaticiarum_List)).apply(this,arguments));}_createClass(Translaticiarum_List,[{key:'renderTranslaticiarums',value:function renderTranslaticiarums()
{var _this2=this;
return this.props.Viewer.Translaticiarums.edges.map(function(edge){return(
_react2.default.createElement(_Translaticiarum_Item2.default,{
key:edge.node.id,
Translaticiarum:edge.node,
Viewer:_this2.props.Viewer}));});


}},{key:'render',value:function render()

{
return(
_react2.default.createElement('div',null,
_react2.default.createElement(_List.List,null,
this.renderTranslaticiarums())));



}}]);return Translaticiarum_List;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(Translaticiarum_List,{
fragments:{
Viewer:function Viewer(){return function(RQL_0,RQL_1){return{children:[].concat.apply([],[{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:2147483647}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_0)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'Translaticiarum'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'TranslaticiarumsEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'Translaticiarums',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'TranslaticiarumsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'},_reactRelay2.default.QL.__frag(RQL_1)]),id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Translaticiarum_List_ViewerRelayQL',type:'Viewer'};}(





_Translaticiarum_Item2.default.getFragment('Translaticiarum'),



_Translaticiarum_Item2.default.getFragment('Viewer'));}}});
//# sourceMappingURL=Translaticiarum_List.js.map