import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import './App.css';
import Projects from './Projects/Projects.js'
import Bio from './Bio/Bio.js'
import Home from './Home/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <h2>Stephen Grable</h2>
          <ul className="app-menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/bio'>Bio</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
          </ul>

          <Route exact path='/' component={Home}/>
          <Route exact path='/bio' component={Bio}/>
          <Route exact path='/projects' component={Projects}/>
        </div>
      </Router>
    );
  }
}

export default App;
