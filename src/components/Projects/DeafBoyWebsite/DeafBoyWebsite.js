import React, {Component} from 'react';
import './DeafBoyWebsite.css'
import { Link } from 'react-router-dom'

import deafBoyPreview from './media/deafboy_website_display.png'

import emailSignup from './media/email_signup.gif'


class DeafBoyWebsite extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
        <div className="deaf-boy-outer">
        <div className="deaf-boy-inner">
          <h3 className="project-title-db">deafBoy USA Landing Page</h3>
          <img src={deafBoyPreview} alt="computer-preview-db" className="computer-preview-db"></img>
          <p className="deaf-boy-intro">
          Email subscription with Drip marketing integration
          </p>

          <div className="deaf-boy-link">
            <a href="http://deafboyusa.com">Visit deafBoyUSA.com</a>
          </div>

          <div className="backend-section-db">
            <div>
              <h4>Email signup with progress bar and drip email marketing integration</h4>
              <h5>Responsive email signup form with progress bar</h5>
              <img src={emailSignup} className="backend-request-gif-db" alt="email signup gif showing progress bar and reCaptcha"></img>
            </div>
          </div>


          <div className="deaf-boy-overview-outer">
            <div className="deaf-boy-overview-outer">
            <h5>Project Overview:</h5>
              <p>
              <a href="https://www.getdrip.com/">Drip email marketing</a> is one of the most advanced email automation software in the market today. I wanted to build
              a landing page that would enable users to easily sign up to a email newsletter. I also wanted to integrate a reCaptcha from Google to prevent spam and bots
              from accessing and signing up for the newsletter. 
              </p>
              <p>
              Users always comes first. So, I decided to implement a progress bar to update the user on their progress while entering and submitting their email.
              As soon as the user starts to type their email, the progress bar responds and gives them immediate feedback. This feature turns a simple email signup form
              into a game. A game that the user is compelled to finish. 
              </p>
              <p>
              Not only do I believe this will increase signup conversions but I also believe it is just plain ol' fun. Engaging with software is a conversation. Like human conversation, 
              you can converse by mail and wait weeks for a response or you can call someone and get information quickly. 
              </p>

              <p>
              Software should respond immediately and communicate with the user in real time at every click and keystroke.
              </p>

              <p>
              Want to learn how I can help you create your own responsive landing page and custom website? Request a free quote by clicking the link below.
              </p>
            </div>
          </div>

          <div className="project-action-btn-db">
            <Link to="/contact" className="project-action-link-db">Request a quote</Link>
          </div>

        </div>
      </div>
    )
  }
}

export default DeafBoyWebsite;
