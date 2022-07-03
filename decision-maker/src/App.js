import './App.css';
import React, { Component } from 'react'
//import Module from './components/Module'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      stateObject: "Object"
    }
  }
  
  // Function Declare area..
  // function = () => { ... }

  render(){
    return(
      <div className="App">
          {/*// User input box*/}
          <div>
            <h1><strong>Decision Making App</strong></h1>
          </div>
          {/*<Module stateObject={this.state.stateObject}/>*/}
      </div>
    )
  }
}

export default App;