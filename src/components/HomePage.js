import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage Component</h1>
      </div>
    )
  }
}

export default withRouter(connect()(HomePage))
