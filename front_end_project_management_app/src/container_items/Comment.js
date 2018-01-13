import React from 'react'
import { Item, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { deleteComment } from '../reducers/actions/actions'
import {connect} from 'react-redux'


class Comment extends React.Component {

  handleDelete = () => {
    this.props.deleteComment(this.props.comment.id, this.props.comment.revision_id, parseInt(this.props.projectId))
  }

  handleEdit= () => {
    console.log("hello")
  }

  render() {
  return (
    <div>
      <p>{this.props.comment.content}</p>
      <Icon name="edit" onClick={this.handleEdit}/>
      <Icon name="delete" onClick={this.handleDelete}/>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {deleteComment: (commentId, revisionId, projectId) => dispatch(deleteComment(commentId, revisionId, projectId))}
}

export default connect( null, mapDispatchToProps)(Comment);
