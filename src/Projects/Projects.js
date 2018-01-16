import React, {Component} from 'react';
import './Projects.css'

import DannyBobbyWebsite from './DannyBobbyWebsite/DannyBobbyWebsite.js'

class Projects extends Component {
  render(){
    return (
      <div className="projects">
        <DannyBobbyWebsite />
      </div>
    )
  }
}

export default Projects;
