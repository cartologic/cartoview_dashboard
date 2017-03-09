import React, { PropTypes } from 'react';

const Container = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
