import React, { Component } from 'react'
import { Button, Menu, Search } from 'semantic-ui-react'

import { logOut } from './reducers/actions/actions'
import {connect} from 'react-redux'

import { withRouter } from 'react-router-dom'


class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu size='huge'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
          <Search
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={this.handleSearchChange}
            // results={results}
            // value={value}
            // {...this.props}
          />
          </Menu.Item>
          <Menu.Item>
            {!this.props.user ? <Button primary href='/login'>Log In</Button> : <Button onClick={this.props.logOut}>Log Out</Button>}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return {logOut: () => dispatch(logOut())}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
