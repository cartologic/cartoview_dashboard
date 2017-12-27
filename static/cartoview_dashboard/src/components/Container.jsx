import React, { PropTypes } from 'react';

const Container = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        {children}
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
