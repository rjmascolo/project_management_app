import React from 'react'
import {connect} from 'react-redux'

import { Image, List, Segment, Dimmer, Loader, Label } from 'semantic-ui-react'

import UserItem from '../container_items/UserItem'
import UserList from '../containers/UserList'
import RevisionsAccordian from '../containers/RevisionsAccordian'
import '../css/individualProductPage.css'
import '../css/IndividualProjectHeader.css'

import DeliverablesContainer from '../containers/DeliverablesContainer'

class IndividualProject extends React.Component {

  render() {
    return (
      <div>
        <div id="header">
          <div id="header-content">
            <Image
              src={this.props.project ? this.props.project.image: null}
              size='small'
              rounded id="event-image"
            />
            <div id="title-description">
              <h2 id="header-title">{this.props.project ? this.props.project.name : null }</h2>
              <b><p>Description</p></b>
              <p>{this.props.project ? this.props.project.description : null }</p>
              <b><p>Campaign</p></b>
              <p>Q1 Awareness Campaign</p>
              <div id="header-companies-container" >
                <div id="header-companies">
                  <b><p>Agencies Involved</p></b>
                  <p>Media Agency, Creative Agency </p>
                </div>
                <div>
                  <b><p>Client</p></b>
                  <p>Toyota Marketing</p>
                </div>
              </div>
              <div id="label-div">
                <Label as='a' color='grey' tag>{this.props.project ? this.props.project.project_type : null }</Label>
              </div>
            </div>
          </div>
        </div>
        <div id="individual-page-container-content">

          <div id="user-list">
            <UserList projectId={this.props.id}/>
          </div>

          <div id="outer-project-accordian">
            <h3>Project Content</h3>
            <RevisionsAccordian projectId={this.props.id} />
          </div>

          <div id="deliverables-div">
            <DeliverablesContainer projectId={this.props.id}/>
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
