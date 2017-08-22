/**
 * @flow
 * @relayHash c988896f52b8c7a02047d90ebd37da45
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type EnsayoAddMutationVariables = {|
  input: {
    Ensayo_Title: string;
    Ensayo_Description: string;
    Ensayo_Content: string;
    clientMutationId?: ?string;
  };
|};

export type EnsayoAddMutationResponse = {|
  +EnsayoAdd: ?{|
    +Viewer: ?{|
      +id: string;
    |};
    +EnsayosEdge: ?{|
      +cursor: string;
      +node: ?{|
        +id: string;
        +Ensayo_Title: ?string;
        +Ensayo_Description: ?string;
        +Ensayo_Content: ?string;
      |};
    |};
  |};
|};
*/


/*
mutation EnsayoAddMutation(
  $input: EnsayoAddInput!
) {
  EnsayoAdd(input: $input) {
    Viewer {
      id
    }
    EnsayosEdge {
      cursor
      node {
        id
        Ensayo_Title
        Ensayo_Description
        Ensayo_Content
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
        "type": "EnsayoAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EnsayoAddMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "EnsayoAddInput!"
          }
        ],
        "concreteType": "EnsayoAddPayload",
        "name": "EnsayoAdd",
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
            "concreteType": "EnsayosEdge",
            "name": "EnsayosEdge",
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
  "name": "EnsayoAddMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EnsayoAddInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "EnsayoAddMutation",
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
            "type": "EnsayoAddInput!"
          }
        ],
        "concreteType": "EnsayoAddPayload",
        "name": "EnsayoAdd",
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
            "concreteType": "EnsayosEdge",
            "name": "EnsayosEdge",
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
  "text": "mutation EnsayoAddMutation(\n  $input: EnsayoAddInput!\n) {\n  EnsayoAdd(input: $input) {\n    Viewer {\n      id\n    }\n    EnsayosEdge {\n      cursor\n      node {\n        id\n        Ensayo_Title\n        Ensayo_Description\n        Ensayo_Content\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
