import React from 'react'
import { Item } from 'semantic-ui-react'
import ProjectItem from '../container_items/ProjectItem'

class Projects extends React.Component {
  render() {
    return (
      <Item.Group>
        <ProjectItem />
      </Item.Group>
    );
  }
}

export default Projects;
