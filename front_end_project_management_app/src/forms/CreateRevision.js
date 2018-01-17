import React from 'react'
import { Input, Button, Checkbox } from 'semantic-ui-react'

import { createRevision, updateDeliverable } from '../reducers/actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import '../css/RevisionCreateForm.css'


class CreateRevision extends React.Component {
  state ={
      description:'',
      forDeliverable: true
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const state = this.state
    this.props.createRevision({description: state.description, revision_type: 'revision', project_id: this.props.projectId,})
    this.setState({description: '', forDeliverable: true})
    if(state.forDeliverable) {
      let newDeliverable = this.props.deliverable
      newDeliverable.done = true
      this.props.updateDeliverable(newDeliverable, this.props.projectId)
    }
      this.props.closeRevision()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCheckboxClick = () => {
    this.setState( (prevState) => {
        return {forDeliverable: !prevState.forDeliverable}
    }
    )
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="ui form" >
          <div className="field" >
            <label>Revision Description</label>
            <textarea id="textarea-revision-description" name="description" onChange={this.handleChange} value={this.state.description} ></textarea>
          </div>
          <div id="create-revision-submit-div">
            <div>
            <Checkbox label={`This Revision is for Deliverable ${this.props.deliverable.description}.`} onClick={this.handleCheckboxClick} defaultChecked />
            </div>
            <div id="button-div">
              <Button type="submit" color="teal" floated="right" >Create New</Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    deliverable: state.projects ? (
      state.projects.find(project => project.id === parseInt(props.projectId)).deliverables.filter(deliverable => !deliverable.done).sort( ( a, b) => {
      	if (a.date < b.date) {
      		return -1
        }else if (a.date > b.date) {
      	return 1
          } else {
      	return 0
          }
      })[0]
    ) : null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createRevision: (revision) => dispatch(createRevision(revision)),
    updateDeliverable: (deliverable, projectId) => dispatch(updateDeliverable(deliverable, projectId))
  }
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(CreateRevision));
