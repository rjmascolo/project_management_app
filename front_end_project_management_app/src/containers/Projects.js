import React from 'react'
import { Item, Button } from 'semantic-ui-react'
import ProjectItem from '../container_items/ProjectItem'
import {connect} from 'react-redux'

class Projects extends React.Component {
  render() {
    const projects = this.props.projects ? this.props.projects.map(project => {
      return <ProjectItem project={project}/>
    }): null
    return (
      <div id="dashboard-projects">
        <div>
          <h1>Current Projects</h1>
          <Button icon="add" circular />
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
