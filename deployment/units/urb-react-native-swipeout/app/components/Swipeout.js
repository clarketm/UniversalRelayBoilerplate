Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _reactTweenState=require('react-tween-state');var _reactTweenState2=_interopRequireDefault(_reactTweenState);
var _NativeButton=require('./NativeButton');var _NativeButton2=_interopRequireDefault(_NativeButton);
var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);

var _react=require('react');var _react2=_interopRequireDefault(_react);




var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}







var SwipeoutBtn=_react2.default.createClass({displayName:'SwipeoutBtn',

propTypes:{
backgroundColor:_react.PropTypes.string,
color:_react.PropTypes.string,
component:_react.PropTypes.node,
onPress:_react.PropTypes.func,
text:_react.PropTypes.string,
type:_react.PropTypes.string,
underlayColor:_react.PropTypes.string},


getDefaultProps:function getDefaultProps(){
return{
backgroundColor:null,
color:null,
component:null,
underlayColor:null,
height:0,
key:null,
onPress:null,
disabled:false,
text:'Click me',
type:'',
width:0};

},

render:function render(){
var btn=this.props;

var styleSwipeoutBtn=[_styles2.default.swipeoutBtn];


if(btn.type==='delete')styleSwipeoutBtn.push(_styles2.default.colorDelete);else
if(btn.type==='primary')styleSwipeoutBtn.push(_styles2.default.colorPrimary);else
if(btn.type==='secondary')styleSwipeoutBtn.push(_styles2.default.colorSecondary);


if(btn.backgroundColor)styleSwipeoutBtn.push([{backgroundColor:btn.backgroundColor}]);

styleSwipeoutBtn.push([{
height:btn.height,
width:btn.width}]);


var styleSwipeoutBtnComponent=[];


styleSwipeoutBtnComponent.push([{
height:btn.height,
width:btn.width}]);


var styleSwipeoutBtnText=[_styles2.default.swipeoutBtnText];


if(btn.color)styleSwipeoutBtnText.push([{color:btn.color}]);

return(
_react2.default.createElement(_NativeButton2.default,{
onPress:this.props.onPress,
style:_styles2.default.swipeoutBtnTouchable,
underlayColor:this.props.underlayColor,
disabled:this.props.disabled,
style:styleSwipeoutBtn,
textStyle:styleSwipeoutBtnText},

btn.component?
_react2.default.createElement(_reactNative.View,{style:styleSwipeoutBtnComponent},btn.component):

btn.text));




}});


var Swipeout=_react2.default.createClass({displayName:'Swipeout',
mixins:[_reactTweenState2.default.Mixin],

propTypes:{
autoClose:_react.PropTypes.bool,
backgroundColor:_react.PropTypes.string,
close:_react.PropTypes.bool,
left:_react.PropTypes.array,
onOpen:_react.PropTypes.func,
right:_react.PropTypes.array,
scroll:_react.PropTypes.func,
style:_reactNative.View.propTypes.style,
sensitivity:_react.PropTypes.number},


getDefaultProps:function getDefaultProps(){
return{
rowID:-1,
sectionID:-1,
sensitivity:0};

},

getInitialState:function getInitialState(){
return{
autoClose:this.props.autoClose||false,
btnWidth:0,
btnsLeftWidth:0,
btnsRightWidth:0,
contentHeight:0,
contentPos:0,
contentWidth:0,
openedRight:false,
swiping:false,
tweenDuration:160,
timeStart:null};

},

componentWillMount:function componentWillMount(){var _this=this;
this._panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(event,gestureState){return true;},
onMoveShouldSetPanResponder:function onMoveShouldSetPanResponder(event,gestureState){return(
Math.abs(gestureState.dx)>_this.props.sensitivity&&
Math.abs(gestureState.dy)>_this.props.sensitivity);},
onPanResponderGrant:this._handlePanResponderGrant,
onPanResponderMove:this._handlePanResponderMove,
onPanResponderRelease:this._handlePanResponderEnd,
onPanResponderTerminate:this._handlePanResponderEnd,
onShouldBlockNativeResponder:function onShouldBlockNativeResponder(event,gestureState){return true;}});

},

componentWillReceiveProps:function componentWillReceiveProps(nextProps){
if(nextProps.close)this._close();
},

_handlePanResponderGrant:function _handlePanResponderGrant(e,gestureState){var _this2=this;
if(this.props.onOpen){
this.props.onOpen(this.props.sectionID,this.props.rowID);
}
this.refs.swipeoutContent.measure(function(ox,oy,width,height){
_this2.setState({
btnWidth:width/5,
btnsLeftWidth:_this2.props.left?width/5*_this2.props.left.length:0,
btnsRightWidth:_this2.props.right?width/5*_this2.props.right.length:0,
swiping:true,
timeStart:new Date().getTime()});

});
},

_handlePanResponderMove:function _handlePanResponderMove(e,gestureState){
var posX=gestureState.dx;
var posY=gestureState.dy;
var leftWidth=this.state.btnsLeftWidth;
var rightWidth=this.state.btnsRightWidth;
if(this.state.openedRight)var posX=gestureState.dx-rightWidth;else
if(this.state.openedLeft)var posX=gestureState.dx+leftWidth;


var moveX=Math.abs(posX)>Math.abs(posY);
if(this.props.scroll){
if(moveX)this.props.scroll(false);else
this.props.scroll(true);
}
if(this.state.swiping){

if(posX<0&&this.props.right)this.setState({contentPos:Math.min(posX,0)});else
if(posX>0&&this.props.left)this.setState({contentPos:Math.max(posX,0)});
}
},

