/**
 * @flow
 * @relayHash cbfc1dfc72203b6f1cd87f4234512eec
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type router_EnsayoScreen_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query router_EnsayoScreen_Query {
  Viewer {
    ...EnsayoScreen_Viewer
    id
  }
}

fragment EnsayoScreen_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "router_EnsayoScreen_Query",
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
            "name": "EnsayoScreen_Viewer",
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
  "name": "router_EnsayoScreen_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "router_EnsayoScreen_Query",
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
  "text": "query router_EnsayoScreen_Query {\n  Viewer {\n    ...EnsayoScreen_Viewer\n    id\n  }\n}\n\nfragment EnsayoScreen_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
