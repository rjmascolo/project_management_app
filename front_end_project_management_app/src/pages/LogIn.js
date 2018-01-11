import React from 'react'
import '../css/login.css'
import { login, fetchUser } from '../reducers/actions/actions'

import { connect } from 'react-redux'

class LogIn extends React.Component {
  state = {
    error: false,
    fields: {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value}
    this.setState({fields: newFields})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    login(this.state.fields.email, this.state.fields.password)
    .then(user => {
      if(user.error){
        this.setState({error:true})
      } else {
        this.props.fetchUser(user.id)
        this.props.history.push('/dashboard')
      }
    })
    this.setState({fields: {emails: '', password: ''}})
  }

  render() {
    return (
      <div id="login-form">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <div class="content">
              Log-in to your account
            </div>
          </h2>
          <form class="ui large form" onSubmit={this.handleSubmit}>
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" value={this.state.fields.email} onChange={this.handleChange}/>
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" value={this.state.fields.password} onChange={this.handleChange} />
                </div>
              </div>
              <input type="submit" class="ui fluid large teal submit button" value="Login" />
            </div>

            <div class="ui error message">
              {this.state.error ? <div class="header">Not Found</div> : null}
            </div>

          </form>

          <div class="ui message">
            New to us? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {fetchUser: (id) => dispatch(fetchUser(id))}
}

export default connect(null, mapDispatchToProps)(LogIn);
