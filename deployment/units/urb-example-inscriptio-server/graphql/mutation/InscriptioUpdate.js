Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _InscriptioType=require('../type/InscriptioType');var _InscriptioType2=_interopRequireDefault(_InscriptioType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}exports.default=

(0,_graphqlRelay.mutationWithClientMutationId)({
name:'InscriptioUpdate',

inputFields:{
id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},
Inscriptio_LocationLat:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Inscriptio_LocationLon:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},
Inscriptio_Notes:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)}},


outputFields:{
Inscriptio:{
type:_InscriptioType2.default,
resolve:function resolve(_ref,_ref2,


context,_ref3){var local_id=_ref.local_id;var args=_objectWithoutProperties(_ref2,[]);var
objectManager=_ref3.rootValue;return(
objectManager.getOneObject('Inscriptio',{id:local_id}));}}},



mutateAndGetPayload:function mutateAndGetPayload(_ref4,

context,_ref5){var id=_ref4.id,Inscriptio_LocationLat=_ref4.Inscriptio_LocationLat,Inscriptio_LocationLon=_ref4.Inscriptio_LocationLon,Inscriptio_Notes=_ref4.Inscriptio_Notes;var
objectManager=_ref5.rootValue;var local_id;return regeneratorRuntime.async(function mutateAndGetPayload$(_context){while(1){switch(_context.prev=_context.next){case 0:

local_id=(0,_graphqlRelay.fromGlobalId)(id).id;_context.next=3;return regeneratorRuntime.awrap(

objectManager.update('Inscriptio',{
id:local_id,
Inscriptio_LocationLat:Inscriptio_LocationLat,
Inscriptio_LocationLon:Inscriptio_LocationLon,
Inscriptio_Notes:Inscriptio_Notes}));case 3:return _context.abrupt('return',


{local_id:local_id});case 4:case'end':return _context.stop();}}},null,_this);}});
//# sourceMappingURL=InscriptioUpdate.js.map