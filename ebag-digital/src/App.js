import React from 'react';
import './App.css';

// Where the components are imported
import Navbar from './components/navbar';
import Header from './components/header'
import Intro from './components/intro'


function App() {
  return (
    <div className="App">
      {/* Where the components are loaded */}
      <Navbar />
      <Header />
      <Intro />

    </div>
  );
}

export default App;
