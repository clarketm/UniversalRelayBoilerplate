Object.defineProperty(exports,"__esModule",{value:true});

var _graphql=require('graphql');exports.default=

new _graphql.GraphQLInterfaceType({
name:'Node',
description:'An object with a globally unique id.',
fields:function fields(){return{
id:{
type:new _graphql.GraphQLNonNull(_graphql.GraphQLID),
description:'The globally unique id of the object.'}};}});
//# sourceMappingURL=NodeInterface.js.map