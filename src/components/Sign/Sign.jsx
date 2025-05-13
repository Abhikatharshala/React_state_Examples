import React, { Component } from 'react'
import "./Sign.css"

export default class Sign extends Component {
    constructor(){
        super()
        this.state={
            signup:true
        }
    }
toggleSignUP=()=>{
    this.setState({signup:!this.state.signup})
}
  render() {
    return (
    
        <div id='formsignlog'>
          {this.state.signup?
          <form id='sign-up'>
          <h1>SignUp</h1>
            <input type="text" placeholder='enter your name'/>
            <input type="text" placeholder='enter your Email'/>
            <input type="password" placeholder='enter your Password'/>
            <input type="password" placeholder='Conform your Password'/>
            <button>SignUp</button>
          </form>
       : 
        <form id='log-in'>
        <h1>LogIn</h1>
          <input type='text' placeholder='enter your name'/>
           <input type="password" placeholder='enter your password'/>
           <button>Login</button>
        </form> 
      }
      
      
      <div >

      <button onClick={this.toggleSignUP}>{this.state.signup?"Switch to Login":"Switch to SignUp"}
      </button>  
      </div>
       </div>
    )
  }
}
