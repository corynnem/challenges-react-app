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

  const [goldBadge, setGoldBadge] = useState('https://elevenfifty.org/wp-content/uploads/2020/03/badges-webdev_gold.png')
  const [blueBadge, setBlueBadge] = useState("https://elevenfifty.org/wp-content/uploads/2020/03/badges-webdev_blue.png")
  const [redBadge, setRedBadge] = useState("https://elevenfifty.org/wp-content/uploads/2020/03/badges-webdev_red.png")
  



  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/challenges' component={Challenges}>
            <Challenges gold={goldBadge} blue={blueBadge} red={redBadge} />
          </Route>
          <Route exact path='/tutorials' component={Tutorials}>
            <Tutorials gold={goldBadge} blue={blueBadge} red={redBadge}/>
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
