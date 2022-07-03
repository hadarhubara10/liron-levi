import React from 'react';

const LoadingOverlay = () => {
  return (
    <div
      className="ag-overlay-loading-center"
      style={{ backgroundColor: 'lightsteelblue', height: '9%' }}
    >
      <i className="fas fa-hourglass-half"> Loading </i>
    </div>
  );
};
export default LoadingOverlay;
