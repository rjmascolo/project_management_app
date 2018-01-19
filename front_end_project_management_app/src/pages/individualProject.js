import React from 'react'
import {connect} from 'react-redux'

import { Image, Icon, List, Segment, Dimmer, Loader, Label, Dropdown, Modal } from 'semantic-ui-react'

import UserItem from '../container_items/UserItem'
import UserList from '../containers/UserList'
import RevisionsAccordian from '../containers/RevisionsAccordian'
import DeliverablesEditContainer from '../containers/DeliverablesEditContainer'

import '../css/individualProductPage.css'
import '../css/IndividualProjectHeader.css'

import { withRouter } from 'react-router'

import DeliverablesContainer from '../containers/DeliverablesContainer'

class IndividualProject extends React.Component {
  state = {
    modalType: null,
    modalOpen: false
  }

  modalTrigger = (type) => {
    this.setState({ modalType: type, modalOpen: true })
  }

  show = () => this.setState({ modalOpen: true })

  close = () => this.setState({  modalOpen: false })

  render() {
    const options = [
      { key: 'edit-users', text: 'Edit Users', value: 'edit-users' },
      { key: 'edit-deliverables', text: 'Edit Deliverables', value: 'edit-deliverables' },
      { key: 'edit-project', text: 'Edit Project', value: 'edit-project' }
    ]
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
              <Dropdown floating button className='icon' >
                <Dropdown.Menu>
                  <Dropdown.Item text='Edit Project' onClick={() => this.modalTrigger("project")} />
                  <Dropdown.Item text='Edit Deliverables' onClick={() => this.modalTrigger("deliverable")} />
                  <Dropdown.Item text='Edit Users' onClick={() => this.modalTrigger("user")} />
                </Dropdown.Menu>
              </Dropdown>
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
            <RevisionsAccordian projectId={this.props.id}/>
          </div>

          <div id="deliverables-div">
            <DeliverablesContainer projectId={this.props.id} />
          </div>

       </div>
       <Modal open={this.state.modalOpen} onClose={this.close}>
         <Modal.Header>Edit Deliverables</Modal.Header>
         <Modal.Content>
           <Modal.Description>
             <DeliverablesEditContainer projectId={this.props.projectId} />
           </Modal.Description>
         </Modal.Content>
       </Modal>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndividualProject));
