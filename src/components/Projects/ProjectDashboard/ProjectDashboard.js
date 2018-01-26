import React, {Component} from 'react';
import './ProjectDashboard.css'

import computerImage from './media/computer_website_display.png'

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

                <div className="project-snippet-outer">
                    <div>
                        <img src={computerImage} className="project-snippet-image"></img>
                    </div>
                    <p>
                        An online booking solution for Danny Bobby
                    </p>
                    <div className="snippet-action-btn">
                        <Link to='/projects/danny-bobby-website'>View Project</Link>
                    </div>
                </div>

                <div className="project-snippet-outer">
                    <div>
                        <img src={computerImage} className="project-snippet-image"></img>
                    </div>
                    <p>
                        An online booking solution for Danny Bobby
                    </p>
                    <div className="snippet-action-btn">
                        <Link to='/projects/deaf-boy-website'>View Project</Link>
                    </div>
                </div>

            </div>
        
            <Route exact path='/projects/danny-bobby-website' component={DannyBobbyWebsite}/>
            <Route exact path='/projects/deaf-boy-website' component={DeafBoyWebsite}/>
        </div>
    </div>
    )
  }
}

export default ProjectDashboard;
