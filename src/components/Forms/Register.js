import React, { Component } from 'react';
import fire from '../../config/Fire';
import './Login.css'

export default class Register extends Component {
    state={
        email: "",
        password:"",
        displayName:"",
        fireErrors:""
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = e=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        }).catch((error)=>{
            this.setState({fireErrors: error.message});
        })
    }

  render() {
    let errorNotification = this.state.fireErrors ? 
        (<div className='Error'>{this.state.fireErrors}</div>):null;
    return (
      <>
      {errorNotification}
       <form>
            <input type="text" className="regField" placeholder="Your Name here" 
            onChange={this.handleChange}
            value={this.state.displayName}
            name='displayName'/>

            <input type="text" className="regField"
            onChange={this.handleChange}
            value={this.state.email}
             placeholder="Email" name='email'/>

            <input type="password" className="regField"
                onChange={this.handleChange}
            value={this.state.password}
             placeholder="Password" name='password'/>

            <input onClick={this.register} type="submit" className="submitBtn"  value="ENTER" />
       </form> 
      </>
    )
  }
}
