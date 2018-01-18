import React from 'react'
import { Item, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class ProjectItem extends React.Component {
  render() {

  return (
      <Item divided>
          <Link to={`/projects/${this.props.project.id}`}> <Item.Image size='small' src={this.props.project.image} /> </Link>
          <Item.Content>
            <Link to={`/projects/${this.props.project.id}`}><Item.Header>{this.props.project.name}</Item.Header></Link>
            <Item.Description>{this.props.project.description}</Item.Description>
            <Item.Extra>
              <Label as='a'>{this.props.project.project_type}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
    )
  }
}

export default ProjectItem
