import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainArea from './components/mainContent/MainArea';

function App() {

  return (
    
    <div className="App">
      <Header/>
      <MainArea/>
      <Footer/>
    </div>
  );
}

export default App;
