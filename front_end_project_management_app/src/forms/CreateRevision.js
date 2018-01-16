import React from 'react'
import { Input } from 'semantic-ui-react'

import { createRevision } from '../reducers/actions/actions'
import {connect} from 'react-redux'

class CreateRevision extends React.Component {
  state ={
      description:''
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createRevision({description: this.state.description, revision_type: 'revision', project_id: this.props.projectId,})
    this.setState({description: ''})
    this.props.closeRevision()
    this.forceUpdate()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input name="description" onChange={this.handleChange} value={this.state.description}/>
          <input type="submit" value="Create New"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {createRevision: (revision) => dispatch(createRevision(revision))}
}

export default connect( null, mapDispatchToProps)(CreateRevision);
