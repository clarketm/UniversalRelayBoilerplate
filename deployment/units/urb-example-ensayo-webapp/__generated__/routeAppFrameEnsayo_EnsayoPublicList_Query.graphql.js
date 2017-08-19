/**
 * @flow
 * @relayHash 1c3776a7a642b82376ecc7e23116108d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameEnsayo_EnsayoPublicList_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameEnsayo_EnsayoPublicList_Query {
  Viewer {
    ...EnsayoPublicList_Viewer
    id
  }
}

fragment EnsayoPublicList_Viewer on Viewer {
  Ensayos(first: 2147483647) {
    edges {
      node {
        id
        Ensayo_Title
        Ensayo_Description
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameEnsayo_EnsayoPublicList_Query",
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
            "name": "EnsayoPublicList_Viewer",
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
  "name": "routeAppFrameEnsayo_EnsayoPublicList_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameEnsayo_EnsayoPublicList_Query",
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
              }
            ],
            "concreteType": "EnsayosConnection",
            "name": "Ensayos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "EnsayosEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Ensayo",
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
            "storageKey": "Ensayos{\"first\":2147483647}"
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
              }
            ],
            "handle": "connection",
            "name": "Ensayos",
            "key": "EnsayoPublicList_Ensayos",
            "filters": null
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
  "text": "query routeAppFrameEnsayo_EnsayoPublicList_Query {\n  Viewer {\n    ...EnsayoPublicList_Viewer\n    id\n  }\n}\n\nfragment EnsayoPublicList_Viewer on Viewer {\n  Ensayos(first: 2147483647) {\n    edges {\n      node {\n        id\n        Ensayo_Title\n        Ensayo_Description\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
};

module.exports = batch;
