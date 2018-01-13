import React, { Component } from 'react';
import NavBar from './NavBar'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { fetchUser, getCurrentUser } from './reducers/actions/actions'
import {connect} from 'react-redux'

import IndividualProject from './pages/individualProject'
import Dashboard from './pages/Dashboard'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'


class App extends Component {

  componentDidMount(){

    const token = localStorage.getItem('token');
    if (token){
      getCurrentUser()
      .then( user => {
        this.props.fetchUser(user.id)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route path="/dashboard" render={() => {
              const token = localStorage.getItem('token')
              return token ? <Dashboard /> : <Redirect to='/login' />
              }} />
            <Route path="/projects/:id" render={(args) => {
              const token = localStorage.getItem('token')
              return token ? <IndividualProject id={args.match.params.id} /> : <Redirect to='/login'/>
              }} />
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
  return {fetchUser: (id) => dispatch(fetchUser(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
