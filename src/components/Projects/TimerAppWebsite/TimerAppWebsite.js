import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import timerAppWebsite from './media/timer_website_display.png'
import timerGif from "./media/timer-gif.gif"

import './TimerAppWebsite.css'

class TodoAppWebsite extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="timer-app-outer">
        <div className="timer-app-inner">
          <h3 className="project-title-timer">Timer and Countdown Clock</h3>
          <img src={timerAppWebsite} alt="computer-preview-timer" className="computer-preview-timer"></img>
          <p className="timer-website-intro">
            An online timer and countdown clock
        </p>

          <div className="timer-website-link">
            <a href="http://secret-woodland-23466.herokuapp.com/#/?_k=79nppc">Visit Website</a>
          </div>

          <div className="warning-slow-upload-timer">
            <h6 >(Warning: could take up to <span>20 seconds to load.)</span> </h6>
          </div>


          <div className="backend-section-timer">
            <div>
              <h4>Countdown and Timer</h4>
              <h5>Application flow</h5>
              <img src={timerGif} className="backend-request-gif-timer" alt="backend fof handling studio time requests"></img>
            </div>
          </div>


          <div className="timer-overview-outer">
            <div className="timer-overview-outer">
              <h5>Project Overview:</h5>
              <p>
                This project was one of the first projects that I completed while enrolled in <a href="https://www.udemy.com/react-2nd-edition/">a great React/Redux introduction course on Udemy. </a>
                Even though this was a learning project, countdown clocks can be useful in many real world applicatons. I recently implemented a more complex countdown clock for <a href="https://dannybobby.com/home">Danny Bobby's music studio. </a>
                You can see the overview of that project <Link to="/projects/danny-bobby-website">here.</Link>
              </p>
              <p>
                Working on this project gave me the confidence to work with a reactive front-end. I grew a lot as a developer from this. The one thing I struggled the most with was all of the edge cases (when you are working with time... there are a lot of them).
            However, I made it through and now feel comfortable working with fast changing data. Although this project was one of my first, I learned a lot about responsive design
            and handling dynamic font-end information.
            </p>

              <p>
                Want to learn how I can help you create your own custom website with real time updates? Request a free quote by clicking the link below.
            </p>
            </div>
          </div>

          <div className="project-action-btn-timer">
            <Link to="/contact" className="project-action-link-timer">Request a quote</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoAppWebsite;