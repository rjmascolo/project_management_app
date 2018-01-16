import React, { Component } from 'react'
import { Button, Menu, Search } from 'semantic-ui-react'

import { logOut } from './reducers/actions/actions'
import {connect} from 'react-redux'

import { Link, NavLink } from 'react-router-dom';

import { withRouter } from 'react-router-dom'


class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClick = () => {
    this.props.history.push('/login')
    this.props.logOut()
  }

  render() {
    const { activeItem } = this.state
    return (
      <div class="ui huge menu">

          <a class="active item">
            <NavLink to={`/dashboard`}>
            Home
            </NavLink>
          </a>
          <div class="right menu">
            <div class="item">
                {!this.props.user ?
                  <div onClick={this.handleClick} class="ui primary button">Log In</div> :
                  <div onClick={this.handleClick} class="ui button">Log Out</div> }
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    projects: state.user.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {logOut: () => {dispatch(logOut())}}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
