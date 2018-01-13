import React from 'react'
import { Input } from 'semantic-ui-react'

import { createRevision } from '../reducers/actions/actions'
import {connect} from 'react-redux'

class CommentForm extends React.Component {
  state ={
      comment:''
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createRevision({description: this.state.description, revision_type: 'revision', project_id: this.props.projectId,})
    this.setState({description: ''})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />
          <input type="submit" value="Comment"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // return {createRevision: (revision) => dispatch(createRevision(revision))}
}

export default connect( null, mapDispatchToProps)(CommentForm);
