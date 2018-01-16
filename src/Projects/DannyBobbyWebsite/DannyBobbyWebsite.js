import React, {Component} from 'react';
import './DannyBobbyWebsite.css'

import computerDisplay from './media/computer_website_display.png';
import backendRequests from './media/backend-requests.gif'
import backendUserRequests from './media/backend-user-view.gif'

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
              <h4>User Login and Scheduling</h4>
              <h5>Admin Login and Scheduling Dashboard</h5>
              <img src={backendUserRequests} className="backend-request-gif" alt="backend fof handling studio time requests"></img>
            </div>
          </div>

          <div className="backend-section">
            <div>
              <h4>Fully Integrated Admin Login and Booking Management</h4>
              <h5>Admin Login and Scheduling Dashboard</h5>
              <img src={backendRequests} className="backend-request-gif" alt="backend fof handling studio time requests"></img>
            </div>
          </div>


          <div className="danny-bobby-overview-outer">
            <div className="danny-bobby-overview-outer">
            <h5>Project Overview:</h5>
              <p>
              Project overview will go here. Want to keep this long so the user reads into how we worked and the requirements. Do
              sections about 2-3 senteces max like this. Want to make this compelling.
              </p>
              <p>
              Project overview will go here. Want to keep this long so the user reads into how we worked and the requirements. Do
              sections about 2-3 sentke this compelling. eces max like this. Want to ma eces max like this. Want to maeces max like this. Want to ma
              </p>
              <p>
              Project oveces max like this. Want to maerview will go here. eces muser reads into how we worked and the requirements. Do
              sections aeces max like this. Want to mabout 2-3 senteces max like this. Want to make this compelling.
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default DannyBobbyWebsite;
