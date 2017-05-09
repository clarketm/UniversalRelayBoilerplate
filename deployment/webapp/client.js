var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _isomorphicRelay=require('isomorphic-relay');var _isomorphicRelay2=_interopRequireDefault(_isomorphicRelay);
var _isomorphicRelayRouter=require('isomorphic-relay-router');var _isomorphicRelayRouter2=_interopRequireDefault(_isomorphicRelayRouter);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);
var _reactRouter=require('react-router');
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);
var _reactRelayNetworkLayer=require('react-relay-network-layer');
var _reactTapEventPlugin=require('react-tap-event-plugin');var _reactTapEventPlugin2=_interopRequireDefault(_reactTapEventPlugin);

var _routes=require('../configuration/webapp/routes');var _routes2=_interopRequireDefault(_routes);
require('./styles/main.css');
var _Wrapper=require('./components/Wrapper');var _Wrapper2=_interopRequireDefault(_Wrapper);
var _XHR=require('./scripts/XHR');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



(0,_reactTapEventPlugin2.default)();



var data=JSON.parse(document.getElementById('preloadedData').textContent);





var UserToken2="";
for(var _iterator=data,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var fragment=_ref;
var authTokenInThisFragment=fragment.response.Viewer.UserToken2;
if(authTokenInThisFragment!=null){
UserToken2=authTokenInThisFragment;
break;
}
}


if(UserToken2.length==0)
alert('Authentication token retrieval failed');




var relay=new _reactRelay2.default.Environment();

relay.injectNetworkLayer(new _reactRelayNetworkLayer.RelayNetworkLayer(
[
(0,_reactRelayNetworkLayer.urlMiddleware)({
url:'/graphql'}),

function(next){return function(req){
req.headers['UserToken2']=UserToken2;
req.credentials='same-origin';
return next(req);
};},
function(next){return function(req){
return next(req).
then(function(res){
if(res.json.error){
alert(res.json.error);
if(res.json.error=='Authentication Failed'){

var loc=window.location;
var host=loc.protocol+"//"+loc.hostname+":"+loc.port;

(0,_XHR.postXHR)(host+'/auth/logout',{},
function(){
alert("Your account could not be found. You have been logged out.");
location.replace(location.href);
},
function(){
alert("Your account could not be found. An attempt has been made to log you out, which did not succeed.");
location.replace(location.href);
});

}
}else if(res.json.errors)
alert('GraphQL errors occurred! TODO: x2000 provide error handling');
return res;
});
};}],
{
disableBatchQuery:true}));



function logPageView(){


}

_isomorphicRelay2.default.injectPreparedData(relay,data);
var rootElement=document.getElementById('root');

(0,_reactRouter.match)({routes:_routes2.default,history:_reactRouter.browserHistory},function(error,redirectLocation,renderProps){

_isomorphicRelayRouter2.default.prepareInitialRender(relay,renderProps).then(function(props){

_reactDom2.default.render(
_react2.default.createElement(_Wrapper2.default,null,

_react2.default.createElement(_reactRouter.Router,_extends({},props,{onUpdate:logPageView}))),

rootElement);


});

});
//# sourceMappingURL=client.js.map