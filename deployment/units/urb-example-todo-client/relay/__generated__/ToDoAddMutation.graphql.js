/**
 * @flow
 * @relayHash b982f546e313779ed205aeadd12f87d4
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ToDoAddMutationVariables = {|
  input: {
    ToDo_Text: string;
    clientMutationId?: ?string;
  };
|};

export type ToDoAddMutationResponse = {|
  +ToDoAdd: ?{|
    +Viewer: ?{|
      +id: string;
      +ToDo_TotalCount: ?number;
    |};
    +ToDosEdge: ?{|
      +cursor: string;
      +node: ?{|
        +id: string;
        +ToDo_Complete: ?boolean;
        +ToDo_Text: ?string;
      |};
    |};
  |};
|};
*/


/*
mutation ToDoAddMutation(
  $input: ToDoAddInput!
) {
  ToDoAdd(input: $input) {
    Viewer {
      id
      ToDo_TotalCount
    }
    ToDosEdge {
      cursor
      node {
        id
        ToDo_Complete
        ToDo_Text
      }
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
        "type": "ToDoAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToDoAddMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoAddInput!"
          }
        ],
        "concreteType": "ToDoAddPayload",
        "name": "ToDoAdd",
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
                "name": "ToDo_TotalCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ToDosEdge",
            "name": "ToDosEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ToDo",
                "name": "node",
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
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ToDoAddMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ToDoAddMutation",
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
            "type": "ToDoAddInput!"
          }
        ],
        "concreteType": "ToDoAddPayload",
        "name": "ToDoAdd",
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
                "name": "ToDo_TotalCount",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ToDosEdge",
            "name": "ToDosEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ToDo",
                "name": "node",
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
        "storageKey": null
      }
    ]
  },
  "text": "mutation ToDoAddMutation(\n  $input: ToDoAddInput!\n) {\n  ToDoAdd(input: $input) {\n    Viewer {\n      id\n      ToDo_TotalCount\n    }\n    ToDosEdge {\n      cursor\n      node {\n        id\n        ToDo_Complete\n        ToDo_Text\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
