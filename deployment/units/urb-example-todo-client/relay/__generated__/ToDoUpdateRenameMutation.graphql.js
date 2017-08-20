/**
 * @flow
 * @relayHash c97661c8fb343d5d23475253ab315ff1
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ToDoUpdateRenameMutationVariables = {|
  input: {
    id: string;
    ToDo_Text: string;
    clientMutationId?: ?string;
  };
|};

export type ToDoUpdateRenameMutationResponse = {|
  +ToDoUpdateRename: ?{|
    +ToDo: ?{|
      +id: string;
      +ToDo_Text: ?string;
    |};
  |};
|};
*/


/*
mutation ToDoUpdateRenameMutation(
  $input: ToDoUpdateRenameInput!
) {
  ToDoUpdateRename(input: $input) {
    ToDo {
      id
      ToDo_Text
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoUpdateRenameInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToDoUpdateRenameMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoUpdateRenameInput!"
          }
        ],
        "concreteType": "ToDoUpdateRenamePayload",
        "name": "ToDoUpdateRename",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ToDo",
            "name": "ToDo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "ToDo_Text",
                "storageKey": null
              }
            ],
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
  "name": "ToDoUpdateRenameMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoUpdateRenameInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ToDoUpdateRenameMutation",
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
            "type": "ToDoUpdateRenameInput!"
          }
        ],
        "concreteType": "ToDoUpdateRenamePayload",
        "name": "ToDoUpdateRename",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ToDo",
            "name": "ToDo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "ToDo_Text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation ToDoUpdateRenameMutation(\n  $input: ToDoUpdateRenameInput!\n) {\n  ToDoUpdateRename(input: $input) {\n    ToDo {\n      id\n      ToDo_Text\n    }\n  }\n}\n"
};

module.exports = batch;
