/**
 * @flow
 * @relayHash 4417853e759777204b9ed0649ad2a96e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameTodo_ToDoScreen_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameTodo_ToDoScreen_Query {
  Viewer {
    ...ToDoScreen_Viewer
    id
  }
}

fragment ToDoScreen_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameTodo_ToDoScreen_Query",
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
            "name": "ToDoScreen_Viewer",
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
  "name": "routeAppFrameTodo_ToDoScreen_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameTodo_ToDoScreen_Query",
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query routeAppFrameTodo_ToDoScreen_Query {\n  Viewer {\n    ...ToDoScreen_Viewer\n    id\n  }\n}\n\nfragment ToDoScreen_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
