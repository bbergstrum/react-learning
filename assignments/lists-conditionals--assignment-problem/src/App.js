import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char'
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    userInput: ''
  }
  
  handleInputChanges = (event) => {
    // update userInput to whatever is inputted by the user
    this.setState({userInput: event.target.value});
  }

  handleDeleteCharacter = (index) => {
    // copy and split userInput into an array of characters
    const text = this.state.userInput.split('');
    // remove the character by its index
    text.splice(index, 1);
    // join back together the copy of userInput
    const updatedTest = text.join('');
    // set userInput to the new updated text
    this.setState({userInput: updatedTest});
  }

  render() {
    // make a copy of userInput, split it into an array, map over it creating a Char component for each character and pass index
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
        character={char} 
        key={index}
        clicked={() => this.handleDeleteCharacter(index)} />;
    });

    return (
      <div className="App">
        <div>
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <hr />
        </div>
        <div>
          <input 
            type='text' 
            onChange={this.handleInputChanges} 
            value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          { charList }
        </div>
      </div>
    );
  }
}

export default App;
