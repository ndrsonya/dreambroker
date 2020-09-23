import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainArea from './components/mainContent/MainArea';
import Signup from './components/signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return (

    <div className="App">
      <Router>
        <Switch>
            <Route path="/home">
              <Header />
              <MainArea />
              <Footer />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
       
      </Router>
    </div>
  );
}

export default App;
