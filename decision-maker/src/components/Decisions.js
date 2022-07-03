import React, { Component } from 'react'
class Decisions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: [
        "Mexican", 
        "Chinese", 
        "Vietmanese", 
        "Thai", 
        "Japanese", 
        "Indian", 
        "Brewery", 
        "Italian", 
        "American", 
        "Mediterranean"
      ],
      mexican: [],
      chinese: [],
      vietmanese: [],
      thai: [],
      japanese: [],
      indian: [],
      brewery: [],
      italian: [],
      american: [],
      mediterranean: []
    }
  }

  // Functions...
   handleClick = () => { 
   alert(this.state.choices[2])
  } 
  
  render() {
    return(
      <div>
        <h2>Decisions Component</h2>
        <button onClick={() => { this.handleClick() }}>Press Generate Random Selection</button>

      </div>
    )
  }
}
export default Decisions;