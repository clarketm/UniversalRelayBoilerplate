Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _styles=require('material-ui/styles');
var _List=require('material-ui/List');var _List2=_interopRequireDefault(_List);
var _Toolbar=require('material-ui/Toolbar');var _Toolbar2=_interopRequireDefault(_Toolbar);
var _Drawer=require('material-ui/Drawer');var _Drawer2=_interopRequireDefault(_Drawer);
var _Typography=require('material-ui/Typography');var _Typography2=_interopRequireDefault(_Typography);
var _Divider=require('material-ui/Divider');var _Divider2=_interopRequireDefault(_Divider);

var _AppDrawerNavItem=require('./AppDrawerNavItem');var _AppDrawerNavItem2=_interopRequireDefault(_AppDrawerNavItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styleSheet=(0,_styles.createStyleSheet)('AppDrawer',function(theme){return{
paper:{
width:250,
backgroundColor:theme.palette.background.paper},

title:{
color:theme.palette.text.secondary,
'&:hover':{
color:theme.palette.primary[500]}},


toolbar:{
flexDirection:'column',
alignItems:'flex-start',
justifyContent:'center'},

anchor:{
color:theme.palette.text.secondary}};});



function renderNavItems(){
return(
_react2.default.createElement(_List2.default,null,
_react2.default.createElement(_AppDrawerNavItem2.default,{key:1,openImmediately:true,title:'To Dos',to:'/todo'}),
_react2.default.createElement(_AppDrawerNavItem2.default,{key:2,openImmediately:true,title:'Ensayo edit',to:'/ensayo/edit'}),
_react2.default.createElement(_AppDrawerNavItem2.default,{
key:3,
openImmediately:true,
title:'Ensayo in place',
to:'/ensayo/in-place-edit'}),

_react2.default.createElement(_AppDrawerNavItem2.default,{key:4,openImmediately:true,title:'Ensayo public',to:'/ensayo'})));


}

function reduceChildRoutes(props,items,childRoute,index){
if(childRoute.nav){
if(childRoute.childRoutes&&childRoute.childRoutes.length){
var openImmediately=props.routes.indexOf(childRoute)!==-1||false;
items.push(
_react2.default.createElement(_AppDrawerNavItem2.default,{key:index,openImmediately:openImmediately,title:childRoute.title},
renderNavItems()));


}else{
items.push(
_react2.default.createElement(_AppDrawerNavItem2.default,{
key:index,
title:childRoute.title,
to:childRoute.path,
onClick:props.onRequestClose}));


}
}
return items;
}

function AppDrawer(props){
var classes=props.classes;
var GITHUB_RELEASE_BASE_URL='https://github.com/callemall/material-ui/releases/tag/';

return(
_react2.default.createElement(_Drawer2.default,{
className:props.className,
classes:{
paper:classes.paper},

open:props.open,
onRequestClose:props.onRequestClose,
docked:props.docked,
keepMounted:true},

_react2.default.createElement('div',{className:classes.nav},
_react2.default.createElement(_Toolbar2.default,{className:classes.toolbar},
_react2.default.createElement(_Typography2.default,{type:'title',gutterBottom:true,color:'inherit'},'Material-UI'),


_react2.default.createElement(_Divider2.default,{absolute:true})),

renderNavItems())));



}



AppDrawer.propTypes={
classes:_propTypes2.default.object.isRequired,
className:_propTypes2.default.string,
docked:_propTypes2.default.bool.isRequired,
onRequestClose:_propTypes2.default.func.isRequired,
open:_propTypes2.default.bool.isRequired};exports.default=


(0,_styles.withStyles)(styleSheet)(AppDrawer);
//# sourceMappingURL=AppDrawer.js.map