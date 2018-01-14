import React from 'react'
import { Item, Label, Icon, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { deleteComment } from '../reducers/actions/actions'
import {connect} from 'react-redux'
import '../css/Comment.css'


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
      <div id="single-comment-header">
          <div id="comment-username">
            <Image avatar src={this.props.user.image} />
            <p id="user-name-text">{this.props.user.first_name} {this.props.user.last_name}</p>
          </div>
        <div>
            <Button icon onClick={this.handleEdit} compact>
              <Icon name='edit' color="gray" />
            </Button>
            <Button icon onClick={this.handleDelete} color="red" compact circular negative>
              <Icon name="delete" color='white'/>
            </Button>
        </div>
      </div>
      <div id="comment-div">
        <p id="comment-paragraph">{this.props.comment.content}</p>
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
