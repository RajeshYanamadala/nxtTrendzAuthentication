// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isErrorDisplay: false,
    errorMsg: '',
  }

  getSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  OnSubmitErrorMsg = errorMsg => {
    this.setState({isErrorDisplay: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.getSubmitSuccess()
    } else {
      this.OnSubmitErrorMsg(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, isErrorDisplay, errorMsg} = this.state

    return (
      <div className="app-container">
        <div className="login-page-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
            className="login-page-img"
          />

          <form className="form" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-page-log"
            />
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              className="input"
              placeholder="USERNAME"
              onChange={this.onChangeUserName}
              value={username}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="input"
              placeholder="PASSWORD"
              onChange={this.onChangePassword}
              value={password}
            />
            {isErrorDisplay && (
              <p className="error-text-paragraph">{errorMsg}</p>
            )}
            <div className="button">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
