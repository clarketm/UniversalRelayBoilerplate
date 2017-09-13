/**
 * @flow
 * @relayHash bbdde520012cf872a0649ec07e1f36b6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameViewportDimensions_ViewportDimensionsScreen_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query {
  Viewer {
    ...ViewportDimensionsScreen_Viewer
    id
  }
}

fragment ViewportDimensionsScreen_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query",
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
            "name": "ViewportDimensionsScreen_Viewer",
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
  "name": "routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query",
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
  "text": "query routeAppFrameViewportDimensions_ViewportDimensionsScreen_Query {\n  Viewer {\n    ...ViewportDimensionsScreen_Viewer\n    id\n  }\n}\n\nfragment ViewportDimensionsScreen_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
