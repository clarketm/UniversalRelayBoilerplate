/**
 * @flow
 * @relayHash 8a434d84158c24f0b08c45017b9e289a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameTodo_ToDoList_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameTodo_ToDoList_Query(
  $status: String!
) {
  Viewer {
    ...ToDoList_Viewer
    id
  }
}

fragment ToDoList_Viewer on Viewer {
  ToDos(status: $status, first: 2147483647) {
    edges {
      node {
        id
        ToDo_Complete
        ...ToDoItem_ToDo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  ToDo_TotalCount
  ToDo_CompletedCount
  ...ToDoItem_Viewer
}

fragment ToDoItem_ToDo on ToDo {
  id
  ToDo_Complete
  ToDo_Text
}

fragment ToDoItem_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameTodo_ToDoList_Query",
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
            "kind": "FragmentSpread",
            "name": "ToDoList_Viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "routeAppFrameTodo_ToDoList_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "routeAppFrameTodo_ToDoList_Query",
    "operation": "query",
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
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              },
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "status",
                "variableName": "status",
                "type": "String"
              }
            ],
            "handle": "connection",
            "name": "ToDos",
            "key": "ToDoList_ToDos",
            "filters": [
              "status"
            ]
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
      }
    ]
  },
  "text": "query routeAppFrameTodo_ToDoList_Query(\n  $status: String!\n) {\n  Viewer {\n    ...ToDoList_Viewer\n    id\n  }\n}\n\nfragment ToDoList_Viewer on Viewer {\n  ToDos(status: $status, first: 2147483647) {\n    edges {\n      node {\n        id\n        ToDo_Complete\n        ...ToDoItem_ToDo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  ToDo_TotalCount\n  ToDo_CompletedCount\n  ...ToDoItem_Viewer\n}\n\nfragment ToDoItem_ToDo on ToDo {\n  id\n  ToDo_Complete\n  ToDo_Text\n}\n\nfragment ToDoItem_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
