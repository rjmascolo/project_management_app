import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'

class ProjectItem extends React.Component {
  render() {

  return (
      <Item>
          <Item.Image size='small' src='https://pbs.twimg.com/profile_images/875860982937014272/FFXrxPK0_400x400.jpg' />

          <Item.Content>
            <Item.Header as='a'>{this.props.name}</Item.Header>
            <Item.Description>{this.props.description}</Item.Description>
            <Item.Description>{this.props.projectType}</Item.Description>
            <Item.Extra>
              <Icon color='green' name='check' /> 121 Votes
            </Item.Extra>
          </Item.Content>
        </Item>
    )
  }
}

export default ProjectItem
