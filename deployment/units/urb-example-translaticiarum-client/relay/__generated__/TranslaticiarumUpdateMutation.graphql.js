/**
 * @flow
 * @relayHash 8a06f00d1fde3ace36cc0e616a4c39bb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TranslaticiarumUpdateMutationVariables = {|
  input: {
    id: string;
    Translaticiarum_Start: string;
    Translaticiarum_Stop: string;
    Translaticiarum_Description: string;
    clientMutationId?: ?string;
  };
|};

export type TranslaticiarumUpdateMutationResponse = {|
  +TranslaticiarumUpdate: ?{|
    +Translaticiarum: ?{|
      +id: string;
      +Translaticiarum_Start: ?any;
      +Translaticiarum_Stop: ?any;
      +Translaticiarum_Description: ?string;
    |};
  |};
|};
*/


/*
mutation TranslaticiarumUpdateMutation(
  $input: TranslaticiarumUpdateInput!
) {
  TranslaticiarumUpdate(input: $input) {
    Translaticiarum {
      id
      Translaticiarum_Start
      Translaticiarum_Stop
      Translaticiarum_Description
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
        "type": "TranslaticiarumUpdateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TranslaticiarumUpdateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "TranslaticiarumUpdateInput!"
          }
        ],
        "concreteType": "TranslaticiarumUpdatePayload",
        "name": "TranslaticiarumUpdate",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Translaticiarum",
            "name": "Translaticiarum",
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "TranslaticiarumUpdateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "TranslaticiarumUpdateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TranslaticiarumUpdateMutation",
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
            "type": "TranslaticiarumUpdateInput!"
          }
        ],
        "concreteType": "TranslaticiarumUpdatePayload",
        "name": "TranslaticiarumUpdate",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Translaticiarum",
            "name": "Translaticiarum",
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
    ]
  },
  "text": "mutation TranslaticiarumUpdateMutation(\n  $input: TranslaticiarumUpdateInput!\n) {\n  TranslaticiarumUpdate(input: $input) {\n    Translaticiarum {\n      id\n      Translaticiarum_Start\n      Translaticiarum_Stop\n      Translaticiarum_Description\n    }\n  }\n}\n"
};

module.exports = batch;
