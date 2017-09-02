/**
 * @flow
 * @relayHash b68b7bd365d416fe878ac020db375147
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameForceLogin_ForceLogin_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameForceLogin_ForceLogin_Query {
  Viewer {
    ...ForceLogin_Viewer
    id
  }
}

fragment ForceLogin_Viewer on Viewer {
  User_IsAnonymous
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameForceLogin_ForceLogin_Query",
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
            "name": "ForceLogin_Viewer",
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
  "name": "routeAppFrameForceLogin_ForceLogin_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameForceLogin_ForceLogin_Query",
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
            "name": "User_IsAnonymous",
            "storageKey": null
          },
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
  "text": "query routeAppFrameForceLogin_ForceLogin_Query {\n  Viewer {\n    ...ForceLogin_Viewer\n    id\n  }\n}\n\nfragment ForceLogin_Viewer on Viewer {\n  User_IsAnonymous\n}\n"
};

module.exports = batch;
