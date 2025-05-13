import React, { Component } from 'react'

export default class RandomQuote extends Component {
    constructor(){
        super()
        this.state={
            Quote:"Quote for you",
            color:"#ffff",
        }
    }
      handleClick=()=>{


    const mahabharataQuotesTelugu = [
  "నీ కర్తవ్యాన్ని నిర్వర్తించు, ఫలితాల పట్ల ఆశ పెట్టుకోకూ. — శ్రీకృష్ణుడు (భగవద్గీత)",
  "ఈ జీవితంలో ఏదీ నష్టపోదు, వృధా కాదు. — శ్రీకృష్ణుడు",
  "మనసు అశాంతిగా ఉంటుంది, దాన్ని నియంత్రించటం కష్టం. కానీ సాధన ద్వారా దాన్ని అదుపులో పెట్టవచ్చు. — అర్జునుడు",
  "కాలమే అన్నింటినీ సృష్టిస్తుంది, కాలమే అన్నింటిని నాశనం చేస్తుంది. — భీష్ముడు",
  "మన ఆశలు ఎక్కువైతే బాధలు ఎక్కువవుతాయి, తృప్తిగా ఉన్నవాడే సుఖంగా ఉంటాడు. — విదురుడు",
  "పతనం జరగకుండా ఉండటం గొప్ప విషయం కాదు, పడిన ప్రతి సారి లేచే శక్తి కలిగినవాడే నిజంగా గొప్పవాడు. — యుధిష్ఠిరుడు",
  "చాలా నేరుగా, నిజాయితీగా ఉండే వాడు ముందుగా నష్టపోతాడు; నేరుగా ఉన్న చెట్టులనే మొదట నరికేస్తారు. — ద్రౌపది",
  "యుద్ధంలో బలం కంటే ఎక్కువ అవసరమైనది వ్యూహం. — ద్రోణాచార్యుడు",
  "ఇప్పుడు నీది అయినది, గతంలో వేరొకరిది, రేపు ఇంకొకరిది అవుతుంది. — కర్ణుడు",
  "నేనే కాలం, లోక వినాశానికి కారణమవుతున్నవాడిని. — శ్రీకృష్ణుడు (గీత 11:32)",
  "ధర్మమే శాశ్వతం, అది ఎప్పుడూ జయిస్తే జయిస్తుంది. — భీష్ముడు",
  "మాటలవల్లనే బంధాలు ఏర్పడతాయి, మాటలవల్లనే బంధాలు తెగిపోతాయి. — విదుర నీతి",
  "ఒక్క మంచి స్నేహితుడు జీవితాన్ని మార్చగలడు. — కృష్ణుడు అర్జునునితో",
  "ధర్మం తప్పక నిలుస్తుంది. ధర్మం పైనే జగతీ ప్రయాణం. — భీష్మ పర్వం",
  "అవమానాన్ని జీర్ణించుకునే ఓర్పే అసలైన శక్తి. — ద్రౌపది",
  "అహంకారం ఉన్నవాడు పతనమవుతాడు, వినయం ఉన్నవాడే శ్రేష్ఠుడు. — కృష్ణుడు"
];
    
const random=Math.floor(Math.random()*mahabharataQuotesTelugu.length)
// console.log(random)
 const match=mahabharataQuotesTelugu[random]
 console.log(match)
// this.setState({Quote:match})
      
         const color="abcdef0123456789"
 let hexa="#"

 for(let i=0;i<6;i++){
    const randomNumber=Math.floor(Math.random() * color.length)
    console.log(color[randomNumber])
     hexa += color[randomNumber]
    
 }
 console.log(hexa , "hexa color")
 this.setState({color:hexa,Quote:match})
}      
      

  render() {
    return (
      <div style={{backgroundColor: this.state.color, height: "100px"}}>
      <h1>{this.state.Quote}</h1>
        <button onClick={this.handleClick}>RandomQuote</button>
      </div>
    )
  }
}
