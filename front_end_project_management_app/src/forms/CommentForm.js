import React from 'react'
import { Button } from 'semantic-ui-react'

import { createComment } from '../reducers/actions/actions'
import {connect} from 'react-redux'
import '../css/CommentForm.css'

class CommentForm extends React.Component {
  state ={
      comment:''
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createComment(
      {
        content: this.state.comment,
        user_id: this.props.userId,
        revision_id: parseInt(this.props.revisionId)
      },
        this.props.projectId
      )
    this.setState({comment: ''})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />
          <Button type="submit">Comment</Button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {userId: state.user.id}
}

function mapDispatchToProps(dispatch) {
  return {createComment: (comment,projectId) => dispatch(createComment(comment, projectId))}
}


export default connect( mapStateToProps, mapDispatchToProps)(CommentForm);
