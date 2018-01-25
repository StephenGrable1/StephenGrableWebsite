import React, {Component} from 'react';
import './Projects.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



import DannyBobbyWebsite from './DannyBobbyWebsite/DannyBobbyWebsite.js'
import DeafBoyWebsite from './DeafBoyWebsite/DeafBoyWebsite.js'

class Projects extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
      <Router>
        <div className="projects">
        <div>
          <Link to='/projects/DannyBobbyWebsite'>Danny Bobby Website</Link>
          <Link to='/projects/DeafBoyWebsite'>Deaf Boy Website</Link>

        </div>
        <Route exact path='/projects/DannyBobbyWebsite' component={DannyBobbyWebsite}/>
        <Route exact path='/projects/DeafBoyWebsite' component={DeafBoyWebsite}/>
        </div>
      </Router>
    )
  }
}

export default Projects;
