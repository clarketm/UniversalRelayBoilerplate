/**
 * @flow
 * @relayHash 2f015306daaa2ecde1f5f4bf7b16d412
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type router_AppFrame_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query router_AppFrame_Query {
  Viewer {
    ...AppFrame_Viewer
    id
  }
}

fragment AppFrame_Viewer on Viewer {
  ...NavBarLoginButton_Viewer
}

fragment NavBarLoginButton_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "router_AppFrame_Query",
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
            "name": "AppFrame_Viewer",
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
  "name": "router_AppFrame_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "router_AppFrame_Query",
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
  "text": "query router_AppFrame_Query {\n  Viewer {\n    ...AppFrame_Viewer\n    id\n  }\n}\n\nfragment AppFrame_Viewer on Viewer {\n  ...NavBarLoginButton_Viewer\n}\n\nfragment NavBarLoginButton_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
