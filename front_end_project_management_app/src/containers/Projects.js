import React from 'react'
import { Item, Button, Modal, Header } from 'semantic-ui-react'

import ProjectItem from '../container_items/ProjectItem'
import CreateNewProject from '../forms/CreateNewProject'

import {connect} from 'react-redux'

class Projects extends React.Component {
  render() {
    const projects = this.props.projects ? this.props.projects.map( (project,i) => {
      return <ProjectItem key={i} project={project}/>
    }): null
    return (
      <div id="dashboard-projects">
        <div>
          <h1>Current Projects</h1>
          <Modal trigger={<Button icon="add" circular />}>
          <Modal.Header>Create A New Project</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <CreateNewProject />
            </Modal.Description>
          </Modal.Content>
        </Modal>
        </div>
        <Item.Group>
          {projects}
        </Item.Group>
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
