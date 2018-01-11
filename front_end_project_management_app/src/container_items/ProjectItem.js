import React from 'react'
import { Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

class ProjectItem extends React.Component {
  render() {
    console.log(this.props)
  return (
      <Item>
          <Item.Image size='small' src={this.props.project.image} />
          <Item.Content>
            <Item.Header as='a'>{this.props.project.name}</Item.Header>
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
