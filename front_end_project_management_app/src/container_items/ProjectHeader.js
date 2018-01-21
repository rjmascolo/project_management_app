import React from 'React'

import {connect} from 'react-redux'

import { Image, Icon, List, Segment, Dimmer, Loader, Label, Dropdown, Modal } from 'semantic-ui-react'

class ProjectHeader export React.Component {

  render(){
    return(
      <div id="header">
        <div id="header-content">
          <Image
            src={this.props.project ? this.props.project.image: null}
            size='small'
            rounded id="event-image"
          />
          <div id="title-description">
            <div id="title-dropdown-flex">
              <h2 id="header-title">{this.props.project ? this.props.project.name : null }</h2>
              <div>
                <Dropdown floating button className='icon' icon='setting' pointing="top right" >
                  <Dropdown.Menu>
                    <Dropdown.Item text='Edit Project' onClick={() => this.modalTrigger("project")} />
                    <Dropdown.Item text='Edit Deliverables' onClick={() => this.modalTrigger("deliverables")} />
                    <Dropdown.Item text='Edit Users' onClick={() => this.modalTrigger("users")} />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <b><p>Description</p></b>
            <p>{this.props.project ? this.props.project.description : null }</p>
            <b><p>Campaign</p></b>
            <p>{this.props.project ? this.props.project.campaign.name : null }</p>
            <div id="header-companies-container" >
              <div id="header-companies">
                <b><p>Agencies Involved</p></b>
                <p>{this.props.project ?
                  this.props.project.campaign.agencies.map( agency =>  {
                    return agency.description !== "client" ? `${agency.name} ` : null
                  }
                ): null }</p>
              </div>
              <div>
                <b><p>Client</p></b>
                <p>{this.props.project ?
                  this.props.project.campaign.agencies.map( agency =>  {
                    return agency.description === "client" ? `${agency.name} ` : null
                  }
                ): null }</p>
              </div>
            </div>
            <div id="label-div">
              <Label as='a' color='grey' tag>{this.props.project ? this.props.project.project_type : null }</Label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
