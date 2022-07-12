import React, { Component } from 'react'
import fire from '../../config/Fire'

export default class Tracker extends Component {

    // Logout
    logout = () =>{
        fire.auth().signOut();
    }

  render() {
    return (
      <div>
        <button onClick={this.logout}>Exit</button>
      </div>
    )
  }
}
