import React from 'react';

const Page: React.FC = ({ children }) => {
  return (
    <div
      style={{
        padding: 12,
        height: '100%',
        width: '100%',
        overflow: 'scroll',
      }}
    >
      {children}
    </div>
  );
};

export default Page;
