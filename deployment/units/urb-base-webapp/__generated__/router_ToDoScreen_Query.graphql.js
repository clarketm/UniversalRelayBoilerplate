/**
 * @flow
 * @relayHash ce368aa7fa9a0544b3ded4ea7c5c909f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type router_ToDoScreen_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query router_ToDoScreen_Query {
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
    "name": "router_ToDoScreen_Query",
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
  "name": "router_ToDoScreen_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "router_ToDoScreen_Query",
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
  "text": "query router_ToDoScreen_Query {\n  Viewer {\n    ...ToDoScreen_Viewer\n    id\n  }\n}\n\nfragment ToDoScreen_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
