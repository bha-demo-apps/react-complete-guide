// Hooks start with 'use' keyword, i.e. useState
import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// Notes:
// Use arrow function if you want to pass value to a function. 
// E.g. () => this.deletePersonHandler(index) 

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // Have a unique id for state so React could update the UI efficiently.
  state = {
    persons: [
      { id: 'abc1', name: "Toby", age: 28 },
      { id: 'abc3', name: "Manu", age: 29 },
      { id: 'abc5', name: "Armin", age: 30 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    // return false; - prevent from updating.
    return true;
  }

  // This hook will be used a lot.
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
      //return p.id === id;
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler} />
    }

    return (
      <div className={styles.App}>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        { this.state.showCockpit ? 
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} /> : null }

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