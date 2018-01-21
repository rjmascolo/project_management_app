import React from 'react'

import { Icon, Modal, Feed } from 'semantic-ui-react'

import '../css/DeliverableItem.css'

import { connect } from 'react-redux'

import RecentActivityFeedItem from '../container_items/RecentActivityFeedItem'

class RecentActivityDashboard extends React.Component {

  render() {
    const feedItems = this.props.notifications.map( notification => <RecentActivityFeedItem notification={notification}/> )
    return(
      <div id="upcoming-deliverable-container-outer">
        <h3>Recent Activity</h3>
        <Feed>
          {feedItems}
        </Feed>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  let notifications = [];
  state.projects ? state.projects.forEach(project => {
    let users = project.get_users;
    return project.notifications.forEach( notification => {
      let user = users.find(user => user.id === notification.user_id)
      notifications.push({...notification, project: project, user: user})
    })
  }) : null
  return {
    notifications: notifications
  }
}

export default connect(mapStateToProps)(RecentActivityDashboard);
