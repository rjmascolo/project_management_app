import React from 'react'
import { Image, List } from 'semantic-ui-react'

const UserItem = ({name,position,image}) => (
    <List.Item>
      <Image avatar src={image} />
      <List.Content>
        <List.Header>{name}</List.Header>
        {position}
      </List.Content>
    </List.Item>
)

export default UserItem;
