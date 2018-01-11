import React, { Component } from 'react';
import NavBar from './NavBar'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchUser } from './reducers/actions/actions'
import {connect} from 'react-redux'

import IndividualProject from './pages/individualProject'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'


class App extends Component {

  componentDidMount(){

    const token = localStorage.getItem('token');
    if (token){
      this.props.fetchUser()
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/project" component={IndividualProject} />
            <Route path="/login" render={ routerProps =>  <LogIn history={routerProps.history} />} />
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
