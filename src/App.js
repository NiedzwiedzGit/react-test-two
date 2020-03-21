import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    filltext: ''
  }

  InputCounter = (event) => {
    const newState = this.state;
    newState.filltext = event.target.value;
    this.setState({
      state: newState
    })
  }

  render() {
    // console.log("this is state => " + this.state.filltext + '<br>' + "this is newState => " + this.newState.filltext);
    let fillContent = null;
    if (this.state.filltext.length != null) {
      fillContent = (
        <p>
          {this.state.filltext.length}
        </p>
      )

    }
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.InputCounter(event)} />
        {fillContent}
      </div>
    );
  }
}

export default App;
