Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _Checkbox=require('material-ui/Checkbox');var _Checkbox2=_interopRequireDefault(_Checkbox);
var _MenuItem=require('material-ui/MenuItem');var _MenuItem2=_interopRequireDefault(_MenuItem);
var _RaisedButton=require('material-ui/RaisedButton');var _RaisedButton2=_interopRequireDefault(_RaisedButton);
var _SelectField=require('material-ui/SelectField');var _SelectField2=_interopRequireDefault(_SelectField);
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Compendium_updateMutation=require('../../relay/Compendium_updateMutation');var _Compendium_updateMutation2=_interopRequireDefault(_Compendium_updateMutation);
var _ResponsiveContentArea=require('../../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Compendium=function(_React$Component){_inherits(Compendium,_React$Component);























function Compendium(props,context){_classCallCheck(this,Compendium);var _this=_possibleConstructorReturn(this,(Compendium.__proto__||Object.getPrototypeOf(Compendium)).call(this,
props,context));_this.























_handleUpdate=function(Compendium){
_this.context.relay.commitUpdate(
new _Compendium_updateMutation2.default({
Compendium:Compendium,
Compendium_FirstTextInput:_this.state.Compendium_FirstTextInput,
Compendium_RangedNumber:_this.state.Compendium_RangedNumber,
Compendium_Excitement:_this.state.Compendium_Excitement,
Compendium_FollowUpQuestion:_this.state.Compendium_FollowUpQuestion,
Compendium_FavoriteMammal:_this.state.Compendium_FavoriteMammal,
Compendium_FavoriteMammalOtherText:_this.state.Compendium_FavoriteMammalOtherText,
Compendium_LastText:_this.state.Compendium_LastText,
Compendium_LikedSunset_Ocean:_this.state.Compendium_LikedSunset_Ocean,
Compendium_LikedSunset_Lake:_this.state.Compendium_LikedSunset_Lake,
Compendium_LikedSunset_Mountains:_this.state.Compendium_LikedSunset_Mountains,
Compendium_LikedSunset_Plains:_this.state.Compendium_LikedSunset_Plains,
Compendium_LikedSunset_Purple:_this.state.Compendium_LikedSunset_Purple,
Compendium_LikedSunset_Green:_this.state.Compendium_LikedSunset_Green,
Compendium_LikedSunset_Other:_this.state.Compendium_LikedSunset_Other,
Compendium_LikedSunset_OtherText:_this.state.Compendium_LikedSunset_OtherText}));


};_this.

_handle_onChange_Compendium_FirstTextInput=function(event){
_this.setState({Compendium_FirstTextInput:event.target.value});
};_this.

_handle_onChange_Compendium_RangedNumber=function(event){
var value=event.target.value;
var valueInt=parseInt(value,10);

if(isNaN(valueInt))valueInt=0;

_this.setState({Compendium_RangedNumber:valueInt});

var errorText='Enter a number between 18 and 65';

if(value==valueInt)if(valueInt>=18&&valueInt<=65)errorText='';

_this.setState({Compendium_RangedNumber_error:errorText});
};_this.

_handle_onChange_Compendium_Excitement=function(event,index,value){
_this.setState({Compendium_Excitement:value});
};_this.

_handle_onChange_Compendium_LastText=function(event){
_this.setState({Compendium_LastText:event.target.value});
};_this.

_handle_onChange_Compendium_FollowUpQuestion=function(event){
_this.setState({Compendium_FollowUpQuestion:event.target.value});
};_this.

_handle_onChange_Compendium_FavoriteMammal=function(event,index,value){
_this.setState({Compendium_FavoriteMammal:value});
};_this.

_handle_onChange_Compendium_FavoriteMammalOtherText=function(event){
_this.setState({Compendium_FavoriteMammalOtherText:event.target.value});
};_this.

_handle_onChange_Compendium_LikedSunset_Ocean=function(event,value){
_this.setState({Compendium_LikedSunset_Ocean:value});
};_this.

_handle_onChange_Compendium_LikedSunset=function(event,value){
_this.setState({Compendium_LikedSunset_Lake:value});
};_this.

_handle_onChange_Compendium_LikedSunset_Mountains=function(event,value){
_this.setState({Compendium_LikedSunset_Mountains:value});
};_this.

_handle_onChange_Compendium_LikedSunset_Plains=function(event,value){
_this.setState({Compendium_LikedSunset_Plains:value});
};_this.

_handle_onChange_Compendium_LikedSunset_Purple=function(event,value){
_this.setState({Compendium_LikedSunset_Purple:value});
};_this.

_handle_onChange_Compendium_LikedSunset_Green=function(event,value){
_this.setState({Compendium_LikedSunset_Green:value});
};_this.

_handle_onChange_Compendium_LikedSunset_Other=function(event,value){
_this.setState({Compendium_LikedSunset_Other:value});
};_this.

_handle_onChange_Compendium_LikedSunset_OtherText=function(event){
_this.setState({Compendium_LikedSunset_OtherText:event.target.value});
};var node=_this.props.Viewer.compendiums.edges[0].node;_this.state={Compendium_RangedNumber_error:'',Compendium_FirstTextInput:node.Compendium_FirstTextInput,Compendium_RangedNumber:node.Compendium_RangedNumber,Compendium_Excitement:node.Compendium_Excitement,Compendium_FollowUpQuestion:node.Compendium_FollowUpQuestion,Compendium_FavoriteMammal:node.Compendium_FavoriteMammal,Compendium_FavoriteMammalOtherText:node.Compendium_FavoriteMammalOtherText,Compendium_LastText:node.Compendium_LastText,Compendium_LikedSunset_Ocean:node.Compendium_LikedSunset_Ocean,Compendium_LikedSunset_Lake:node.Compendium_LikedSunset_Lake,Compendium_LikedSunset_Mountains:node.Compendium_LikedSunset_Mountains,Compendium_LikedSunset_Plains:node.Compendium_LikedSunset_Plains,Compendium_LikedSunset_Purple:node.Compendium_LikedSunset_Purple,Compendium_LikedSunset_Green:node.Compendium_LikedSunset_Green,Compendium_LikedSunset_Other:node.Compendium_LikedSunset_Other,Compendium_LikedSunset_OtherText:node.Compendium_LikedSunset_OtherText};return _this;}_createClass(Compendium,[{key:'render',value:function render()

{var _this2=this;

var formErrorText='';
if(this.state.Compendium_RangedNumber_error!='')formErrorText='There are errors';

var edge=this.props.Viewer.compendiums.edges[0];

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card.Card,{key:edge.node.id},
_react2.default.createElement(_Card.CardHeader,{
title:'User Compendium',
subtitle:'One to one properties for a user retrieved from an edge'}),

_react2.default.createElement(_Card.CardText,null,
_react2.default.createElement('div',null,
_react2.default.createElement(_TextField2.default,{
value:this.state.Compendium_FirstTextInput,
floatingLabelText:'When we do a Haiku',
fullWidth:true,
onChange:this._handle_onChange_Compendium_FirstTextInput}),

_react2.default.createElement(_TextField2.default,{
value:this.state.Compendium_RangedNumber,
floatingLabelText:'A number between eighteen and sixty',
fullWidth:true,
errorText:this.state.Compendium_RangedNumber_error,
onChange:this._handle_onChange_Compendium_RangedNumber}),

_react2.default.createElement(_SelectField2.default,{
value:this.state.Compendium_FavoriteMammal,
floatingLabelText:'Which one is your favorite water mammal?',
fullWidth:true,
onChange:this._handle_onChange_Compendium_FavoriteMammal},

_react2.default.createElement(_MenuItem2.default,{value:1,primaryText:'Dolphin'}),
_react2.default.createElement(_MenuItem2.default,{value:2,primaryText:'Whale'}),
_react2.default.createElement(_MenuItem2.default,{value:3,primaryText:'Manatee'}),
_react2.default.createElement(_MenuItem2.default,{value:4,primaryText:'Other'})),

this.state.Compendium_FavoriteMammal!=4||
_react2.default.createElement(_TextField2.default,{
value:this.state.Compendium_FavoriteMammalOtherText,
fullWidth:true,
onChange:this._handle_onChange_Compendium_FavoriteMammalOtherText}),

_react2.default.createElement(_TextField2.default,{
value:this.state.Compendium_FollowUpQuestion,
floatingLabelText:'The middle has',
fullWidth:true,
onChange:this._handle_onChange_Compendium_FollowUpQuestion}),

_react2.default.createElement(_SelectField2.default,{
value:this.state.Compendium_Excitement,
floatingLabelText:'How excited are you about Relay?',
fullWidth:true,
onChange:this._handle_onChange_Compendium_Excitement},

_react2.default.createElement(_MenuItem2.default,{value:1,primaryText:'Ambivalent, just meh',label:'Ambivalent'}),
_react2.default.createElement(_MenuItem2.default,{value:2,primaryText:'Cautious, been burnt before',label:'Cautious'}),
_react2.default.createElement(_MenuItem2.default,{
value:3,
primaryText:'Optimistic, Facebook made it!',
label:'Optimistic'}),

_react2.default.createElement(_MenuItem2.default,{
value:4,
primaryText:'Excited, I can do so much with it',
label:'Excited'}),

_react2.default.createElement(_MenuItem2.default,{
value:5,
primaryText:'Enthusiastic, great productivity',
label:'Enthusiastic'}),

_react2.default.createElement(_MenuItem2.default,{value:6,primaryText:'Ecstatic, death to REST!',label:'Ecstatic'}),
_react2.default.createElement(_MenuItem2.default,{value:7,primaryText:'Riled Up, can\'t wait for 1.0',label:'Riled Up'}),
_react2.default.createElement(_MenuItem2.default,{
value:8,
primaryText:'Mind = Blown, I will become a contributor',
label:'Mind = Blown'})),


_react2.default.createElement(_TextField2.default,{
value:this.state.Compendium_LastText,
floatingLabelText:'More than both the beginning and the end',
fullWidth:true,
onChange:this._handle_onChange_Compendium_LastText}),

_react2.default.createElement('div',null,'What kind of sunsets do you like?'),


_react2.default.createElement(_Checkbox2.default,{
label:'Over the ocean',
defaultChecked:this.state.Compendium_LikedSunset_Ocean,
onCheck:this._handle_onChange_Compendium_LikedSunset_Ocean}),

_react2.default.createElement(_Checkbox2.default,{
label:'Over a lake',
defaultChecked:this.state.Compendium_LikedSunset_Lake,
onCheck:this._handle_onChange_Compendium_LikedSunset}),

_react2.default.createElement(_Checkbox2.default,{
label:'From a mountain top',
defaultChecked:this.state.Compendium_LikedSunset_Mountains,
onCheck:this._handle_onChange_Compendium_LikedSunset_Mountains}),

_react2.default.createElement(_Checkbox2.default,{
label:'Over plains',
defaultChecked:this.state.Compendium_LikedSunset_Plains,
onCheck:this._handle_onChange_Compendium_LikedSunset_Plains}),

_react2.default.createElement(_Checkbox2.default,{
label:'Purple',
defaultChecked:this.state.Compendium_LikedSunset_Purple,
onCheck:this._handle_onChange_Compendium_LikedSunset_Purple}),

_react2.default.createElement(_Checkbox2.default,{
label:'Green',
defaultChecked:this.state.Compendium_LikedSunset_Green,
onCheck:this._handle_onChange_Compendium_LikedSunset_Green}),

_react2.default.createElement(_Checkbox2.default,{
label:'Other',
defaultChecked:this.state.Compendium_LikedSunset_Other,
onCheck:this._handle_onChange_Compendium_LikedSunset_Other}),

!this.state.Compendium_LikedSunset_Other||
_react2.default.createElement(_TextField2.default,{
value:this.state.Compendium_LikedSunset_OtherText,
fullWidth:true,
onChange:this._handle_onChange_Compendium_LikedSunset_OtherText}),

_react2.default.createElement('div',null,
_react2.default.createElement(_RaisedButton2.default,{
label:'Update',
secondary:true,
disabled:formErrorText!='',
onTouchTap:function onTouchTap(){return _this2._handleUpdate(edge.node);}})))))));







}}]);return Compendium;}(_react2.default.Component);Compendium.contextTypes={relay:_reactRelay2.default.PropTypes.Environment};exports.default=


