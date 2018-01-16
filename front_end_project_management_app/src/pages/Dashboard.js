import React from 'react'
import Projects from '../containers/Projects'
import '../css/dashboard.css'
import Calendar from '../containers/Calendar'
import { Item, Segment, Dimmer, Loader } from 'semantic-ui-react'


import {connect} from 'react-redux'


class Dashboard extends React.Component {

  render() {
    const loadedOrNot = this.props.projects.length > 0 ? (
      <div id="projects-div">
        <h1>Your Dashboard</h1>
        <br/>
        <Calendar />
        <Projects />
      </div>
    ): (
        <Segment>
          <Dimmer active inverted>
            <Loader size='massive' inverted>Loading</Loader>
          </Dimmer>
          <img id="background-loading-image" src="https://ak1.picdn.net/shutterstock/videos/1118401/thumb/1.jpg"/>
        </Segment>
      )

    return (
      <div>
        {loadedOrNot}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
