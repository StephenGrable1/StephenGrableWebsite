import React, {Component} from 'react';
import './DannyBobbyWebsite.css'

import computerDisplay from './media/computer_website_display.png';

class DannyBobbyWebsite extends Component {
  render(){
    return (
      <div className="danny-bobby-outer">
        <div className="danny-bobby-inner">
          <h3 className="project-title">Danny Bobby Scheduling App</h3>
          <img src={computerDisplay} alt="computer-preview" className="computer-preview"></img>
          <p>
            An online studio booking solution for the Danny Bobby.
          </p>
        </div>
      </div>
    )
  }
}

export default DannyBobbyWebsite;
