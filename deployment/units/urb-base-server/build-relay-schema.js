'use strict';

var _path = require('path');var _path2 = _interopRequireDefault(_path);

var _graphql = require('graphql');
var _utilities = require('graphql/utilities');

var _schema = require('../urb-base-server/graphql/schema');var _schema2 = _interopRequireDefault(_schema);
var _ensureFileContent = require('../urb-base-tools/ensureFileContent');var _ensureFileContent2 = _interopRequireDefault(_ensureFileContent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

async function main() {
  const result = await (0, _graphql.graphql)(_schema2.default, _utilities.introspectionQuery);
  if (result.errors)
  throw new Error('Failed introspecting schema: ' + JSON.stringify(result.errors, null, 2));

  const taskPromises = [
  (0, _ensureFileContent2.default)(
  _path2.default.resolve('./units/_configuration/urb-base-server/graphql/schema.json'),
  null,
  JSON.stringify(result, null, 2)),

  (0, _ensureFileContent2.default)(
  _path2.default.resolve('./units/_configuration/urb-base-server/graphql/schema.graphql'),
  null,
  (0, _utilities.printSchema)(_schema2.default))];



  await Promise.all(taskPromises);
}

main().then(() => console.log('Fin.'));
//# sourceMappingURL=build-relay-schema.js.map