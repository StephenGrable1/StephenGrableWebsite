import React, {Component} from 'react';
import './IconMarketing.css'

import {
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
          <div className="icon-section-inner">
            <div className="image-outer">
              <img src={analytics} alt="analytics"></img>
              <h3 className="marketing-title">Grow your business.</h3>

              <p className="marketing-text">
              Reach more customers, serve more clients and grow your business. Let me handle all the aspects of getting your
              website up and running so you can focus on your product. 
              </p>
            </div>
            <div className="image-outer">
              <img src={calendar} alt="calendar"></img>
              <h3 className="marketing-title">Meet your budget goals.</h3>

              <p className="marketing-text">
               I am a full-stack developer who can save you the time and hassle of a hiring a full web development team. I can design, build and deploy websites that will help you achieve your business goals.
              </p>
            </div>
            <div className="image-outer">
              <img src={responsive} alt="responsive screens"></img>
              <h3 className="marketing-title">Design for everyone.</h3>

              <p className="marketing-text">
              Visitors expect your website to look good everywhere.
              My website designs will help you look great on any screen size.
              </p>

              <p className="flip-screen-text">
              (Flip your phone to the side or resize your browser to see what I am talking about.)
              </p>

            </div>
          </div>
        </div>

        <div className="icon-marketing-action-btn">
          <Link to="/contact" className="icon-marketing-link">Request a Quote</Link>
        </div>

      </div>
    )
  }
}

export default IconMarketing;
