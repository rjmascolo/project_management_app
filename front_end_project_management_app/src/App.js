import React, { Component } from 'react';
import NavBar from './NavBar'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchUser } from './reducers/actions/fetchUser'
import {connect} from 'react-redux'

import IndividualProject from './pages/individualProject'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'


class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/project" component={IndividualProject} />
            <Route path="/login" component={LogIn} />
            <Route path="/sign-up" component={SignUp} />

          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return {fetchUser: () => dispatch(fetchUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