_handlePanResponderEnd:function _handlePanResponderEnd(e,gestureState){
var posX=gestureState.dx;
var contentPos=this.state.contentPos;
var contentWidth=this.state.contentWidth;
var btnsLeftWidth=this.state.btnsLeftWidth;
var btnsRightWidth=this.state.btnsRightWidth;


var openX=contentWidth*0.33;


var openLeft=posX>openX||posX>btnsLeftWidth/2;
var openRight=posX<-openX||posX<-btnsRightWidth/2;


if(this.state.openedRight)var openRight=posX-openX<-openX;
if(this.state.openedLeft)var openLeft=posX+openX>openX;


var timeDiff=new Date().getTime()-this.state.timeStart<200;
if(timeDiff){
var openRight=posX<-openX/10&&!this.state.openedLeft;
var openLeft=posX>openX/10&&!this.state.openedRight;
}

if(this.state.swiping){
if(openRight&&contentPos<0&&posX<0){

this._tweenContent('contentPos',-btnsRightWidth);
this.setState({contentPos:-btnsRightWidth,openedLeft:false,openedRight:true});
}else if(openLeft&&contentPos>0&&posX>0){

this._tweenContent('contentPos',btnsLeftWidth);
this.setState({contentPos:btnsLeftWidth,openedLeft:true,openedRight:false});
}else
{

this._tweenContent('contentPos',0);
this.setState({contentPos:0,openedLeft:false,openedRight:false});
}
}


if(this.props.scroll)this.props.scroll(true);
},

_tweenContent:function _tweenContent(state,endValue){
this.tweenState(state,{
easing:_reactTweenState2.default.easingTypes.easeInOutQuad,
duration:endValue===0?this.state.tweenDuration*1.5:this.state.tweenDuration,
endValue:endValue});

},

_rubberBandEasing:function _rubberBandEasing(value,limit){
if(value<0&&value<limit)return limit-Math.pow(limit-value,0.85);else
if(value>0&&value>limit)return limit+Math.pow(value-limit,0.85);
return value;
},


_autoClose:function _autoClose(btn){
var onPress=btn.onPress;
if(onPress)onPress();
if(this.state.autoClose)this._close();
},

_close:function _close(){
this._tweenContent('contentPos',0);
this.setState({
openedRight:false,
openedLeft:false});

},

render:function render(){
var contentWidth=this.state.contentWidth;
var posX=this.getTweeningValue('contentPos');

var styleSwipeout=[_styles2.default.swipeout,this.props.style];
if(this.props.backgroundColor){
styleSwipeout.push([{backgroundColor:this.props.backgroundColor}]);
}

var limit=-this.state.btnsRightWidth;
if(posX>0)var limit=this.state.btnsLeftWidth;

var styleLeftPos={
left:{
left:0,
overflow:'hidden',
width:Math.min(limit*(posX/limit),limit)}};


var styleRightPos={
right:{
left:Math.abs(contentWidth+Math.max(limit,posX)),
right:0}};


var styleContentPos={
content:{
left:this._rubberBandEasing(posX,limit)}};



var styleContent=[_styles2.default.swipeoutContent];
styleContent.push(styleContentPos.content);

var styleRight=[_styles2.default.swipeoutBtns];
styleRight.push(styleRightPos.right);

var styleLeft=[_styles2.default.swipeoutBtns];
styleLeft.push(styleLeftPos.left);

var isRightVisible=posX<0;
var isLeftVisible=posX>0;

return(
_react2.default.createElement(_reactNative.View,{style:styleSwipeout},
_react2.default.createElement(_reactNative.View,_extends({
ref:'swipeoutContent',
style:styleContent,
onLayout:this._onLayout},
this._panResponder.panHandlers),
this.props.children),

this._renderButtons(this.props.right,isRightVisible,styleRight),
this._renderButtons(this.props.left,isLeftVisible,styleLeft)));


},

_onLayout:function _onLayout(event){var _event$nativeEvent$la=
event.nativeEvent.layout,width=_event$nativeEvent$la.width,height=_event$nativeEvent$la.height;
this.setState({
contentWidth:width,
contentHeight:height});

},

_renderButtons:function _renderButtons(buttons,isVisible,style){
if(buttons&&isVisible){
return _react2.default.createElement(_reactNative.View,{style:style},
buttons.map(this._renderButton));

}else{
return(
_react2.default.createElement(_reactNative.View,null));

}
},

_renderButton:function _renderButton(btn,i){var _this3=this;
return(
_react2.default.createElement(SwipeoutBtn,{
backgroundColor:btn.backgroundColor,
color:btn.color,
component:btn.component,
disabled:btn.disabled,
height:this.state.contentHeight,
key:i,
onPress:function onPress(){return _this3._autoClose(btn);},
text:btn.text,
type:btn.type,
underlayColor:btn.underlayColor,
width:this.state.btnWidth}));

}});


Swipeout.NativeButton=_NativeButton2.default;
Swipeout.SwipeoutButton=SwipeoutBtn;exports.default=

Swipeout;
//# sourceMappingURL=Swipeout.js.map