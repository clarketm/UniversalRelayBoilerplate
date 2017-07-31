Object.defineProperty(exports,"__esModule",{value:true});

var _graphql=require('graphql');var _default=

new _graphql.GraphQLInterfaceType({
name:'Node',
description:'An object with a globally unique id.',
fields:function fields(){return{
id:{
type:new _graphql.GraphQLNonNull(_graphql.GraphQLID),
description:'The globally unique id of the object.'}};}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(_default,'default','units/urb-base-server/graphql/NodeInterface.js');}();;
//# sourceMappingURL=NodeInterface.js.map