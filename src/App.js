// Hooks start with 'use' keyword, i.e. useState
import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  // Have a unique id for state so React could update the UI efficiently.
  state = {
    persons: [
      { id: 'abc1', name: "Sony", age: 28 },
      { id: 'abc3', name: "Manu", age: 29 },
      { id: 'abc5', name: "Armin", age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // This is just a reference type.
    // const persons = this.state.persons;

    // Make a copy of persons state before mutating it. 
    // Good practice.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Make a copy.
    const person = { 
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // Make a copy.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    
    if (this.state.showPersons) {
      persons = ( 
        <div>
          {/* Use arrow function if you want to pass value to a function. */}
          {/* E.g. () => this.deletePersonHandler(index) */}
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a test.</p>
        {/* An alternative to this.switchNameHandler.bind... */}
        {/* Not recommended to use though coz of performance hit. */}
        <button onClick={() => this.switchNameHandler('Maze!!!')}>Switch Name One</button>
        
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name Two</button>
        {persons}
      </div>
    );
  }

}

export default App;

/*
// This is function-based components
// Component should be in caps, e.g. App instead of app
const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Sony", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Armin", age: 30 }
    ],
  });

  // Can call useState multiple times and pass in other values/states.
  const [ otherState, setOtherState ] = useState({otherState: 'some other values...'});
  // useState('some more values');

  console.log(personsState, otherState);

  // Function inside of function.
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({ 
      persons: [
        { name: 'Sonny', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Armin', age: 42 }
      ],
      // When switchNameHandler is pressed setPersonsState will replace old ones; therefore,
      // include otherState if you need that data.
      //otherState: personsState.otherState
    });
  };

  console.log(personsState);

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};

export default App;
*/

// In React 16.8:
// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is working.</p>
//       <button>Switch Name</button>
//       <Person name="sony" age="28" />
//       <Person name="manu" age="29">My testing: Racing</Person>
//       <Person name="armin" age="30" />
//     </div>
//   );
//   //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Do something'));
// }

// switchNameHandler = () => {
//   // console.log('Was clicked!');
//   this.setState({ 
//     persons: [
//       { name: 'Sonny', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Armin', age: 42 }
//     ]
//   })
// }