import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'


import './App.css';
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'
import Home from './Home/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to="/"><h2 className="website-title">Stephen Grable</h2></Link>
          <ul className="app-menu">
            <li><Link to='/' className="nav-link">Home</Link></li>
            <li><Link to='/projects' className="nav-link">Projects</Link></li>
            <li><Link to='/contact' className="nav-link">Contact</Link></li>

          </ul>

          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/projects' component={Projects}/>
        </div>
      </Router>
    );
  }
}

export default App;
