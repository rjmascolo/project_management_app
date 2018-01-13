import React from 'react'
import {connect} from 'react-redux'

import { Image, List } from 'semantic-ui-react'

import UserItem from '../container_items/UserItem'
import RevisionsAccordian from '../containers/RevisionsAccordian'
import '../css/individualProductPage.css'

import DeliverablesContainer from '../containers/DeliverablesContainer'

class IndividualProject extends React.Component {

  render() {
    const usersList = this.props.project? this.props.project.get_users.map( (user, i) => {
      return <UserItem key={i} name={`${user.first_name} ${user.last_name}`} postion={user.position} image={user.image} />;
    }) : null
    return (
      <div>
        <div className="App">
          <h1>{this.props.project? this.props.project.name : null}</h1>
          <p>{this.props.project? this.props.project.description : null}</p>
        </div>
        <div id="user-list">
          <h1>Project Managers</h1>
          <List celled>
            {usersList}
          </List>
        </div>
        <br/>
        <div>

          <RevisionsAccordian
            projectId={this.props.id}
            // revisions={this.props.project? this.props.project.revisions : null}
          />
        </div>
        <h1>Deliverables</h1>
        <DeliverablesContainer />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    project: state.projects ? state.projects.find(project => project.id === parseInt(props.id)) : null
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProject);
