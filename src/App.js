import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainArea from './components/mainContent/MainArea';

/**
 * App component renders Header, main area and footer on the landing page
*/

function App() {
  
  return (
    <div className="App">
              <Header />
              <MainArea />
              <Footer />
    </div>
  );
}

export default App;
