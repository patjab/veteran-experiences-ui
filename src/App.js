import React, { Component } from 'react';
import './App.css';
import {Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import HomePage from './components/HomePage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      </div>
    );
  }
}

export default App;
