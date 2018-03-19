import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Home from './Home/Home.js'


import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'
import PostFeed from './Posts/PostFeed/PostFeed.js'


//Projects
import DannyBobbyWebsite from './Projects/DannyBobbyWebsite/DannyBobbyWebsite.js'
import DeafBoyWebsite from './Projects/DeafBoyWebsite/DeafBoyWebsite.js'
import TodoAppWebsite from './Projects/TodoAppWebsite/TodoAppWebsite.js';
import TimerAppWebsite from './Projects/TimerAppWebsite/TimerAppWebsite.js';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to="/"><h2 className="website-title">Stephen Grable</h2></Link>
          <ul className="app-menu">
            <li><Link to='/' className="nav-link">Home</Link></li>
            <li><Link to='/projects' className="nav-link">Projects</Link></li>
            <li><Link to='/posts' className="nav-link">Posts</Link></li>
            <li><Link to='/contact' className="nav-link">Contact</Link></li>

          </ul>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/posts' component={PostFeed}/>
          <Route exact path='/projects/deaf-boy-website' component={DeafBoyWebsite}/>
          <Route exact path='/projects/danny-bobby-website' component={DannyBobbyWebsite}/>
          <Route exact path='/projects/todo-app-website' component={TodoAppWebsite}/>
          <Route exact path='/projects/timer-app-website' component={TimerAppWebsite}/>

        </div>
      </Router>
    );
  }
}

export default App;
