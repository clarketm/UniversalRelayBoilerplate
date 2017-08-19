/**
 * @flow
 * @relayHash 8d7964e9d557cc5ce6c8f985929503c6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type InscriptioUpdateMutationVariables = {|
  input: {
    id: string;
    Inscriptio_LocationLat: string;
    Inscriptio_LocationLon: string;
    Inscriptio_Notes: string;
    clientMutationId?: ?string;
  };
|};

export type InscriptioUpdateMutationResponse = {|
  +InscriptioUpdate: ?{|
    +Inscriptio: ?{|
      +id: string;
      +Inscriptio_LocationLat: ?string;
      +Inscriptio_LocationLon: ?string;
      +Inscriptio_Notes: ?string;
    |};
  |};
|};
*/


/*
mutation InscriptioUpdateMutation(
  $input: InscriptioUpdateInput!
) {
  InscriptioUpdate(input: $input) {
    Inscriptio {
      id
      Inscriptio_LocationLat
      Inscriptio_LocationLon
      Inscriptio_Notes
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
        "type": "InscriptioUpdateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "InscriptioUpdateMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "InscriptioUpdateInput!"
          }
        ],
        "concreteType": "InscriptioUpdatePayload",
        "name": "InscriptioUpdate",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Inscriptio",
            "name": "Inscriptio",
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "InscriptioUpdateMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "InscriptioUpdateInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "InscriptioUpdateMutation",
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
            "type": "InscriptioUpdateInput!"
          }
        ],
        "concreteType": "InscriptioUpdatePayload",
        "name": "InscriptioUpdate",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Inscriptio",
            "name": "Inscriptio",
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
    ]
  },
  "text": "mutation InscriptioUpdateMutation(\n  $input: InscriptioUpdateInput!\n) {\n  InscriptioUpdate(input: $input) {\n    Inscriptio {\n      id\n      Inscriptio_LocationLat\n      Inscriptio_LocationLon\n      Inscriptio_Notes\n    }\n  }\n}\n"
};

module.exports = batch;
