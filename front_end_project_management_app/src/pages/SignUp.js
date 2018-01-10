import React from 'react'
import '../css/login.css'

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    retypedPassword: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    console.log("nada")
  }

  render() {
    return (
      <div id="login-form">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <div class="content">
              Sign Up
            </div>
          </h2>
          <form class="ui large form" onSubmit={this.handleSubmit}>
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" value={this.state.email} onChange={this.handleChange}/>
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="retypedPassword" placeholder="Retype Password" value={this.state.retypedPassword} onChange={this.handleChange} />
                </div>
              </div>
              <div class="ui fluid large teal submit button">Login</div>
            </div>

            <div class="ui error message"></div>

          </form>

        </div>
      </div>
      </div>
    )
  }
}

export default SignUp;
