import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css'

export default class Login extends Component {
    state={
        email: "",
        password:"",
        fireErrors:""
    }

    login = e =>{
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error)=>{
            this.setState({fireErrors: error.message})
        })
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

  render() {
    let errorNotification = this.state.fireErrors ? 
    (<div className='Error'>{this.state.fireErrors}</div>):null;
    return (
      <>
      {errorNotification}
       <form>
            <input type="text" className="regField"
             value={this.state.email}
             onChange={this.handleChange}
             placeholder="Email" name='email'/>

            <input type="password" className="regField"
             value={this.state.password}
             onChange={this.handleChange}
             placeholder="Password" name='password'/>

            <input onClick={this.login} type="submit" className="submitBtn"  value="ENTER" />
       </form> 
      </>
    )
  }
}
