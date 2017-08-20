/**
 * @flow
 * @relayHash ac71fee235bff11943ab64ee84803593
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InscriptioAddMutationVariables = {|
  input: {
    Inscriptio_LocationLat: string;
    Inscriptio_LocationLon: string;
    Inscriptio_Notes: string;
    clientMutationId?: ?string;
  };
|};

export type InscriptioAddMutationResponse = {|
  +InscriptioAdd: ?{|
    +Viewer: ?{|
      +id: string;
    |};
    +InscriptiosEdge: ?{|
      +cursor: string;
      +node: ?{|
        +id: string;
        +Inscriptio_LocationLat: ?string;
        +Inscriptio_LocationLon: ?string;
        +Inscriptio_Notes: ?string;
      |};
    |};
  |};
|};
*/


/*
mutation InscriptioAddMutation(
  $input: InscriptioAddInput!
) {
  InscriptioAdd(input: $input) {
    Viewer {
      id
    }
    InscriptiosEdge {
      cursor
      node {
        id
        Inscriptio_LocationLat
        Inscriptio_LocationLon
        Inscriptio_Notes
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "InscriptioAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InscriptioAddMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "InscriptioAddInput!"
          }
        ],
        "concreteType": "InscriptioAddPayload",
        "name": "InscriptioAdd",
        "plural": false,
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "InscriptiosEdge",
            "name": "InscriptiosEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Inscriptio",
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
                    "name": "Inscriptio_LocationLat",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Inscriptio_LocationLon",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Inscriptio_Notes",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "InscriptioAddMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "InscriptioAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "InscriptioAddMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "InscriptioAddInput!"
          }
        ],
        "concreteType": "InscriptioAddPayload",
        "name": "InscriptioAdd",
        "plural": false,
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "InscriptiosEdge",
            "name": "InscriptiosEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Inscriptio",
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
                    "name": "Inscriptio_LocationLat",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Inscriptio_LocationLon",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Inscriptio_Notes",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation InscriptioAddMutation(\n  $input: InscriptioAddInput!\n) {\n  InscriptioAdd(input: $input) {\n    Viewer {\n      id\n    }\n    InscriptiosEdge {\n      cursor\n      node {\n        id\n        Inscriptio_LocationLat\n        Inscriptio_LocationLon\n        Inscriptio_Notes\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
