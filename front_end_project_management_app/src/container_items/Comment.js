import React from 'react'
import { Item, Label, Icon, Image } from 'semantic-ui-react'
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

  findUser = () => {

  }

  render() {
    console.log(this.props)
  return (
    <div id="single-comment">
        <Image avatar src={this.props.user.image} />
        <p>{this.props.comment.content}</p>
      <div>
        <Icon name="edit" onClick={this.handleEdit} color="gray" />
        <Icon name="delete" onClick={this.handleDelete} color='red'/>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.projects ? state.projects.find(project => project.id === parseInt(props.projectId)).get_users.find( user => user.id === props.comment.user_id) : null
  }
}

function mapDispatchToProps(dispatch) {
  return {deleteComment: (commentId, revisionId, projectId) => dispatch(deleteComment(commentId, revisionId, projectId))}
}

export default connect( mapStateToProps, mapDispatchToProps)(Comment);
