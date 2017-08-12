Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _classnames=require('classnames');var _classnames2=_interopRequireDefault(_classnames);
var _found=require('found');
var _styles=require('material-ui/styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var styleSheet=(0,_styles.createStyleSheet)('Link',function(theme){return{
root:{
color:'inherit',
textDecoration:'none',
'&:hover':{
textDecoration:'underline'}},


primary:{
color:theme.palette.primary[500]},

accent:{
color:theme.palette.accent.A400}};});



function Link(props){var _classNames;var
ComponentProp=props.component,classes=props.classes,className=props.className,variant=props.variant,to=props.to,other=_objectWithoutProperties(props,['component','classes','className','variant','to']);

var Component=void 0;

if(ComponentProp){
Component=ComponentProp;
}else if(to){
Component=_found.Link;
}else{
Component='a';
}

return(
_react2.default.createElement(Component,_extends({
to:to,
className:(0,_classnames2.default)(
classes.root,(_classNames={},_defineProperty(_classNames,

classes.primary,variant==='primary'),_defineProperty(_classNames,
classes.accent,variant==='accent'),_classNames),

className)},

other)));


}

Link.propTypes={
classes:_propTypes2.default.object.isRequired,
className:_propTypes2.default.string,
component:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.func]),
to:_propTypes2.default.string,
variant:_propTypes2.default.oneOf(['primary','accent'])};exports.default=


(0,_styles.withStyles)(styleSheet)(Link);
//# sourceMappingURL=Link.js.map