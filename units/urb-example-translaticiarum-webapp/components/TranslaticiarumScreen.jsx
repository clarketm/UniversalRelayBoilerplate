// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import BigCalendar from 'react-big-calendar'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

BigCalendar.momentLocalizer(moment)

const styles = {
  card: {
    minWidth: 275,
  },
}

// truncate "Translaticiarum";
// insert into "Translaticiarum"(id, "Translaticiarum_User_id", "Translaticiarum_Description","Translaticiarum_Start", "Translaticiarum_Stop") values(0dba9aae-e84f-484a-9dc8-1a2be761c0ea, 00000000-0000-0000-0000-000000000000, 'item', '2017-09-09 10:00-0700', '2017-09-09 11:30-0700');
// select * from "Translaticiarum";

class TranslaticiarumScreen extends React.Component<
  any,
  {
    calendarView: 'month' | 'week' | 'day' | 'agenda',
  },
> {
  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      calendarView: 'week',
    }
  }

  _handle_onView = view => {
    this.setState({ calendarView: view })
  }

  _handle_onSelectSlot = (slotInfo: { start: Date, end: Date, slots: Array<Date> }) => {
    console.log(slotInfo)
  }

  render() {
    const { classes, Viewer } = this.props

    const translaticiarumEdges = Viewer.Translaticiarums.edges

    const calendarEvents = translaticiarumEdges.map(translaticiarumEdge => {
      const translaticiarum = translaticiarumEdge.node

      return {
        title: translaticiarum.Translaticiarum_Description,
        start: moment(translaticiarum.Translaticiarum_Start).toDate(),
        end: moment(translaticiarum.Translaticiarum_Stop).toDate(),
      }
    })

    console.log(this.state.calendarView)
    console.log(calendarEvents)

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Translaticiarum" />

          <CardContent>
            <BigCalendar
              events={calendarEvents}
              view={this.state.calendarView}
              onView={this._handle_onView}
              selectable={true}
              onSelectSlot={this._handle_onSelectSlot}
            />
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

TranslaticiarumScreen.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default createFragmentContainer(
  withStyles(styles)(TranslaticiarumScreen),
  graphql`
    fragment TranslaticiarumScreen_Viewer on Viewer {
      Translaticiarums(first: 2147483647)
        @connection(key: "TranslaticiarumScreen_Translaticiarums") {
        edges {
          node {
            id
            Translaticiarum_Description
            Translaticiarum_Start
            Translaticiarum_Stop
          }
        }
      }
    }
  `,
)
