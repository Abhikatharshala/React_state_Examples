import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <div id='btn-style'>
    
        <Link to="/Randomcolor" id='btn'>
         <span>RandomColor</span>
         </Link>
           <Link to="/RandomQuote" id='btn'>
         <span>RandomQuote</span>
         </Link>
       <Link to="/Theme" id='btn'>
         <span>Theme</span>
         </Link>
           <Link to="/Sign" id='btn'>
         <span>SignLOg</span>
         </Link>
        

      </div>
    )
  }
}
