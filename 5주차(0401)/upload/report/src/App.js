import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Nav menu="Home | About | Contact" />
      <Main />
      <Footer company="MyCompany" />
    </div>
  );
}

export default App;