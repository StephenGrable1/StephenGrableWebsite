import React, {Component} from 'react';
import './ProjectDashboard.css'

import {
    Route,
    Link
  } from 'react-router-dom'
  
import DannyBobbyWebsite from '../DannyBobbyWebsite/DannyBobbyWebsite.js'
import DeafBoyWebsite from '../DeafBoyWebsite/DeafBoyWebsite.js'

class ProjectDashboard extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
    <div className="project-dash-outer">
        <div className="project-dash-inner">
            <div>
                <Link to='/projects/danny-bobby-website'>Danny Bobby Website</Link>
                <Link to='/projects/deaf-boy-website'>Deaf Boy Website</Link>
            </div>
        
            <Route exact path='/projects/danny-bobby-website' component={DannyBobbyWebsite}/>
            <Route exact path='/projects/deaf-boy-website' component={DeafBoyWebsite}/>
        </div>
    </div>
    )
  }
}

export default ProjectDashboard;
