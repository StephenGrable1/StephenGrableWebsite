import React, {Component} from 'react';
import './ProjectDashboard.css'

import dannyBobbyPreview from './media/computer_website_display.png'
import deafBoyPreview from './media/deafboy_website_display.png'
import todoPreview from './media/todo_website_display.png'
import timerPreview from './media/timer_website_display.png'



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
                <h4 className="projects-title">Projects</h4>
                <div className="project-snippet-outer">
                    <div>
                        <img src={dannyBobbyPreview} className="project-snippet-image" alt="Danny Bobby Website Preview"></img>
                    </div>
                    <div className="text-action-outer">
                    <p>
                        An online booking solution for Danny Bobby
                    </p>
                    <div className="snippet-action-btn">
                        <Link to='/projects/danny-bobby-website'>View Project</Link>
                    </div>
                </div>
            </div>

            <hr className="project-separator" />

            <div className="project-snippet-outer project-left-btn">
                <div>
                    <img src={deafBoyPreview} className="project-snippet-image" alt="Deaf Boy Website Preview"></img>
                </div>
                <div className="text-action-outer">
                    <p>
                        Email subscription with Drip marketing integration
                    </p>
                    <div className="snippet-action-btn">
                        <Link to='/projects/deaf-boy-website'>View Project</Link>
                    </div>
                </div>
            </div>

            <hr className="project-separator" />


            <div className="project-snippet-outer">
                <div>
                    <img src={todoPreview} className="project-snippet-image" alt="Todo App Website Preview"></img>
                </div>
                <div className="text-action-outer">
                    <p>
                        A to-do application with github login
                    </p>
                    <div className="snippet-action-btn">
                        <Link to='/projects/deaf-boy-website'>View Project</Link>
                    </div>
                </div>
            </div>

            <hr className="project-separator" />


            <div className="project-snippet-outer project-left-btn">
                <div>
                    <img src={timerPreview} className="project-snippet-image" alt="Timer App Website Preview"></img>
                </div>
                <div className="text-action-outer">
                    <p>
                        An online timer and countdown clock
                    </p>
                    <div className="snippet-action-btn">
                        <Link to='/projects/deaf-boy-website'>View Project</Link>
                    </div>
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
