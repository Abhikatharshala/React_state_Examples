import React, { Component } from 'react'

export default class Randomcolor extends Component {
    constructor(){
        super()
        this.state={
            color:"#fff"
        }
    }


    

 handleRandomClr=()=>{
 const color="abcdef0123456789"
 let hexa="#"

 for(let i=0;i<6;i++){
    const randomNumber=Math.floor(Math.random() * color.length)
    console.log(color[randomNumber])
     hexa += color[randomNumber]
    
 }
 console.log(hexa , "hexa color")
 this.setState({color:hexa})
 
   
}
 
  render() {
  
    return (
      <div style={{ backgroundColor: this.state.color, height: "100px"}}>
        <button onClick={this.handleRandomClr}>Randomcolor</button>
      </div>
    )
  }
}
