import React, {Component} from 'react';
import './IconMarketing.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import analytics from './icons/analytics.svg';
import calendar from './icons/calendar.svg';
import responsive from './icons/responsive.svg';

class IconMarketing extends Component {
  render(){
    return (
      <div className="icon-marketing-section">
        <div className="icon-inner">
          <h3 className="services-section-title">IconMarketing</h3>

          <div className="icon-section-inner">
            <div className="image-outer">
              <img src={analytics} alt="analytics"></img>
              <p className="marketing-text">
              This is the marketing text and I am makeing it longer
              </p>
            </div>
            <div className="image-outer">
              <img src={calendar} alt="calendar"></img>
              <p className="marketing-text">
              This is the marketing text
              </p>
            </div>
            <div className="image-outer">
              <img src={responsive} alt="responsive screens"></img>
              <p className="marketing-text">
              This is the marketing text
              </p>
            </div>
          </div>
        </div>

        <div className="icon-marketing-action-btn">
          <Link to="/contact" className="icon-marketing-link">Contact Me</Link>
        </div>

      </div>
    )
  }
}

export default IconMarketing;
