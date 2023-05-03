import React, { Component } from 'react'
import './Profile.css'

export default class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count : "Yassin Dridi",
            bio :"Web Devoleper-FullStack JavaScript" ,
            img:"https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg",
            
        };
      }
      toggle=() =>{
        this.setState({show : !this.state.show})
      }
  render() {
    return (
    <div className='container'>
    {/* Button */}
        
        {/* Button */}
        {/* My Name */}
        <h1>{this.state.count}</h1>
        {/* My Name */}
        {/* My Job */}
        <h2>{this.state.bio}</h2>
        {/* My Job */}
        {/* My Image */}
        <img src={this.state.img} alt='aa' className='image'/>
        {/* My Image */}
        
    </div>
    )
  }
}
