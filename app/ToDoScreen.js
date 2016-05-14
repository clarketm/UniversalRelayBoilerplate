'use strict';

import TodoApp from '../units/starter-kit-example-todo/app/components/ToDoApp';
import TodoAppRoute from './TodoAppRoute';
import React from 'react'
import { RootContainer } from 'react-relay';


export default class UniversalRelayBoilerplate extends React.Component {
  render(): void {
    return (
      <RootContainer
        Component={TodoApp}
        route={new TodoAppRoute({status: 'any'})}
      />
    );
  }
}
