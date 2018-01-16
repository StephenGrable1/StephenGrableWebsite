import React, {Component} from 'react';
import './DannyBobbyWebsite.css'

import computerDisplay from './media/computer_website_display.png';
import backendRequests from './media/backend-requests.gif'

class DannyBobbyWebsite extends Component {
  render(){
    return (
      <div className="danny-bobby-outer">
        <div className="danny-bobby-inner">
          <h3 className="project-title">Danny Bobby Scheduling App</h3>
          <img src={computerDisplay} alt="computer-preview" className="computer-preview"></img>
          <p className="danny-website-intro">
            An online studio booking solution for Danny Bobby.
          </p>

          <div className="danny-website-link">
            <a href="https://dannybobby.com/home" >Visit DannyBobby.com</a>
          </div>

          <div className="backend-section">
            <div>
              <h4>Fully Integrated User Login and Booking Management</h4>
              <h5>Admin Login and Scheduling Dashboard</h5>
              <img src={backendRequests} className="backend-request-gif" alt="backend fof handling studio time requests"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DannyBobbyWebsite;
