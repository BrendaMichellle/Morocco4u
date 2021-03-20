import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tours from './components/Tours';
import Home from './components/Home';
import Accomodations from './components/Accomodations';
import './App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/tours' component={Tours}/>
        <Route path='/accomodations' component={Accomodations}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
