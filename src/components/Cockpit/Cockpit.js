import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is a test.</p>
      {/* An alternative to this.switchNameHandler.bind... */}
      {/* Not recommended to use though coz of performance hit. */}
      {/* <button onClick={() => this.switchNameHandler('Maze!!!')}>Switch Name One</button> */}
      
      <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
    </div>

  );
};

export default cockpit;