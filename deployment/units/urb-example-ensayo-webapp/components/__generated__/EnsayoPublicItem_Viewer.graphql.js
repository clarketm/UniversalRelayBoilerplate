/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type EnsayoPublicItem_Viewer = {|
  +Ensayo: ?{|
    +Ensayo_Title: ?string;
    +Ensayo_Description: ?string;
    +Ensayo_Content: ?string;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "id",
      "type": "ID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EnsayoPublicItem_Viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id",
          "type": "ID"
        }
      ],
      "concreteType": "Ensayo",
      "name": "Ensayo",
      "plural": false,
      "selections": [
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
  "type": "Viewer"
};

module.exports = fragment;
