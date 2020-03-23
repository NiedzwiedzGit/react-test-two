import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    filltext: [],
    limit: 5,
    join: ''
  }

  InputCounter = (event) => {
    const newState = this.state;
    let arrayOfCharacter = event.target.value.split("");
    newState.filltext = arrayOfCharacter;
    let join = arrayOfCharacter.join('');
    this.setState({
      state: newState, join: join
    })
  }

  deletePersonHandler = (personIndex) => {
    const newState = this.state.filltext.slice();
    newState.splice(personIndex, 1);
    let join = newState.join('');
    this.setState(
      { filltext: newState, join: join }
    )
  }

  render() {

    let fillContent = null;
    let lengthMessage = null;
    let charComponent = null;
    if (this.state.filltext != null) {

      fillContent = (
        <p>
          {this.state.filltext.length}
        </p>
      )
      lengthMessage = (

        <ValidationComponent
          length={this.state.filltext.length}
          limit={this.state.limit}
        />
      )
      charComponent = (
        this.state.filltext.map((fillText, index) => {
          return <CharComponent
            click={() => this.deletePersonHandler(index)}
            later={fillText}
          />
        })
      )
    }
    return (

      <div className="App">
        <input type="text" onChange={(event) => this.InputCounter(event)} value={this.state.join} />
        {fillContent}
        {lengthMessage}
        {charComponent}

      </div>
    );
  }
}

export default App;
