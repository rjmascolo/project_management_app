import React from 'react'
import { Input, Button, Checkbox, Label } from 'semantic-ui-react'

import { createRevision, updateDeliverable } from '../reducers/actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../css/RevisionCreateForm.css'


class EditDeliverables extends React.Component {
  state = {
      id: this.props.deliverable.id,
      description: this.props.deliverable.description,
      date: moment(),
      done: this.props.deliverable.done
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let x = this.state
    this.props.updateDeliverable(
      {
        id: x.id,
        description: x.description,
        date:x.date._d,
        done: x.done
      },
        this.props.projectId)
    // this.props.close()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCheckboxClick = () => {
    this.setState( prevState => {
      return {done: !prevState.done }
    })
  }

  datePickerChange = (date, event) => {
    this.setState({ date: date })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="ui form" >
          <div className="field" id="deliverable-edit-project-item">
            <div className="field" id="project-deliverable-description">
            <label>Creative Deliverable Description </label>
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="i.e. 3 mocks for Q1 banners"
            />
            </div>
            <div className="field" >
              <label>Date Due</label>
              <DatePicker startDate={moment(this.props.deliverable.date)} selected={this.state.date} onSelect={(date, event) => this.datePickerChange(date, event)}/>
            </div>
            </div>
            <div>
              <Checkbox
                label={`Completed`}
                onClick={this.handleCheckboxClick}
                checked={this.state.done}
              />
            </div>
          <Button onClick={this.handleSubmit} floated="right" color="teal">Save</Button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateDeliverable: (deliverable, projectId) => dispatch(updateDeliverable(deliverable, projectId))
  }
}

export default connect(null, mapDispatchToProps)(EditDeliverables);
