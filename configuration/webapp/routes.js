/* @flow weak */

import React from 'react'
import { createRoutes, IndexRoute, Route } from 'react-router'
import Relay from 'react-relay'

import Chrome from '../../webapp/components/Chrome';
import Compendium from '../../units/urb-example-compendium/webapp/components/Compendium';
import Ensayo_List from '../../units/urb-example-ensayo/webapp/components/Ensayo_List';
import Ensayo_Screen from '../../units/urb-example-ensayo/webapp/components/Ensayo_Screen';
import Ensayo_PublicItem from '../../units/urb-example-ensayo/webapp/components/Ensayo_PublicItem';
import Ensayo_PublicListing from '../../units/urb-example-ensayo/webapp/components/Ensayo_PublicListing';
import ForceLogin from '../../units/urb-example-force-login/webapp/components/ForceLogin';
import HomeScreen from './components/HomeScreen';
import MUI_Icons from '../../units/urb-example-mui/webapp/components/MUI_Icons';
import MUI_Icons_CountryFlags from '../../units/urb-example-mui/webapp/components/MUI_Icons_CountryFlags';
import MUI_Icons_CreditCards from '../../units/urb-example-mui/webapp/components/MUI_Icons_CreditCards';
import MUI_Home from '../../units/urb-example-mui/webapp/components/MUI_Home';
import ToDo_List from '../../units/urb-example-todo/webapp/components/ToDo_List';
import ToDo_Screen from '../../units/urb-example-todo/webapp/components/ToDo_Screen';
import Translaticiarum_List from '../../units/urb-example-translaticiarum/webapp/components/Translaticiarum_List';
import Translaticiarum_Grid from '../../units/urb-example-translaticiarum/webapp/components/Translaticiarum_Grid';
import Translaticiarum_Screen from '../../units/urb-example-translaticiarum/webapp/components/Translaticiarum_Screen';
import User_Properties from '../../units/urb-account-management/webapp/components/User_Properties';
import User_UpdatePassword from '../../units/urb-account-management/webapp/components/User_UpdatePassword';


export const queries = {
  Viewer: () => Relay.QL`query { Viewer }`,
}

export default createRoutes(
  <Route path="/" component={Chrome} queries={queries}>

    <IndexRoute component={HomeScreen} queries={queries} />


    <Route path="compendium">
      <IndexRoute component={Compendium} queries={queries} />
    </Route>

    <Route path="ensayo">
      <IndexRoute component={Ensayo_PublicListing} queries={queries} />
      <Route path="item">
        <Route path=":id" component={Ensayo_PublicItem} queries={queries} />
      </Route>
      <Route path="edit" component={Ensayo_Screen} queries={queries}>
        <IndexRoute component={Ensayo_List} queries={queries} />
      </Route>
    </Route>

    <Route path="todo" component={ToDo_Screen} queries={queries}>
      <IndexRoute component={ToDo_List} queries={queries} prepareParams={ () => ({status: 'any'}) }/>
      <Route path=":status" component={ToDo_List} queries={queries} />
    </Route>

    <Route path="translaticiarum">
      <IndexRoute component={Translaticiarum_Grid} queries={queries}/>
      <Route path="edit" component={Translaticiarum_Screen} queries={queries}>
        <IndexRoute component={Translaticiarum_List} queries={queries} />
      </Route>
    </Route>


    <Route path="force_login">
      <IndexRoute component={ForceLogin} queries={queries} />
    </Route>

    <Route path="mui">
      <IndexRoute component={MUI_Home} queries={queries} />
      <Route path="icons" component={MUI_Icons} queries={queries} />
      <Route path="icons_country_flags" component={MUI_Icons_CountryFlags} queries={queries} />
      <Route path="icons_credit_cards" component={MUI_Icons_CreditCards} queries={queries} />
    </Route>

    <Route path="user">
      <IndexRoute component={User_Properties} queries={queries} />
      <Route path="update_password" component={User_UpdatePassword} queries={queries} />
    </Route>

  </Route>
)
