import React from 'react'
import Projects from '../containers/Projects'
import '../css/dashboard.css'
import Calendar from '../containers/Calendar'

class Dashboard extends React.Component {

  render() {
    return (
      <div id="projects-div">
        <h1>Your Dashboard</h1>
        <br/>
        <Calendar />
        <Projects />
      </div>
    );
  }
}

export default Dashboard;
