// @flow

import { Card, CardHeader } from 'material-ui/Card'
import ContentAdd from 'material-ui/svg-icons/content/add'
import moment from 'moment'
import React from 'react'
import BigCalendar from 'react-big-calendar'
import Relay from 'react-relay'

import { dateFromUTCString, dateUTCToLocal } from '../../../../webapp/scripts/DateTimeHelpers'
import ResponsiveContentArea from '../../../../webapp/components/ResponsiveContentArea'
import Translaticiarum_addMutation from '../../relay/Translaticiarum_addMutation'
import Translaticiarum_Properties from './Translaticiarum_Properties'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

class Translaticiarum_Calendar extends React.Component {
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  _handle_updateHandler_Translaticiarum_Add = Translaticiarum_properties => {
    this.context.relay.commitUpdate(
      new Translaticiarum_addMutation({ ...Translaticiarum_properties, Viewer: this.props.Viewer }),
    )
  }

  _handle_onTouchTap_Add = () => {
    this.refs.Translaticiarum_Properties._handle_Open()
  }

  render() {
    const today = new Date()

    const translaticiarum = this.props.Viewer.Translaticiarums.edges

    const calendarEvents = translaticiarum.map(translaticiarumEdge => {
      const translaticiarum = translaticiarumEdge.node
      const theDate = dateFromUTCString(translaticiarum.Translaticiarum_Date)
      const theTime = dateFromUTCString(translaticiarum.Translaticiarum_Time)

      const theDateTimeStart = dateUTCToLocal(new Date(theDate.getTime() + theTime.getTime()))
      const theDateTimeStop = dateUTCToLocal(
        new Date(theDate.getTime() + theTime.getTime() + 7200000),
      )

      return {
        title: 'Type ' + translaticiarum.Translaticiarum_Type,
        start: theDateTimeStart,
        end: theDateTimeStop,
      }
    })

    console.log(calendarEvents)

    return (
      <ResponsiveContentArea>
        <Card initiallyExpanded={true}>

          <CardHeader
            title="Calendar view of Translaticiarum"
            subtitle="Using React Big Calendar"
          />

          <BigCalendar events={calendarEvents} defaultDate={new Date(2017, 6, 1)} />

        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default Relay.createContainer(Translaticiarum_Calendar, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        Translaticiarums(first: 2147483647) {
          edges {
            node {
              id,
              Translaticiarum_Type,
              Translaticiarum_Date,
              Translaticiarum_Time,
            },
          },
        },
        ${Translaticiarum_addMutation.getFragment('Viewer')},
      }
    `,
  },
})
