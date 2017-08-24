/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type NavBarLoginButton_Viewer = {|
  +User_IsAnonymous: ?boolean;
  +User_DisplayName: ?string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavBarLoginButton_Viewer",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "User_IsAnonymous",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "User_DisplayName",
      "storageKey": null
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
