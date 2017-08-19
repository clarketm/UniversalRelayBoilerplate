/**
 * @flow
 * @relayHash efc629be935f6c8f8ca1bb5e31f503a5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ToDoUpdateStatusMutationVariables = {|
  input: {
    id: string;
    ToDo_Complete: boolean;
    clientMutationId?: ?string;
  };
|};

export type ToDoUpdateStatusMutationResponse = {|
  +ToDoUpdateStatus: ?{|
    +Viewer: ?{|
      +id: string;
      +ToDo_CompletedCount: ?number;
    |};
    +ToDo: ?{|
      +id: string;
      +ToDo_Complete: ?boolean;
    |};
  |};
|};
*/


/*
mutation ToDoUpdateStatusMutation(
  $input: ToDoUpdateStatusInput!
) {
  ToDoUpdateStatus(input: $input) {
    Viewer {
      id
      ToDo_CompletedCount
    }
    ToDo {
      id
      ToDo_Complete
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
        "type": "ToDoUpdateStatusInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToDoUpdateStatusMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoUpdateStatusInput!"
          }
        ],
        "concreteType": "ToDoUpdateStatusPayload",
        "name": "ToDoUpdateStatus",
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
                "name": "id",
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
                "name": "ToDo_Complete",
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
  "name": "ToDoUpdateStatusMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoUpdateStatusInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ToDoUpdateStatusMutation",
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
            "type": "ToDoUpdateStatusInput!"
          }
        ],
        "concreteType": "ToDoUpdateStatusPayload",
        "name": "ToDoUpdateStatus",
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
                "name": "id",
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
                "name": "ToDo_Complete",
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
  "text": "mutation ToDoUpdateStatusMutation(\n  $input: ToDoUpdateStatusInput!\n) {\n  ToDoUpdateStatus(input: $input) {\n    Viewer {\n      id\n      ToDo_CompletedCount\n    }\n    ToDo {\n      id\n      ToDo_Complete\n    }\n  }\n}\n"
};

module.exports = batch;
