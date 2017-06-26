Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _isomorphicVars=require('../scripts/isomorphicVars');var _isomorphicVars2=_interopRequireDefault(_isomorphicVars);
var _ResponsiveContentArea=require('../../../webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

HomeScreen=function(_React$Component){_inherits(HomeScreen,_React$Component);function HomeScreen(){_classCallCheck(this,HomeScreen);return _possibleConstructorReturn(this,(HomeScreen.__proto__||Object.getPrototypeOf(HomeScreen)).apply(this,arguments));}_createClass(HomeScreen,[{key:'render',value:function render()
{
var isoVars=(0,_isomorphicVars2.default)();

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{
title:'Universal Relay Boilerplate',
subtitle:'Build version '+isoVars.BuildVersion}),

_react2.default.createElement(_Card.CardText,null,'The purpose of this project is:',

_react2.default.createElement('ul',null,
_react2.default.createElement('li',null,'To serve as a starting point for projects involving react/relay, materual-ui and Cassandra.'),



_react2.default.createElement('li',null,'To host examples of using those technologies together.'),
_react2.default.createElement('li',null,'To implement some common functionality like user authentication using react/relay while storing user accounts in Cassandra.')),




_react2.default.createElement('a',{href:'http://codefoundries.com/products/UniversalRelayBoilerplate.html'},'PROJECT HOME'),


_react2.default.createElement('br',null))),


_react2.default.createElement('br',null),
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{
title:'Isomorphic Variables',
subtitle:'Available both for client and server rendering'}),

_react2.default.createElement(_Card.CardText,null,
_react2.default.createElement('p',null,'Build Version: ',isoVars.BuildVersion))),


_react2.default.createElement('br',null),
_react2.default.createElement(_Card.Card,null,
_react2.default.createElement(_Card.CardHeader,{title:'GraphiQL',subtitle:'Explore the GraphQL server'}),
_react2.default.createElement(_Card.CardText,null,'Please notice that the links below will work only when you set the',

' ',_react2.default.createElement('b',null,'USER_TOKEN_2_BYPASS_IP'),' to be your browser\'s IP address. All other IPs will not be able to authenticate for security reasons. Use that option with caution. It is best if it is set to 127.0.0.1 as by default.',


_react2.default.createElement('br',null),'All links open in a new window.',

_react2.default.createElement('br',null),
_react2.default.createElement('a',{href:'/graphql',target:'_blank'},'GraphiQL browser'),
_react2.default.createElement('br',null),
_react2.default.createElement('a',{
href:'/graphql?query=query%20ViewerQueries%20%7B%0A%20%20Viewer%20%7B%0A%20%20id%0A%20%20User_DisplayName%0A%20%20User_ProfilePhoto%0A%20%20User_Email%0A%20%20User_Locale%0A%20%20%7D%0A%7D%0A',
target:'_blank'},'Simple query requesting some of the viewer object type fields'),



_react2.default.createElement('br',null),
_react2.default.createElement('a',{
href:'/graphql?query=query%20ViewerQueries%20%7B%0A%20%20Viewer%20%7B%0A%20%20%20%20id%0A%20%20%20%20Ensayos(first%3A%202147483647)%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20Ensayo_Title%0A%20%20%20%20%20%20%20%20%20%20Ensayo_Description%0A%20%20%20%20%20%20%20%20%20%20Ensayo_Content%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A',
target:'_blank'},'Titles of the essays available in the system'),



_react2.default.createElement('br',null),
_react2.default.createElement('a',{
href:'/graphql?query=query%20IntrospectionQuery%20%7B%0A%20%20__schema%20%7B%0A%20%20%20%20queryType%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20mutationType%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20types%20%7B%0A%20%20%20%20%20%20...FullType%0A%20%20%20%20%7D%0A%20%20%20%20directives%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20args%20%7B%0A%20%20%20%20%20%20%20%20...InputValue%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20onOperation%0A%20%20%20%20%20%20onFragment%0A%20%20%20%20%20%20onField%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20FullType%20on%20__Type%20%7B%0A%20%20kind%0A%20%20name%0A%20%20description%0A%20%20fields%20%7B%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20args%20%7B%0A%20%20%20%20%20%20...InputValue%0A%20%20%20%20%7D%0A%20%20%20%20type%20%7B%0A%20%20%20%20%20%20...TypeRef%0A%20%20%20%20%7D%0A%20%20%20%20isDeprecated%0A%20%20%20%20deprecationReason%0A%20%20%7D%0A%20%20inputFields%20%7B%0A%20%20%20%20...InputValue%0A%20%20%7D%0A%20%20interfaces%20%7B%0A%20%20%20%20...TypeRef%0A%20%20%7D%0A%20%20enumValues%20%7B%0A%20%20%20%20name%0A%20%20%20%20description%0A%20%20%20%20isDeprecated%0A%20%20%20%20deprecationReason%0A%20%20%7D%0A%20%20possibleTypes%20%7B%0A%20%20%20%20...TypeRef%0A%20%20%7D%0A%7D%0A%0Afragment%20InputValue%20on%20__InputValue%20%7B%0A%20%20name%0A%20%20description%0A%20%20type%20%7B%0A%20%20%20%20...TypeRef%0A%20%20%7D%0A%20%20defaultValue%0A%7D%0A%0Afragment%20TypeRef%20on%20__Type%20%7B%0A%20%20kind%0A%20%20name%0A%20%20ofType%20%7B%0A%20%20%20%20kind%0A%20%20%20%20name%0A%20%20%20%20ofType%20%7B%0A%20%20%20%20%20%20kind%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20ofType%20%7B%0A%20%20%20%20%20%20%20%20kind%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A',
target:'_blank'},'Self-introspection query')))));







}}]);return HomeScreen;}(_react2.default.Component);exports.default=


_reactRelay2.default.createContainer(HomeScreen,{
fragments:{
Viewer:function Viewer(){return function(){return{children:[{fieldName:'User_IsAnonymous',kind:'Field',metadata:{},type:'Boolean'},{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'HomeScreen_ViewerRelayQL',type:'Viewer'};}();}}});
//# sourceMappingURL=HomeScreen.js.map