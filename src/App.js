import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'gawea2', name: 'Max', age: 28 },
      { id: 'afg3h4', name: 'Manu', age: 29 },
      { id: 'jfyjn8', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    // find index of person in persons array
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id // return the index of the person matched by id
    });

    // create a new object and copy the person object from the persons array - not mutating state
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative: const person = OBject.assign({}, this.state.persons[personIndex])

    // reassign the name of the copied person  
    person.name = event.target.value;

    // create a copy of the persons array
    const persons = [...this.state.persons];
    persons[personIndex] = person; //update one position with new updated person

    // set the state of persons to the new updated array of persons
    this.setState({ persons: persons }); 
  }

  togglePersonsHandler = () => {
    const visible = this.state.showPersons;
    //setState with an object does not change all state, react merges only the changes
    this.setState({showPersons: !visible});
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.splice() - another way of changing state immutably
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { persons }
      </div>
    );
  }
}

export default App;