_reactRelay2.default.createContainer(Compendium,{
fragments:{
Viewer:function Viewer(){return function(RQL_0){return{children:[{calls:[{kind:'Call',metadata:{type:'Int'},name:'first',value:{kind:'CallValue',callValue:1}}],children:[{children:[{children:[].concat.apply([],[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'Compendium_FirstTextInput',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_RangedNumber',kind:'Field',metadata:{},type:'Int'},{fieldName:'Compendium_Excitement',kind:'Field',metadata:{},type:'Int'},{fieldName:'Compendium_FollowUpQuestion',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_FavoriteMammal',kind:'Field',metadata:{},type:'Int'},{fieldName:'Compendium_FavoriteMammalOtherText',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_LastText',kind:'Field',metadata:{},type:'String'},{fieldName:'Compendium_LikedSunset_Ocean',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Lake',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Mountains',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Plains',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Purple',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Green',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_Other',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'Compendium_LikedSunset_OtherText',kind:'Field',metadata:{},type:'String'},_reactRelay2.default.QL.__frag(RQL_0)]),fieldName:'node',kind:'Field',metadata:{canHaveSubselections:true,inferredRootCallName:'node',inferredPrimaryKey:'id',isRequisite:true},type:'Compendium'},{fieldName:'cursor',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'String'}],fieldName:'edges',kind:'Field',metadata:{canHaveSubselections:true,isPlural:true},type:'CompendiumsEdge'},{children:[{fieldName:'hasNextPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'},{fieldName:'hasPreviousPage',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'Boolean'}],fieldName:'pageInfo',kind:'Field',metadata:{canHaveSubselections:true,isGenerated:true,isRequisite:true},type:'PageInfo'}],fieldName:'compendiums',kind:'Field',metadata:{canHaveSubselections:true,isConnection:true},type:'CompendiumsConnection'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'Compendium_ViewerRelayQL',type:'Viewer'};}(




















_Compendium_updateMutation2.default.getFragment('Compendium'));}}});
//# sourceMappingURL=Compendium.js.map