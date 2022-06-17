import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

interface PageProps {
  hasNav?: boolean;
}

const Page: React.FC<PageProps> = ({ hasNav = false, children }) => {
  return (
    <div
      style={{
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: hasNav ? undefined : 12,
        width: '100%',
        overflow: 'scroll',
      }}
    >
      {children}
      {hasNav && <NavigationBar />}
    </div>
  );
};

export default Page;
