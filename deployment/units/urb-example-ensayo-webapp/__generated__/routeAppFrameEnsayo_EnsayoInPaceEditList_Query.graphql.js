/**
 * @flow
 * @relayHash 113d1cda1a6cff2165e89b9728795616
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routeAppFrameEnsayo_EnsayoInPaceEditList_QueryResponse = {|
  +Viewer: ?{| |};
|};
*/


/*
query routeAppFrameEnsayo_EnsayoInPaceEditList_Query {
  Viewer {
    ...EnsayoInPaceEditList_Viewer
    id
  }
}

fragment EnsayoInPaceEditList_Viewer on Viewer {
  Ensayos(first: 2147483647) {
    edges {
      node {
        id
        ...EnsayoInPlaceEditItem_Ensayo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  ...EnsayoInPlaceEditItem_Viewer
}

fragment EnsayoInPlaceEditItem_Ensayo on Ensayo {
  id
  Ensayo_Title
  Ensayo_Description
  Ensayo_Content
}

fragment EnsayoInPlaceEditItem_Viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditList_Query",
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
            "name": "EnsayoInPaceEditList_Viewer",
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
  "name": "routeAppFrameEnsayo_EnsayoInPaceEditList_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routeAppFrameEnsayo_EnsayoInPaceEditList_Query",
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
                        "name": "Ensayo_Content",
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
            "key": "EnsayoList_Ensayos",
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
  "text": "query routeAppFrameEnsayo_EnsayoInPaceEditList_Query {\n  Viewer {\n    ...EnsayoInPaceEditList_Viewer\n    id\n  }\n}\n\nfragment EnsayoInPaceEditList_Viewer on Viewer {\n  Ensayos(first: 2147483647) {\n    edges {\n      node {\n        id\n        ...EnsayoInPlaceEditItem_Ensayo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  ...EnsayoInPlaceEditItem_Viewer\n}\n\nfragment EnsayoInPlaceEditItem_Ensayo on Ensayo {\n  id\n  Ensayo_Title\n  Ensayo_Description\n  Ensayo_Content\n}\n\nfragment EnsayoInPlaceEditItem_Viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
