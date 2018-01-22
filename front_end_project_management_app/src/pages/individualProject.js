import React from 'react'
import {connect} from 'react-redux'

import { Image, Icon, List, Segment, Dimmer, Loader, Label, Dropdown, Modal } from 'semantic-ui-react'

import UserItem from '../container_items/UserItem'
import UserList from '../containers/UserList'
import RevisionsAccordian from '../containers/RevisionsAccordian'

import DeliverablesEditContainer from '../containers/DeliverablesEditContainer'
import EditUsersForm from '../forms/EditUsersForm'
import EditProjectDetails from '../forms/EditProjectDetails'
import CompletedProject from '../forms/CompletedProject'

import ProjectHeader from '../container_items/ProjectHeader'


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
    console.log(this.props)
    return (
      <div>

        {/* <ProjectHeader projectId={this.props.projectId } /> */}
        {/* <div id="header">
          <div id="header-content">
            <Image
              src={this.props.project ? this.props.project.image: null}
              size='small'
              rounded id="event-image"
            />
            <div id="title-description">
              <div id="title-dropdown-flex">
                <h2 id="header-title">{this.props.project ? this.props.project.name : null }</h2>
                <div>
                  <Dropdown floating button className='icon' icon='setting' pointing="top right" >
                    <Dropdown.Menu>
                      <Dropdown.Item text='Edit Project' onClick={() => this.modalTrigger("project")} />
                      <Dropdown.Item text='Edit Deliverables' onClick={() => this.modalTrigger("deliverables")} />
                      <Dropdown.Item text='Edit Users' onClick={() => this.modalTrigger("users")} />
                      <Dropdown.Item text='Project Complete' onClick={() => this.modalTrigger("completed project")} />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <b><p>Description</p></b>
              <p>{this.props.project ? this.props.project.description : null }</p>
              <b><p>Campaign</p></b>
              <p>{this.props.project ? this.props.project.campaign.name : null }</p>
              <div id="header-companies-container" >
                <div id="header-companies">
                  <b><p>Agencies Involved</p></b>
                  <p>{this.props.project ?
                    this.props.project.campaign.agencies.map( agency =>  {
                      return agency.description !== "client" ? <div><Image avatar src={agency.image} /> {agency.name} </div> : null
                    }
                  ): null }</p>
                </div>
                <div>
                  <b><p>Client</p></b>
                  <p>{this.props.project ?
                    this.props.project.campaign.agencies.map( agency =>  {
                      return agency.description === "client" ? <div><Image avatar src={agency.image} /> {agency.name} </div> : null
                    }
                  ): null }</p>
                </div>
              </div>
              <div id="label-div">
                <Label as='a' color='grey' tag>{this.props.project ? this.props.project.project_type : null }</Label>
              </div>
            </div>
          </div>
        </div> */}
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
       {/* <Modal open={this.state.modalOpen} onClose={this.close}>
         <Modal.Header>
           {this.state.modalType === "deliverables" ? "Edit Deliverables" :
           this.state.modalType === "users" ? "Edit Users" :
           this.state.modalType === "project" ? "Edit Project Details" : "Project Complete" }
         </Modal.Header>
         <Modal.Content>
           <Modal.Description>
             {
              this.state.modalType === "deliverables" ?
             <DeliverablesEditContainer projectId={this.props.id} /> : this.state.modalType === "users" ?
             <EditUsersForm projectId={this.props.id} close={this.close} /> : this.state.modalType === "project" ?
             <EditProjectDetails projectId={this.props.id} close={this.close} /> :
             <CompletedProject projectId={this.props.id} close={this.close} />
            }
           </Modal.Description>
         </Modal.Content>
       </Modal> */}
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
