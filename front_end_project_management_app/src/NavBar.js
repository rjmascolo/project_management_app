import React, { Component } from 'react'


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
      <div className="ui huge menu">

          <div className="active item">
            <NavLink to={`/dashboard`}>
            Home
            </NavLink>
          </div>
          <div className="right menu">
            <div className="item">
                {!this.props.user ?
                  <div onClick={this.handleClick} className="ui primary button">Log In</div> :
                  <div onClick={this.handleClick} className="ui button">Log Out</div> }
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
