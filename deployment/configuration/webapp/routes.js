Object.defineProperty(exports,"__esModule",{value:true});exports.queries=undefined;

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRouter=require('react-router');
var _reactRelay=require('react-relay');var _reactRelay2=_interopRequireDefault(_reactRelay);

var _Chrome=require('../../webapp/components/Chrome');var _Chrome2=_interopRequireDefault(_Chrome);
var _Compendium=require('../../units/urb-example-compendium/webapp/components/Compendium');var _Compendium2=_interopRequireDefault(_Compendium);
var _Ensayo_List=require('../../units/urb-example-ensayo/webapp/components/Ensayo_List');var _Ensayo_List2=_interopRequireDefault(_Ensayo_List);
var _Ensayo_Screen=require('../../units/urb-example-ensayo/webapp/components/Ensayo_Screen');var _Ensayo_Screen2=_interopRequireDefault(_Ensayo_Screen);
var _Ensayo_PublicItem=require('../../units/urb-example-ensayo/webapp/components/Ensayo_PublicItem');var _Ensayo_PublicItem2=_interopRequireDefault(_Ensayo_PublicItem);
var _Ensayo_PublicListing=require('../../units/urb-example-ensayo/webapp/components/Ensayo_PublicListing');var _Ensayo_PublicListing2=_interopRequireDefault(_Ensayo_PublicListing);
var _ForceLogin=require('../../units/urb-example-force-login/webapp/components/ForceLogin');var _ForceLogin2=_interopRequireDefault(_ForceLogin);
var _HomeScreen=require('./components/HomeScreen');var _HomeScreen2=_interopRequireDefault(_HomeScreen);
var _MUI_Icons=require('../../units/urb-example-mui/webapp/components/MUI_Icons');var _MUI_Icons2=_interopRequireDefault(_MUI_Icons);
var _MUI_Icons_CountryFlags=require('../../units/urb-example-mui/webapp/components/MUI_Icons_CountryFlags');var _MUI_Icons_CountryFlags2=_interopRequireDefault(_MUI_Icons_CountryFlags);
var _MUI_Icons_CreditCards=require('../../units/urb-example-mui/webapp/components/MUI_Icons_CreditCards');var _MUI_Icons_CreditCards2=_interopRequireDefault(_MUI_Icons_CreditCards);
var _MUI_Home=require('../../units/urb-example-mui/webapp/components/MUI_Home');var _MUI_Home2=_interopRequireDefault(_MUI_Home);
var _ToDo_List=require('../../units/urb-example-todo/webapp/components/ToDo_List');var _ToDo_List2=_interopRequireDefault(_ToDo_List);
var _ToDo_Screen=require('../../units/urb-example-todo/webapp/components/ToDo_Screen');var _ToDo_Screen2=_interopRequireDefault(_ToDo_Screen);
var _Translaticiarum_List=require('../../units/urb-example-translaticiarum/webapp/components/Translaticiarum_List');var _Translaticiarum_List2=_interopRequireDefault(_Translaticiarum_List);
var _Translaticiarum_Grid=require('../../units/urb-example-translaticiarum/webapp/components/Translaticiarum_Grid');var _Translaticiarum_Grid2=_interopRequireDefault(_Translaticiarum_Grid);
var _Translaticiarum_Screen=require('../../units/urb-example-translaticiarum/webapp/components/Translaticiarum_Screen');var _Translaticiarum_Screen2=_interopRequireDefault(_Translaticiarum_Screen);
var _User_Properties=require('../../units/urb-account-management/webapp/components/User_Properties');var _User_Properties2=_interopRequireDefault(_User_Properties);
var _User_UpdatePassword=require('../../units/urb-account-management/webapp/components/User_UpdatePassword');var _User_UpdatePassword2=_interopRequireDefault(_User_UpdatePassword);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var queries=exports.queries={
Viewer:function Viewer(){return function(){return{children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'Viewer',kind:'Query',metadata:{},name:'Routes',type:'Viewer'};}();}};exports.default=


(0,_reactRouter.createRoutes)(
_react2.default.createElement(_reactRouter.Route,{path:'/',component:_Chrome2.default,queries:queries},

_react2.default.createElement(_reactRouter.IndexRoute,{component:_HomeScreen2.default,queries:queries}),


_react2.default.createElement(_reactRouter.Route,{path:'compendium'},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_Compendium2.default,queries:queries})),


_react2.default.createElement(_reactRouter.Route,{path:'ensayo'},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_Ensayo_PublicListing2.default,queries:queries}),
_react2.default.createElement(_reactRouter.Route,{path:'item'},
_react2.default.createElement(_reactRouter.Route,{path:':id',component:_Ensayo_PublicItem2.default,queries:queries})),

_react2.default.createElement(_reactRouter.Route,{path:'edit',component:_Ensayo_Screen2.default,queries:queries},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_Ensayo_List2.default,queries:queries}))),



_react2.default.createElement(_reactRouter.Route,{path:'todo',component:_ToDo_Screen2.default,queries:queries},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_ToDo_List2.default,queries:queries,prepareParams:function prepareParams(){return{status:'any'};}}),
_react2.default.createElement(_reactRouter.Route,{path:':status',component:_ToDo_List2.default,queries:queries})),


_react2.default.createElement(_reactRouter.Route,{path:'translaticiarum'},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_Translaticiarum_Grid2.default,queries:queries}),
_react2.default.createElement(_reactRouter.Route,{path:'edit',component:_Translaticiarum_Screen2.default,queries:queries},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_Translaticiarum_List2.default,queries:queries}))),




_react2.default.createElement(_reactRouter.Route,{path:'force_login'},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_ForceLogin2.default,queries:queries})),


_react2.default.createElement(_reactRouter.Route,{path:'mui'},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_MUI_Home2.default,queries:queries}),
_react2.default.createElement(_reactRouter.Route,{path:'icons',component:_MUI_Icons2.default,queries:queries}),
_react2.default.createElement(_reactRouter.Route,{path:'icons_country_flags',component:_MUI_Icons_CountryFlags2.default,queries:queries}),
_react2.default.createElement(_reactRouter.Route,{path:'icons_credit_cards',component:_MUI_Icons_CreditCards2.default,queries:queries})),


_react2.default.createElement(_reactRouter.Route,{path:'user'},
_react2.default.createElement(_reactRouter.IndexRoute,{component:_User_Properties2.default,queries:queries}),
_react2.default.createElement(_reactRouter.Route,{path:'update_password',component:_User_UpdatePassword2.default,queries:queries}))));
//# sourceMappingURL=routes.js.map