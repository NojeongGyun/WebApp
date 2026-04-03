import React from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div>
      <Article title="React" content="React is a library" />
      <Sidebar info="Sidebar 영역" />
    </div>
  );
};

export default Main;