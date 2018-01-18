import React from 'react'
import { Item, Button, Modal, Header } from 'semantic-ui-react'

import ProjectItem from '../container_items/ProjectItem'
import CreateNewProject from '../forms/CreateNewProject'
import '../css/dashboard.css'

import {connect} from 'react-redux'

class Projects extends React.Component {

  state = {
    activeModal: false
  }

  show = () => this.setState({ activeModal: true})
  close = () => this.setState({ activeModal: false })

  render() {
    const projects = this.props.projects ? this.props.projects.map( (project,i) => {
      return <ProjectItem key={i} project={project}/>
    }): null
    return (
      <div id="dashboard-projects">
        <div id="dashboard-projects-header">
          <h1>Current Projects</h1>
          <div>
            <Button icon="add" circular onClick={this.show} />
          </div>
        </div>
        <Item.Group divided>
          {projects}
        </Item.Group>

        <Modal open={this.state.activeModal} onClose={this.close} >
        <Modal.Header>Create A New Project</Modal.Header>
        <Modal.Content scrolling >
          <Modal.Description>
            <CreateNewProject close={this.close} />
          </Modal.Description>
        </Modal.Content>
        </Modal>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects);
