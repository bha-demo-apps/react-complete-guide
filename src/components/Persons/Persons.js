import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // If you find that you need to do a lot of checks, then maybe
  // is a good idea to use PureComponent that already implement 
  // shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    ) {
      return true;
    } else {
      return false;
    }
    //return true;
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  // componentWillUpdate() {
  // }

  componentDidUpdate(preProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return <Person 
      click={() => this.props.clicked(this.index)} 
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;