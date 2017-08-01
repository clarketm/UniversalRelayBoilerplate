Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _graphql=require('graphql');

var _mutations2=require('../../../_configuration/urb-base-server/graphql/_mutations');var _mutations3=_interopRequireDefault(_mutations2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

new _graphql.GraphQLObjectType({
name:'Mutation',
fields:_extends({},_mutations3.default)});
//# sourceMappingURL=MutationType.js.map