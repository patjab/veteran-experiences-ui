import React from 'react'
import {connect} from 'react-redux'
import {handleSignUp} from '../actions/veteranAction.js'
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component{
  state = {
    username: "",
    password: "",
  }

  handleSignUpSubmit = (e) => {
    e.preventDefault()
    this.props.handleSignUp(this.state)
    .then(() => this.props.history.push('/home'))
    .catch(() => this.props.history.push('/signup'))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSignup = () => {
    this.props.history.push('/home')
  }

  render(){
    return(
      <React.Fragment>
        <form>
          <legend>SIGNUP</legend>
        <div className="input">
          <input placeholder='Username' name="username" required onChange={this.handleChange}/>
        </div>
        <div className="input">
          <input type="password" placeholder='Password' name="password" onChange={this.handleChange}/>
        </div>
          <button className="submit" onClick={this.handleSignUpSubmit} type='submit'>SUBMIT</button>
          <button className="signup" onClick={this.handleSignup}>LOGIN</button>
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(connect(null, {handleSignUp})(SignUp))
