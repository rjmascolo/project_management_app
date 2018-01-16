import React from 'react'
import { Input, Button } from 'semantic-ui-react'

import { createNewProject } from '../reducers/actions/actions'
import {connect} from 'react-redux'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class CreateNewProject extends React.Component {
  state ={
      projectName:"",
      projectDescription: '',
      projectImage: '',
      projectType:'',
      creativeDeliverables: '',
      projectUsers:[],
      deliverables:[
        {
          description: '',
          date: moment()
        }
      ],
      projectFile: null,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // let formData = new FormData();
    // const stateHere = this.state
    // let projectData = {name: stateHere.projectName, description: stateHere.projectDescription, image: stateHere.projectImage, project_type: stateHere.projectType}
    // let revisionData = {revision_type:"creative brief", description:stateHere.creativeDeliverables}
    //
    // formData.set("project", projectData);
    // formData.set("revision", revisionData);
    // formData.append("revision_item", stateHere.projectFile);
    // formData.set("user_projects", stateHere.projectUsers)
    // formData.set("deliverables", stateHere.deliverables)


    this.props.createNewProject(this.state)
    // this.setState({})

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFileChange = (e) => {
    var file = e.target.files[0];

    this.setState({ projectFile: file });

  }

  onClick = (e) => {
    let usersChecked = this.state.projectUsers
    if (usersChecked.find( user => user.id === parseInt(e.target.name))) {
      this.setState({projectUsers: usersChecked.filter(user => user.id !== parseInt(e.target.name)) })
    } else {
      usersChecked.push(this.props.users.find( user => user.id === parseInt(e.target.name)))
      this.setState({projectUsers: usersChecked })
    }
  }

  handleDeliverableChange = (e, id) => {
    let descriptionChange = this.state.deliverables
    descriptionChange[id].description = e.target.value
    this.setState({deliverables: descriptionChange })
  }

  addDeliverable = () => {
    let newDeliverables = this.state.deliverables
    newDeliverables.push({description: '', date: moment()})
    this.setState({deliverables: newDeliverables})
  }

  datePickerChange = (date, dataId) => {
    let newDeliverables = this.state.deliverables;
    newDeliverables[dataId].date = date;
    this.setState({
      deliverables: newDeliverables
    })
  }

  render() {
    return(
      <div>

        <div className="ui form">
          <div className="field">
            <label>Project Name</label>
            <input type="text" name="projectName" onChange={this.handleChange} value={this.state.projectName}/>
          </div>
          <div className="field">
            <label>Project Description</label>
            <input type="text" name="projectDescription" onChange={this.handleChange} value={this.state.projectDescription}/>
          </div>
          <div className="field">
            <label>Image URL</label>
            <input type="text" name="projectImage" onChange={this.handleChange} value={this.state.projectImage}/>
          </div>
          <div className="field">
            <label>Project Type</label>
            <input type="text" name="projectType" onChange={this.handleChange} value={this.state.projectType}/>
          </div>
          <h4>Users</h4>
          <div className="inline field">
            {this.props.users.map( (user, i) => {
              return (
                <div className="ui checkbox" key={i}>
                  <input name= {user.id} type="checkbox" tabIndex="0" onChange={this.onClick} />
                  <label>{user.first_name} {user.last_name}</label>
                </div>
              )
            })}
          </div>
          <div>
            <h2>Creative Deliverables</h2>
            <div className="field">
              <label>Creative Deliverable Overview</label>
              <textarea rows="2" name="creativeDeliverables" onChange={this.handleChange} value={this.state.creativeDeliverables}></textarea>
            </div>
            <h4>Create Deliverables</h4>
            {this.state.deliverables.map( (deliverable, i) => {
              return (
                <div className="field">
                  <label>Creative Deleverable Description</label>
                  <input type="text" name="projectDescription" onChange={(event) => this.handleDeliverableChange(event, i)} value={this.state.deliverables[i].description}/>
                  <DatePicker id={`${i}`} selected={this.state.deliverables[i].date} onChange={(date) => this.datePickerChange(date, i)}/>
                </div>
              )
            })}
            <Button icon="add" circular onClick={this.addDeliverable} />
            <h4>Enter File</h4>
            <input name="file" type="file" onChange={this.handleFileChange} value={this.state.file_text}/>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    users: state.projects.length > 0 ? state.projects[0].get_users : null
  }
}

function mapDispatchToProps(dispatch) {
  return {createNewProject: (project) => dispatch(createNewProject(project))}
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateNewProject);
