import React from 'react'

import { Icon, Modal } from 'semantic-ui-react'

import '../css/DeliverableItem.css'

import { connect } from 'react-redux'

import DeliverableUpcomingItem from '../container_items/DeliverableUpcomingItem'

class RecentActivityDashboard extends React.Component {

  render() {

    return(
      <div id="upcoming-deliverable-container-outer">
        <h3>Upcoming Deliverables</h3>
        <div id="upcoming-deliverable-container">
          {/* {deliverables} */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {

  return {
  }
}

export default connect(mapStateToProps)(RecentActivityDashboard);
