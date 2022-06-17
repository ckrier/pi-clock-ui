import React from 'react';

const ClockFacePage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}
    >
      <h1
        style={{
          color: 'white',
          fontSize: '128px',
          fontWeight: 700,
        }}
      >
        12:45 PM
      </h1>
    </div>
  );
};

export default ClockFacePage;
