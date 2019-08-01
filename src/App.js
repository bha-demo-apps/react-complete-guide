// Hooks start with 'use' keyword, i.e. useState
import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: "Sony", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Armin", age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Armin', age: 32 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sony", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Cat', age: 26 }
      ]
    })
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
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maze!')} 
          changed={this.nameChangedHandler} >My hobby: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>    
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working.</p>
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