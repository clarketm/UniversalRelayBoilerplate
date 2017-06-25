Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _List=require('material-ui/List');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SelectableList=(0,_List.makeSelectable)(_List.List);var

NavMenu=function(_React$Component){_inherits(NavMenu,_React$Component);function NavMenu(){_classCallCheck(this,NavMenu);return _possibleConstructorReturn(this,(NavMenu.__proto__||Object.getPrototypeOf(NavMenu)).apply(this,arguments));}_createClass(NavMenu,[{key:'render',value:function render()
{
var nestedItems_Misc=[
_react2.default.createElement(_List.ListItem,{primaryText:'Home',value:'/'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Compendium',value:'/compendium'})];

if(!this.props.Viewer.User_IsAnonymous){
nestedItems_Misc.push(_react2.default.createElement(_List.ListItem,{primaryText:'User Profile',value:'/user'}));
nestedItems_Misc.push(_react2.default.createElement(_List.ListItem,{primaryText:'Force Login',value:'/force_login'}));
}

return(
_react2.default.createElement(SelectableList,{value:this.props.value,onChange:this.props.onChange},

_react2.default.createElement(_List.ListItem,{
primaryText:'Ensayo',
primaryTogglesNestedList:true,
nestedItems:[
_react2.default.createElement(_List.ListItem,{primaryText:'View',value:'/ensayo'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Edit',value:'/ensayo/edit'})]}),


_react2.default.createElement(_List.ListItem,{
primaryText:'To Do',
primaryTogglesNestedList:true,
nestedItems:[
_react2.default.createElement(_List.ListItem,{primaryText:'All',value:'/todo'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Active',value:'/todo/active'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Completed',value:'/todo/completed'})]}),


_react2.default.createElement(_List.ListItem,{
primaryText:'Translaticiarum',
primaryTogglesNestedList:true,
nestedItems:[
_react2.default.createElement(_List.ListItem,{primaryText:'Grid',value:'/translaticiarum'}),
_react2.default.createElement(_List.ListItem,{primaryText:'List',value:'/translaticiarum/edit'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Calendar',value:'/translaticiarum/calendar'})]}),


_react2.default.createElement(_List.ListItem,{
primaryText:'Material-UI',
primaryTogglesNestedList:true,
nestedItems:[
_react2.default.createElement(_List.ListItem,{primaryText:'Home',value:'/mui'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Library Icons',value:'/mui/icons'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Country Flags',value:'/mui/icons_country_flags'}),
_react2.default.createElement(_List.ListItem,{primaryText:'Credit Cards',value:'/mui/icons_credit_cards'})]}),



_react2.default.createElement(_List.ListItem,{
primaryText:'Misc',
primaryTogglesNestedList:true,
nestedItems:nestedItems_Misc})));




}}]);return NavMenu;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(NavMenu,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'NavMenu_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=NavMenu.js.map