/**
 * @flow
 * @relayHash 943407bc78d3891e9a7a6e8cec06d48c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameEnsayo_EnsayoPublicItem_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameEnsayo_EnsayoPublicItem_Query(
  $id: ID!
) {
  Viewer {
    ...EnsayoPublicItem_Viewer
    id
  }
}

fragment EnsayoPublicItem_Viewer on Viewer {
  Ensayo(id: $id) {
    Ensayo_Title
    Ensayo_Description
    Ensayo_Content
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameEnsayo_EnsayoPublicItem_Query",
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
            "name": "EnsayoPublicItem_Viewer",
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
  "name": "routeAppFrameEnsayo_EnsayoPublicItem_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "routeAppFrameEnsayo_EnsayoPublicItem_Query",
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
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": "ID"
              }
            ],
            "concreteType": "Ensayo",
            "name": "Ensayo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "Ensayo_Title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "Ensayo_Description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "Ensayo_Content",
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
  "text": "query routeAppFrameEnsayo_EnsayoPublicItem_Query(\n  $id: ID!\n) {\n  Viewer {\n    ...EnsayoPublicItem_Viewer\n    id\n  }\n}\n\nfragment EnsayoPublicItem_Viewer on Viewer {\n  Ensayo(id: $id) {\n    Ensayo_Title\n    Ensayo_Description\n    Ensayo_Content\n    id\n  }\n}\n"
};

module.exports = batch;
