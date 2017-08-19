/**
 * @flow
 * @relayHash bf98d350069dcbe6ed1092f490662820
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ToDoDeleteMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type ToDoDeleteMutationResponse = {|
  +ToDoDelete: ?{|
    +Viewer: ?{|
      +ToDo_TotalCount: ?number;
      +ToDo_CompletedCount: ?number;
    |};
    +deletedId: ?string;
  |};
|};
*/


/*
mutation ToDoDeleteMutation(
  $input: ToDoDeleteInput!
) {
  ToDoDelete(input: $input) {
    Viewer {
      ToDo_TotalCount
      ToDo_CompletedCount
      id
    }
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToDoDeleteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoDeleteInput!"
          }
        ],
        "concreteType": "ToDoDeletePayload",
        "name": "ToDoDelete",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "name": "Viewer",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "ToDo_TotalCount",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "ToDo_CompletedCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ToDoDeleteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ToDoDeleteMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoDeleteInput!"
          }
        ],
        "concreteType": "ToDoDeletePayload",
        "name": "ToDoDelete",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "name": "Viewer",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "ToDo_TotalCount",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "ToDo_CompletedCount",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation ToDoDeleteMutation(\n  $input: ToDoDeleteInput!\n) {\n  ToDoDelete(input: $input) {\n    Viewer {\n      ToDo_TotalCount\n      ToDo_CompletedCount\n      id\n    }\n    deletedId\n  }\n}\n"
};

module.exports = batch;
