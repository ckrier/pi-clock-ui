import React from 'react';

const Page: React.FC = ({ children }) => {
  return (
    <div
      style={{
        padding: 12,
        height: 'calc(100% - 56px)', // to account for fixed bottom bar. 56 height
        width: '100%',
        overflow: 'scroll',
      }}
    >
      {children}
    </div>
  );
};

export default Page;
