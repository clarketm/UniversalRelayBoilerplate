/**
 * @flow
 * @relayHash 6affa11074a3d9683d71b3028bb371b7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TranslaticiarumDeleteMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type TranslaticiarumDeleteMutationResponse = {|
  +TranslaticiarumDelete: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation TranslaticiarumDeleteMutation(
  $input: TranslaticiarumDeleteInput!
) {
  TranslaticiarumDelete(input: $input) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "TranslaticiarumDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TranslaticiarumDeleteMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "TranslaticiarumDeleteInput!"
          }
        ],
        "concreteType": "TranslaticiarumDeletePayload",
        "name": "TranslaticiarumDelete",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
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
  "name": "TranslaticiarumDeleteMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "TranslaticiarumDeleteInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TranslaticiarumDeleteMutation",
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
            "type": "TranslaticiarumDeleteInput!"
          }
        ],
        "concreteType": "TranslaticiarumDeletePayload",
        "name": "TranslaticiarumDelete",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation TranslaticiarumDeleteMutation(\n  $input: TranslaticiarumDeleteInput!\n) {\n  TranslaticiarumDelete(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
