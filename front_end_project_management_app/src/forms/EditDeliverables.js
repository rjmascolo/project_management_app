import React from 'react'
import { Input, Button, Checkbox, Label } from 'semantic-ui-react'

import { createRevision, updateDeliverable } from '../reducers/actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../css/RevisionCreateForm.css'


class EditDeliverables extends React.Component {
  state ={
      description:'',
      date: moment()
  }

  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.close()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  datePickerChange = (date) => {
    this.setState({ date: date })
  }


  handleCheckboxClick = () => {
    this.setState( (prevState) => {
        return {forDeliverable: !prevState.forDeliverable}
    }
    )
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="ui form" >
          <div className="field" id="deliverable-create-project-item">
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
              <DatePicker selected={this.state.date} onChange={(date) => this.datePickerChange(date)}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditDeliverables;
