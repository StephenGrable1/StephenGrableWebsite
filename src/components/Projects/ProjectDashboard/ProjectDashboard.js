import React, { Component } from 'react';
import './ProjectDashboard.css'

import dannyBobbyPreview from './media/computer_website_display.png'
import deafBoyPreview from './media/deafboy_website_display.png'
import todoPreview from './media/todo_website_display.png'
import timerPreview from './media/timer_website_display.png'

import { Route, Link } from 'react-router-dom'


import DannyBobbyWebsite from '../DannyBobbyWebsite/DannyBobbyWebsite.js'
import DeafBoyWebsite from '../DeafBoyWebsite/DeafBoyWebsite.js'
import TodoAppWebsite from '../TodoAppWebsite/TodoAppWebsite.js'
import TimerAppWebsite from '../TimerAppWebsite/TimerAppWebsite.js'


class ProjectDashboard extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="project-dash-outer">
                <div className="project-dash-inner">
                    <div>
                        <h4 className="projects-title">My Work</h4>
                        <div className="project-snippet-outer">
                            <div>
                                <img src={dannyBobbyPreview} className="project-snippet-image" alt="Danny Bobby Website Preview"></img>
                            </div>
                            <div className="text-action-outer">
                                <p>
                                    An online booking solution for Danny Bobby
                    </p>
                                <div className="snippet-action-btn">
                                    <Link to='/my-work/danny-bobby-website'>View App</Link>
                                </div>
                            </div>
                        </div>


                        <div className="project-snippet-outer project-left-btn">
                            <div>
                                <img src={deafBoyPreview} className="project-snippet-image" alt="Deaf Boy Website Preview"></img>
                            </div>
                            <div className="text-action-outer">
                                <p>
                                    Email subscription with Drip email marketing integration
                    </p>
                                <div className="snippet-action-btn">
                                    <Link to='/my-work/deaf-boy-website'>View App</Link>
                                </div>
                            </div>
                        </div>

                        <div className="project-snippet-outer">
                            <div>
                                <img src={todoPreview} className="project-snippet-image" alt="Todo App Website Preview"></img>
                            </div>
                            <div className="text-action-outer">
                                <p>
                                    A to-do application with social media login
                    </p>
                                <div className="snippet-action-btn">
                                    <Link to='/my-work/todo-app-website'>View App</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Route exact path='/my-work/danny-bobby-website' component={DannyBobbyWebsite} />
                    <Route exact path='/my-work/deaf-boy-website' component={DeafBoyWebsite} />
                    <Route exact path='/my-work/todo-app-website' component={TodoAppWebsite} />
                    <Route exact path='/my-work/timer-app-website' component={TimerAppWebsite} />


                </div>
            </div>
        )
    }
}

export default ProjectDashboard;
