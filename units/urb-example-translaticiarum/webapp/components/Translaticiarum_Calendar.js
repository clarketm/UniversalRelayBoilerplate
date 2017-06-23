// @flow

import { Card, CardHeader } from 'material-ui/Card'
import ContentAdd from 'material-ui/svg-icons/content/add'
import moment from 'moment'
import React from 'react'
import BigCalendar from 'react-big-calendar'
import Relay from 'react-relay'

import ResponsiveContentArea from '../../../../webapp/components/ResponsiveContentArea'
import Translaticiarum_addMutation from '../../relay/Translaticiarum_addMutation'
import Translaticiarum_Properties from './Translaticiarum_Properties'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const events = [
  {
    title: 'All Day Event',
    allDay: true,
    start: new Date(2017, 6, 0),
    end: new Date(2017, 6, 1),
  },
  {
    title: 'Long Event',
    start: new Date(2017, 6, 7),
    end: new Date(2017, 6, 10),
  },

  {
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    title: 'Some Event',
    start: new Date(2017, 6, 9, 0, 0, 0),
    end: new Date(2017, 6, 9, 0, 0, 0),
  },
  {
    title: 'Conference',
    start: new Date(2017, 6, 11),
    end: new Date(2017, 6, 13),
    desc: 'Big conference for important people',
  },
  {
    title: 'Meeting',
    start: new Date(2017, 6, 12, 10, 30, 0, 0),
    end: new Date(2017, 6, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    title: 'Lunch',
    start: new Date(2017, 6, 12, 12, 0, 0, 0),
    end: new Date(2017, 6, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    title: 'Meeting',
    start: new Date(2017, 6, 12, 14, 0, 0, 0),
    end: new Date(2017, 6, 12, 15, 0, 0, 0),
  },
  {
    title: 'Happy Hour',
    start: new Date(2017, 6, 12, 17, 0, 0, 0),
    end: new Date(2017, 6, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    title: 'Dinner',
    start: new Date(2017, 6, 12, 20, 0, 0, 0),
    end: new Date(2017, 6, 12, 21, 0, 0, 0),
  },
  {
    title: 'Birthday Party',
    start: new Date(2017, 6, 13, 7, 0, 0),
    end: new Date(2017, 6, 13, 10, 30, 0),
  },
]

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

    return (
      <ResponsiveContentArea>
        <Card initiallyExpanded={true}>

          <CardHeader
            title="Calendar view of Translaticiarum"
            subtitle="Using React Big Calendar"
          />

          <BigCalendar events={events} defaultDate={new Date(2017, 6, 1)} />

        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default Relay.createContainer(Translaticiarum_Calendar, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ${Translaticiarum_addMutation.getFragment('Viewer')},
      }
    `,
  },
})
