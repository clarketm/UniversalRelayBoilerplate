/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type AppFrame_Viewer = {|
  +UserToken2: ?string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFrame_Viewer",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "UserToken2",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "NavBarLoginButton_Viewer",
      "args": null
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
