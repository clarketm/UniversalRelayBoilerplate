/**
 * @flow
 * @relayHash 64ed446dc177ffbbc5d9ccbbd93d313a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type EnsayoUpdateMutationVariables = {|
  input: {
    id: string;
    Ensayo_Title: string;
    Ensayo_Description: string;
    Ensayo_Content: string;
    clientMutationId?: ?string;
  };
|};

export type EnsayoUpdateMutationResponse = {|
  +EnsayoUpdate: ?{|
    +Ensayo: ?{|
      +id: string;
      +Ensayo_Title: ?string;
      +Ensayo_Description: ?string;
      +Ensayo_Content: ?string;
    |};
  |};
|};
*/


/*
mutation EnsayoUpdateMutation(
  $input: EnsayoUpdateInput!
) {
  EnsayoUpdate(input: $input) {
    Ensayo {
      id
      Ensayo_Title
      Ensayo_Description
      Ensayo_Content
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
        "type": "EnsayoUpdateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EnsayoUpdateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "EnsayoUpdateInput!"
          }
        ],
        "concreteType": "EnsayoUpdatePayload",
        "name": "EnsayoUpdate",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Ensayo",
            "name": "Ensayo",
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "EnsayoUpdateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "EnsayoUpdateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "EnsayoUpdateMutation",
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
            "type": "EnsayoUpdateInput!"
          }
        ],
        "concreteType": "EnsayoUpdatePayload",
        "name": "EnsayoUpdate",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Ensayo",
            "name": "Ensayo",
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
    ]
  },
  "text": "mutation EnsayoUpdateMutation(\n  $input: EnsayoUpdateInput!\n) {\n  EnsayoUpdate(input: $input) {\n    Ensayo {\n      id\n      Ensayo_Title\n      Ensayo_Description\n      Ensayo_Content\n    }\n  }\n}\n"
};

module.exports = batch;
