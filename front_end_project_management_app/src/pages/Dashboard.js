import React from 'react'
import Projects from '../containers/Projects'
import '../css/dashboard.css'

class Dashboard extends React.Component {

  render() {
    return (
      <div id="projects-div">
        <Projects />
      </div>
    );
  }
}

export default Dashboard;
