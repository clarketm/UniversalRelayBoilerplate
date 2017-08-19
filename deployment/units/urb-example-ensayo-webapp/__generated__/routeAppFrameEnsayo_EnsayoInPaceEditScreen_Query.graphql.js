/**
 * @flow
 * @relayHash 82cad32f88d1df277a3e3b5f054b437b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameEnsayo_EnsayoInPaceEditScreen_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query {
  Viewer {
    ...EnsayoInPaceEditScreen_Viewer
    id
  }
}

fragment EnsayoInPaceEditScreen_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query",
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
            "name": "EnsayoInPaceEditScreen_Viewer",
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
  "name": "routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query",
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
  "text": "query routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query {\n  Viewer {\n    ...EnsayoInPaceEditScreen_Viewer\n    id\n  }\n}\n\nfragment EnsayoInPaceEditScreen_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
