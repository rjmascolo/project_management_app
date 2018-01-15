import React from 'react'
import { Item, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class AssetItem extends React.Component {
  render() {

  return (
    <Label image>
    <Icon name='file' />
     <a href={this.props.item.file_url} target="_blank" >{this.props.item.file_name}</a>
    <Icon name='delete' />
  </Label>
    )
  }
}

export default AssetItem
