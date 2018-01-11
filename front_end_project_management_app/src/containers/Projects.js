import React from 'react'
import { Item } from 'semantic-ui-react'
import ProjectItem from '../container_items/ProjectItem'
import {connect} from 'react-redux'

class Projects extends React.Component {
  render() {
    const projects = this.props.projects ? this.props.projects.map(project => {
      return <ProjectItem project={project}/>
    }): null
    return (
      
      <Item.Group>
        {projects}
      </Item.Group>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.user.projects
  }
}

export default connect(mapStateToProps)(Projects);
