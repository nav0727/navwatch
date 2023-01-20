import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  ColContainer,
  RowContainer,
  LoginButton,
  Error,
  BgCon,
  NxtLogin,
} from './styleComponents'
import NxtContext from '../../context/NxtContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShow: false,
    errorStatus: false,
    errorMsg: '',
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prev => ({isShow: !prev.isShow}))
  }

  onSuccessLog = JWTtoken => {
    const {history} = this.props
    Cookies.set('jwt_token', JWTtoken, 30, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorStatus: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    // console.log(userDetails)

    const apiUrl = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      // console.log(data.jwt_token)
      this.onSuccessLog(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderLogin = () => {
    const {isShow, errorMsg, errorStatus} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LoginContainer isDark={isDark}>
              <NxtLogin
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
                className="nxt-login"
              />
              <form onSubmit={this.onLogin}>
                <ColContainer>
                  <label htmlFor="user">USERNAME</label>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={this.onChangeUser}
                  />
                </ColContainer>

                <ColContainer>
                  <label htmlFor="pass">PASSWORD</label>
                  <input
                    type={isShow ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.onChangePass}
                  />
                </ColContainer>
                <RowContainer>
                  <input
                    type="checkbox"
                    id="show"
                    onChange={this.onChangeCheck}
                    checked={isShow}
                  />
                  <label htmlFor="show">Show Password</label>
                </RowContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorStatus && <Error>* {errorMsg}</Error>}
              </form>
            </LoginContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  render() {
    const JWTToken = Cookies.get('jwt_token')

    if (JWTToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value
          return <BgCon isDark={isDark}>{this.renderLogin()}</BgCon>
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LoginForm
