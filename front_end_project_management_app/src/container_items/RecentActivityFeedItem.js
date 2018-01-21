import React from 'react'
import { Feed, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import moment from 'moment'


class ProjectItem extends React.Component {
  render() {
  const {user, notification_type, project, created_at} = this.props.notification
  console.log(this.props.notification)
  return (
    <Feed.Event>
      <Feed.Label>
        <img src={user.image} />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>{`${user.first_name} ${user.last_name}`}</Feed.User> added a {notification_type} to {project.name}
          <Feed.Date>{moment(created_at).fromNow()}</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
    )
  }
}

export default ProjectItem
