import React, { Component } from 'react'
import Randomcolor from './components/Randomclr/Randomcolor'
import RandomQuote from './components/RandomQuote/RandomQuote'
import Theme from './components/Theme/Theme'
import Sign from './components/Sign/Sign'
import "./app.css"
import { Route,Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"



export default class App extends Component {

  render() {
    return (
      <div >
      <Navbar/>
     <Routes>
     <Route path='/Randomcolor' element={ <Randomcolor/>}/>
     <Route path='/RandomQuote' element={ <RandomQuote/>}/>
     <Route path='/Theme' element={ <Theme/>}/>
     <Route path='/Sign' element={ <Sign/>}/>
      </Routes>
      </div>
    )
  }
}
