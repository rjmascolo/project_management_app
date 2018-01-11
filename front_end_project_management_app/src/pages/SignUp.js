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
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              Sign Up
            </div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" value={this.state.email} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="retypedPassword" placeholder="Retype Password" value={this.state.retypedPassword} onChange={this.handleChange} />
                </div>
              </div>
              <div className="ui fluid large teal submit button">Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

        </div>
      </div>
      </div>
    )
  }
}

export default SignUp;
