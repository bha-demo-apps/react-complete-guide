import React from 'react';

// A higher order component can accept as many params as you want.
// And the param names can be any name.
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
