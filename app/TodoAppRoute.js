'use strict';

import Relay from 'react-relay';

export default class TodoAppRoute extends Relay.Route {
  static paramDefinitions = {
    status: {required: false},
  };
  static queries = {
    Viewer: () => Relay.QL`query { Viewer }`,
  };
  static routeName = 'TodoAppRoute';
}
