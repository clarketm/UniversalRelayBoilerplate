/**
 * @flow
 * @relayHash 9d0ecb96bb70bdd6838c926bce2eb16b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameEnsayo_EnsayoScreen_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameEnsayo_EnsayoScreen_Query {
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
    "name": "routeAppFrameEnsayo_EnsayoScreen_Query",
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
  "name": "routeAppFrameEnsayo_EnsayoScreen_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameEnsayo_EnsayoScreen_Query",
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
  "text": "query routeAppFrameEnsayo_EnsayoScreen_Query {\n  Viewer {\n    ...EnsayoScreen_Viewer\n    id\n  }\n}\n\nfragment EnsayoScreen_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
