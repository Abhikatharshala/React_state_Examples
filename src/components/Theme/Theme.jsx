import React, { Component } from 'react'
import { GoSun } from "react-icons/go";
import { FaCloudMoon } from "react-icons/fa6";

export default class Theme extends Component {
    constructor(){
        super()
        this.state={
            theme:false
        }
    }
    toggleTheme=()=>{
        this.setState({theme:!this.state.theme})
    }
  render() {
    return (
      <div style={{backgroundColor:this.state.theme?"white":"Black"}}>
        <button onClick={this.toggleTheme}>{this.state.theme?<FaCloudMoon />:<GoSun />}</button>
      </div>
    )
  }
}
