import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

// Since React 16.8 function componenets need to be in caps.
const Cockpit = (props) => {
  // useEffect() - Lifecycle hook
  // Can have as many useEffect()
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...fake http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    // useEffect will get triggered if props.persons changed. 
    // If you pass an empty [] it will only run for the first time.
    return () => {
      clearTimeout(timer); // test cleanup work
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []); 

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = styles.red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is a test.</p>
      {/* An alternative to this.switchNameHandler.bind... */}
      {/* Not recommended to use though coz of performance hit. */}
      {/* <button onClick={() => this.switchNameHandler('Maze!!!')}>Switch Name One</button> */}
      
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>

  );
};

// React.memo() can be used to optimize functional componenets. 
// If functional component is wrapped update might not need to change/refresh,
// if parent component is changed. Is similiar to using shouldComponentUpdate() 
// for class components.
export default React.memo(Cockpit);