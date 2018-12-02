import React, { PropTypes } from 'react';

const Container = ({children}) => {
  const style = {
    height: '95%',
  };
  return (
    <div className="container" style={style}>
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
