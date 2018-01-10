import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'

class ProjectItem extends React.Component {
  render() {
  return (
      <Item>
          <Item.Image size='small' src='/assets/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>Cute Dog</Item.Header>
            <Item.Description>asdf</Item.Description>
            <Item.Extra>
              <Icon color='green' name='check' /> 121 Votes
            </Item.Extra>
          </Item.Content>
        </Item>
    )
  }
}

export default ProjectItem
