import React, {Component} from 'react';
import './Projects.css'

import ProjectDashboard from './ProjectDashboard/ProjectDashboard.js'

class Projects extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
     <div>
      <div className="projects">
          <ProjectDashboard/>
      </div>
    </div>
    )
  }
}

export default Projects;
