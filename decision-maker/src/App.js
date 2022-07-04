import './App.css';
import React, { Component } from 'react'
import Decisions from './components/Decisions.js'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      decisions: [],
      index: ""
    }
  }

  handleClick = (button) => {
    if(button == "choice") {
      var  choice = <Decisions key={this.state.index}/>
      this.setState({ decisions: [...this.state.decisions, choice], index: this.state.index + 1 })
    } else if ( button == "reset") {
      this.setState({decisions: this.state.decisions = []})
      this.setState({ index: this.state.index = ""})
    }
  }

  render(){
    return(
      <div className="App">
          <div>
            <h3><strong>Decision Making App</strong></h3>
            <button onClick={() => { this.handleClick("choice") }}>Press to Add Choice</button>

            {this.state.decisions}

            <button onClick={() => { this.handleClick("reset") }}>Reset</button>

          </div>
      </div>
    )
  }
}

export default App;