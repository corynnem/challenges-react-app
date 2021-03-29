import logo from './logo.svg';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tutorials from './components/Tutorials'
import Challenges from './components/Challenges'
import Feedback from './components/Feedback'
import Navbar from './components/Nav/Navbar'
import Instructions from './components/Instructions';
import {createStore} from 'redux'
import './App.css';


function App() {



  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/challenges' component={Challenges}>
            <Challenges/>
          </Route>
          <Route exact path='/tutorials' component={Tutorials}>
            <Tutorials/>
          </Route>
          <Route exact path="/feedback" component={Feedback}>
              <Feedback />
          </Route>
          <Route exact path='/' component={Instructions}>
              <Instructions/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
