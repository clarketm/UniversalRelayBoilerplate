/**
 * @flow
 * @relayHash bcc2061363d9ea93d11beb8fc698e837
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TranslaticiarumAddMutationVariables = {|
  input: {
    Translaticiarum_Start: string;
    Translaticiarum_Stop: string;
    Translaticiarum_Description: string;
    clientMutationId?: ?string;
  };
|};

export type TranslaticiarumAddMutationResponse = {|
  +TranslaticiarumAdd: ?{|
    +Viewer: ?{|
      +id: string;
    |};
    +TranslaticiarumsEdge: ?{|
      +cursor: string;
      +node: ?{|
        +id: string;
        +Translaticiarum_Start: ?any;
        +Translaticiarum_Stop: ?any;
        +Translaticiarum_Description: ?string;
      |};
    |};
  |};
|};
*/


/*
mutation TranslaticiarumAddMutation(
  $input: TranslaticiarumAddInput!
) {
  TranslaticiarumAdd(input: $input) {
    Viewer {
      id
    }
    TranslaticiarumsEdge {
      cursor
      node {
        id
        Translaticiarum_Start
        Translaticiarum_Stop
        Translaticiarum_Description
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
        "type": "TranslaticiarumAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TranslaticiarumAddMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "TranslaticiarumAddInput!"
          }
        ],
        "concreteType": "TranslaticiarumAddPayload",
        "name": "TranslaticiarumAdd",
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
            "concreteType": "TranslaticiarumsEdge",
            "name": "TranslaticiarumsEdge",
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
                "concreteType": "Translaticiarum",
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
                    "name": "Translaticiarum_Start",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Translaticiarum_Stop",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Translaticiarum_Description",
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
  "name": "TranslaticiarumAddMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "TranslaticiarumAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TranslaticiarumAddMutation",
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
            "type": "TranslaticiarumAddInput!"
          }
        ],
        "concreteType": "TranslaticiarumAddPayload",
        "name": "TranslaticiarumAdd",
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
            "concreteType": "TranslaticiarumsEdge",
            "name": "TranslaticiarumsEdge",
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
                "concreteType": "Translaticiarum",
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
                    "name": "Translaticiarum_Start",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Translaticiarum_Stop",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "Translaticiarum_Description",
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
  "text": "mutation TranslaticiarumAddMutation(\n  $input: TranslaticiarumAddInput!\n) {\n  TranslaticiarumAdd(input: $input) {\n    Viewer {\n      id\n    }\n    TranslaticiarumsEdge {\n      cursor\n      node {\n        id\n        Translaticiarum_Start\n        Translaticiarum_Stop\n        Translaticiarum_Description\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
