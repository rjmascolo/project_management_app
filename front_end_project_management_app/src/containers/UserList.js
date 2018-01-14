import React from 'react'
import { Icon, Grid, Step } from 'semantic-ui-react'
import '../css/DeliverableItem.css'

import {connect} from 'react-redux'
import DeliverableItem from '../container_items/DeliverableItem'

class UserList extends React.Component {
  render() {
    const usersList = this.props.user ? this.props.users.map( (user, i) => {
      return <UserItem key={i} name={`${user.first_name} ${user.last_name}`} position={user.position} image={user.image} />;
    }) : (
      <List.Item>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </Segment>
      </List.Item>
    )
    return(
      <List celled>
        {usersList}
      </List>
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.projects.length > 0 ? state.projects.find(project => project.id === parseInt(props.projectId)).geta_users: null
  }
}

export default connect(mapStateToProps)(List);
