Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ViewportDimensions=function(){




function ViewportDimensions(){var _this=this;_classCallCheck(this,ViewportDimensions);this.

















































removeComponent=function(component){
_this.subscribedComponents.delete(component);
};this.

handle_onResize=function(){
var totalWidth=window.innerWidth;
var totalHeight=window.innerHeight;


var changesMade={};

if(totalWidth!==_this.viewportDimensions.totalWidth){
changesMade.totalWidth=true;
_this.viewportDimensions.totalWidth=totalWidth;
}

if(totalHeight!==_this.viewportDimensions.totalHeight){
changesMade.totalHeight=true;
_this.viewportDimensions.totalHeight=totalHeight;
}


var viewportDimensionsVersion=++_this.viewportDimensionsVersion;

var componentsToUpdate=[];


for(var _iterator=_this.subscribedComponents,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();;){var _ref3;if(_isArray){if(_i>=_iterator.length)break;_ref3=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref3=_i.value;}var _ref=_ref3;var _ref2=_slicedToArray(_ref,2);var component=_ref2[0];var dimensionsSubscribed=_ref2[1];
if(component.viewportDimensionsVersion!==viewportDimensionsVersion){
component.viewportDimensionsVersion=viewportDimensionsVersion;


var mustUpdate=false;
for(var dimension in dimensionsSubscribed){
if(changesMade[dimension]){
mustUpdate=true;
break;
}}


if(mustUpdate)componentsToUpdate.push(component);
}
}


if(window&&window.setTimeout)
window.setTimeout(function(){
for(var _iterator2=componentsToUpdate,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?typeof Symbol==='function'?Symbol.iterator:'@@iterator':'@@iterator']();;){var _ref4;if(_isArray2){if(_i2>=_iterator2.length)break;_ref4=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref4=_i2.value;}var _component=_ref4;
try{
_component.forceUpdate();
}catch(err){


}}
});
};this.subscribedComponents=new Map();this.viewportDimensionsVersion=1;this.viewportDimensions={totalWidth:0,totalHeight:0};}_createClass(ViewportDimensions,[{key:'get',value:function get(component,dimensionName){component.viewportDimensionsVersion=this.viewportDimensionsVersion;var subscriptionInfo=this.subscribedComponents.get(component);if(subscriptionInfo==null){subscriptionInfo={};this.subscribedComponents.set(component,subscriptionInfo);var self=this;if(component.componentWillUnmount){var currentFunction=component.componentWillUnmount.bind(component);component.componentWillUnmount=function(){self.removeComponent(component);currentFunction();};}else component.componentWillUnmount=function(){self.removeComponent(component);};}subscriptionInfo[dimensionName]=true;var dimensionValue=this.viewportDimensions[dimensionName];if(dimensionValue==null)throw new Error('Could not find viewport dimension named '+dimensionName);return dimensionValue;}}]);return ViewportDimensions;}();exports.default=ViewportDimensions;
//# sourceMappingURL=ViewportDimensions.js.map