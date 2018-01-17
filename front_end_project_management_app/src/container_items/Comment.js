import React from 'react'
import { Icon, Image, Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';

import { deleteComment } from '../reducers/actions/actions'
import {connect} from 'react-redux'
import '../css/Comment.css'

// import { EditorState, Editor } from 'draft-js';

import {stateToHTML} from 'draft-js-export-html';

import { convertFromRaw } from 'draft-js';


class Comment extends React.Component {

  handleDelete = () => {
    this.props.deleteComment(this.props.comment.id, this.props.comment.revision_id, parseInt(this.props.projectId))
  }

  handleEdit= () => {
    
  }

  convertCommentFromJSONToText = (text) => {
    var x = stateToHTML(convertFromRaw(JSON.parse(text)))
    return x
  }

  render() {
  return (
    <div id="single-comment">
      <div id="single-comment-header">
          <div id="comment-username">
            <Image avatar src={this.props.user.image} />
            <p id="user-name-text">{this.props.user.first_name} {this.props.user.last_name}</p>
          </div>
        <div>
          <Button.Group basic size='small'>
            <Button icon onClick={this.handleEdit} compact>
              <Icon name='edit' color="gray" />
            </Button>
            <Button icon onClick={this.handleDelete} color="red" compact circular negative>
              <Icon name="delete" color='white'/>
            </Button>
          </Button.Group>
        </div>
      </div>
      <div id="comment-div">
        <div dangerouslySetInnerHTML={{ __html: this.convertCommentFromJSONToText(this.props.comment.content)}}></div>
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
