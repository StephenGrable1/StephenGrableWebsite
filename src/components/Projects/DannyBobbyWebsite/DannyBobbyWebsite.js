import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import './DannyBobbyWebsite.css'

import computerDisplay from './media/computer_website_display.png';
import backendRequests from './media/backend-requests.gif'
import backendUserRequests from './media/backend-user-view.gif'
import responsiveMarketing from './media/targeted-responsive-marketing.gif'

class DannyBobbyWebsite extends Component {
  componentDidMount() {
    window.scrollTo(0, 0, 0);
  }
  render() {
    return (
      <Router>
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
                <h4>Targeted Marketing Messages</h4>
                <h5>Marketing messages will change depending on the type of visitor</h5>
                <img src={responsiveMarketing} className="backend-request-gif" alt="targeted marketing gif"></img>
              </div>
            </div>

            <div className="backend-section">
              <div>
                <h4>User Login and Scheduling</h4>
                <h5>Users can create an account with their Facebook and manage requested and approved studio sessions</h5>
                <img src={backendUserRequests} className="backend-request-gif" alt="backend fof handling studio time requests"></img>
              </div>
            </div>

            <div className="backend-section">
              <div>
                <h4>Fully Integrated Admin Login and Booking Management</h4>
                <h5>Administrators can login to a custom dashboard to view session requests and manage their clients</h5>
                <img src={backendRequests} className="backend-request-gif" alt="backend fof handling studio time requests"></img>
              </div>
            </div>


            <div className="danny-bobby-overview-outer">
              <div className="danny-bobby-overview-outer">
                <h5>Project Overview:</h5>
                <p>
                  Danny Bobby approached me wanting a complete revamp of his website. He had a few requirements. First, He wanted
              a scheduling dashboard where his clients could easily signup for a studio session. Second, he wanted a elegant
              home page to show potential clients past work, customer reviews and more.
              </p>
                <p>
                  We began the project with a interview and questionnaire. I made sure I had a strong grasp of his vision for the website before beginning work.
              This way, I could present an accurate timeline for completion and keep it within his desired budget.
              </p>
                <p>
                  Danny now has a place to send customers and manage studio sessions. As he grows his business, he can take advantage of
              a fully integrated web application with user login and account management. Now, with his new website, it is easy for Danny to continue to add custom features to better
              serve his customers.
              </p>

                <p>
                  Want to learn how I can help you create your own custom website? Request a free quote by clicking the link below.
              </p>
              </div>
            </div>

            <div className="project-action-btn">
              <Link to="/contact" className="project-action-link">Request a quote</Link>
            </div>

          </div>
        </div>
      </Router>
    )
  }
}

export default DannyBobbyWebsite;
