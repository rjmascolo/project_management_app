import React from 'react'
import { Item, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { deleteFile } from '../reducers/actions/actions'
import {connect} from 'react-redux'



class AssetItem extends React.Component {

  deleteFile = () => {
    this.props.deleteItem(this.props.item.id, this.props.projectId)
  }

  render() {
  return (
    <Label image>
    <Icon name='file' />
     <a href={this.props.item.file_url} target="_blank" >{this.props.item.file_name}</a>
    <Icon name='delete' onClick={this.deleteFile} />
    </Label>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {deleteItem: (itemId, projectId) => dispatch(deleteFile(itemId, projectId))}
}

export default connect( null, mapDispatchToProps)(AssetItem);
