Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Button=require('material-ui/Button');var _Button2=_interopRequireDefault(_Button);
var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _Progress=require('material-ui/Progress');
var _styles=require('material-ui/styles');
var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);
var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=function styles(theme){return{
card:{
minWidth:275}};};var



NewUserScreen=function(_React$Component){_inherits(NewUserScreen,_React$Component);










function NewUserScreen(props,context){var _this2=this;_classCallCheck(this,NewUserScreen);var _this=_possibleConstructorReturn(this,(NewUserScreen.__proto__||Object.getPrototypeOf(NewUserScreen)).call(this,
props,context));_this.









_handle_onClick_Create=function _callee(){var _this$state,UserAccount_Identifier,User_Secret,loc,host,response,responseData;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$state=
_this.state,UserAccount_Identifier=_this$state.UserAccount_Identifier,User_Secret=_this$state.User_Secret;

_this.setState({
currentOperation:'creating',
User_Secret:''});_context.prev=2;



loc=window.location;
host=loc.protocol+'//'+loc.hostname+':'+loc.port;_context.next=7;return regeneratorRuntime.awrap(

fetch(host+'/auth/createuser',{
method:'POST',
credentials:'same-origin',
headers:{
'Content-Type':'application/json'},

body:JSON.stringify({
UserAccount_Identifier:UserAccount_Identifier,
User_Secret:User_Secret})}));case 7:response=_context.sent;_context.next=10;return regeneratorRuntime.awrap(



response.json());case 10:responseData=_context.sent;

console.log('CREATE USER RESPONSE');
console.log(responseData);

if(responseData.success){

_this.setState({currentOperation:'success'});
}else{

_this.setState({
currentOperation:'failure',
errorMessage:responseData.error});

}_context.next=19;break;case 16:_context.prev=16;_context.t0=_context['catch'](2);



_this.setState({
currentOperation:'failure',
errorMessage:
'Did not receive proper response from server. Please try again. Message:'+
_context.t0.message});case 19:case'end':return _context.stop();}}},null,_this2,[[2,16]]);};_this.




_handle_onClick_CancelCreation=function(){
_this.setState({
currentOperation:'failure',
errorMessage:'User creation has been canceled'});

};_this.

_handle_onClick_TryAgain=function(){
_this.setState({
currentOperation:'prompt',
errorMessage:''});

};_this.

_handle_onClick_Continue=function(){
window.location.replace('/');
};_this.state={currentOperation:'prompt',errorMessage:'',UserAccount_Identifier:'',User_Secret:''};return _this;}_createClass(NewUserScreen,[{key:'renderCreating',value:function renderCreating()

{var
classes=this.props.classes;var
UserAccount_Identifier=this.state.UserAccount_Identifier;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Creating user'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'Creating user',

_react2.default.createElement('br',null),
UserAccount_Identifier,
_react2.default.createElement('br',null),'Please wait.'),


_react2.default.createElement(_Progress.LinearProgress,{mode:'query'}),
_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_CancelCreation},'Cancel'))));



}},{key:'renderSuccess',value:function renderSuccess()

{var
classes=this.props.classes;var
UserAccount_Identifier=this.state.UserAccount_Identifier;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Creating user'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'Created user',

_react2.default.createElement('br',null),
UserAccount_Identifier),

_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_Continue},'Continue'))));



}},{key:'renderFailure',value:function renderFailure()

{var
classes=this.props.classes;var _state=
this.state,UserAccount_Identifier=_state.UserAccount_Identifier,errorMessage=_state.errorMessage;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Creating user'}),
_react2.default.createElement(_Typography2.default,{component:'p'},'Failed creating user',

_react2.default.createElement('br',null),
UserAccount_Identifier,
_react2.default.createElement('br',null),'Reason: ',
errorMessage),

_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_TryAgain},'Try Again'))));



}},{key:'renderPrompt',value:function renderPrompt()

{var _this3=this;var
classes=this.props.classes;var _state2=
this.state,UserAccount_Identifier=_state2.UserAccount_Identifier,User_Secret=_state2.User_Secret;

return(
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Create New User'}),
_react2.default.createElement(_TextField2.default,{
label:'Account Name',
fullWidth:true,
value:UserAccount_Identifier,
onChange:function onChange(event){return(
_this3.setState({UserAccount_Identifier:event.target.value}));}}),

_react2.default.createElement(_TextField2.default,{
label:'Password',
type:'password',
fullWidth:true,
value:User_Secret,
onChange:function onChange(event){return _this3.setState({User_Secret:event.target.value});}}),

_react2.default.createElement(_Card.CardActions,null,
_react2.default.createElement(_Button2.default,{onClick:this._handle_onClick_Create},'Create'))));



}},{key:'render',value:function render()

{var
currentOperation=this.state.currentOperation;

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
currentOperation==='prompt'&&this.renderPrompt(),
currentOperation==='creating'&&this.renderCreating(),
currentOperation==='success'&&this.renderSuccess(),
currentOperation==='failure'&&this.renderFailure()));


}}]);return NewUserScreen;}(_react2.default.Component);exports.default=


(0,_styles.withStyles)(styles)(NewUserScreen);
//# sourceMappingURL=NewUserScreen.js.map