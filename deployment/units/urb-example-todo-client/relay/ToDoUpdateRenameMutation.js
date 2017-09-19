'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _reactRelay = require('react-relay');

const mutation = function () {return require('./__generated__/ToDoUpdateRenameMutation.graphql');}; //  weak










function commit(environment, aToDo, ToDo_Text) {
  return (0, _reactRelay.commitMutation)(environment, {
    mutation,
    variables: {
      input: { id: aToDo.id, ToDo_Text } },


    optimisticResponse() {
      return {
        ToDoUpdateRename: {
          ToDo: {
            id: aToDo.id,
            ToDo_Text } } };



    } });

}exports.default =

{ commit };
//# sourceMappingURL=ToDoUpdateRenameMutation.js.map