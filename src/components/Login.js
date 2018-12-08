import React from 'react'
import {connect} from 'react-redux'
import {handleLogin} from '../actions/veteranAction.js'
import { withRouter } from 'react-router-dom'


class Login extends React.Component{
  state={
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state)
    .then(() => this.props.history.push('/home'))
    .catch(() => this.props.history.push('/'))
  }

  handleSignup = () => {
    this.props.history.push('/signup')
  }

  render(){
      return(
        <div>
          <form>
            <legend>Login</legend>
            <div className="input">
              <input placeholder='Username' name="username" onChange={this.handleChange} />
            </div>
            <div className="input">
              <input type="password" placeholder='Password' name="password" onChange={this.handleChange} />
            </div>
            <button className="submit" onClick={this.handleSubmit} type='submit'>SUBMIT</button>
            <button className="signup" onClick={this.handleSignup}>SIGNUP</button>
          </form>
        </div>
      )
  }
}

const mapStateToProps= (state) => {
  console.log(state)
  return {
    veteran: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {handleLogin})(Login))
