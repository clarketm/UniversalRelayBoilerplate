/**
 * @flow
 * @relayHash 628dd381a93059eb16746e3615e9db55
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ToDoListUpdateMarkAllMutationVariables = {|
  input: {
    ToDo_Complete: boolean;
    clientMutationId?: ?string;
  };
  status: string;
|};

export type ToDoListUpdateMarkAllMutationResponse = {|
  +ToDoListUpdateMarkAll: ?{|
    +Viewer: ?{|
      +ToDos: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string;
            +ToDo_Complete: ?boolean;
            +ToDo_Text: ?string;
          |};
        |}>;
      |};
      +id: string;
      +ToDo_CompletedCount: ?number;
    |};
    +changedToDos: ?$ReadOnlyArray<?{|
      +id: string;
      +ToDo_Complete: ?boolean;
    |}>;
  |};
|};
*/


/*
mutation ToDoListUpdateMarkAllMutation(
  $input: ToDoListUpdateMarkAllInput!
  $status: String!
) {
  ToDoListUpdateMarkAll(input: $input) {
    Viewer {
      ToDos(status: $status) {
        edges {
          node {
            id
            ToDo_Complete
            ToDo_Text
          }
        }
      }
      id
      ToDo_CompletedCount
    }
    changedToDos {
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
        "type": "ToDoListUpdateMarkAllInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ToDoListUpdateMarkAllMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ToDoListUpdateMarkAllInput!"
          }
        ],
        "concreteType": "ToDoListUpdateMarkAllPayload",
        "name": "ToDoListUpdateMarkAll",
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
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "status",
                    "variableName": "status",
                    "type": "String"
                  }
                ],
                "concreteType": "ToDosConnection",
                "name": "ToDos",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ToDosEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
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
              },
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
            "name": "changedToDos",
            "plural": true,
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
  "name": "ToDoListUpdateMarkAllMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ToDoListUpdateMarkAllInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ToDoListUpdateMarkAllMutation",
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
            "type": "ToDoListUpdateMarkAllInput!"
          }
        ],
        "concreteType": "ToDoListUpdateMarkAllPayload",
        "name": "ToDoListUpdateMarkAll",
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
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "status",
                    "variableName": "status",
                    "type": "String"
                  }
                ],
                "concreteType": "ToDosConnection",
                "name": "ToDos",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ToDosEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
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
              },
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
            "name": "changedToDos",
            "plural": true,
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
  "text": "mutation ToDoListUpdateMarkAllMutation(\n  $input: ToDoListUpdateMarkAllInput!\n  $status: String!\n) {\n  ToDoListUpdateMarkAll(input: $input) {\n    Viewer {\n      ToDos(status: $status) {\n        edges {\n          node {\n            id\n            ToDo_Complete\n            ToDo_Text\n          }\n        }\n      }\n      id\n      ToDo_CompletedCount\n    }\n    changedToDos {\n      id\n      ToDo_Complete\n    }\n  }\n}\n"
};

module.exports = batch;
