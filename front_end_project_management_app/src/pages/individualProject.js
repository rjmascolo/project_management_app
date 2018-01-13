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
      return <UserItem key={i} name={`${user.first_name} ${user.last_name}`} position={user.position} image={user.image} />;
    }) : null
    return (
      <div>
        <div id="individual-page-header">
          <h1>{this.props.project? this.props.project.name : null}</h1>
          <p>{this.props.project? this.props.project.description : null}</p>
        </div>
        <div id="individual-page-container">

          <div id="user-list">
            <h3>Project Managers</h3>
            <List celled>
              {usersList}
            </List>
          </div>

          <div id="outer-project-accordian">
            <h3>Project Content</h3>
            <RevisionsAccordian projectId={this.props.id} />
          </div>

          <div id="deliverables-div">
            <h3>Deliverables</h3>
            <br/>
            <DeliverablesContainer />
          </div>

       </div>
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
