import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sony", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Armin", age: 30 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({ 
      persons: [
        { name: 'Sonny', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Armin', age: 42 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }

}

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

export default App;
