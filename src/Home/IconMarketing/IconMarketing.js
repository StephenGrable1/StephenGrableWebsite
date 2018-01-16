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
          <h3 className="services-section-title"></h3>

          <div className="icon-section-inner">
            <div className="image-outer">
              <img src={analytics} alt="analytics"></img>
              <h3 className="marketing-title">Grow Your Business</h3>


              <p className="marketing-text">
              Reach more customers, serve more clients and grow your business through a new website.
              </p>
            </div>
            <div className="image-outer">
              <img src={calendar} alt="calendar"></img>
              <h3 className="marketing-title">Meet your budget goals.</h3>

              <p className="marketing-text">
               I am a FullStack developer who can save you the time and hassle of a full team.
              </p>
            </div>
            <div className="image-outer">
              <img src={responsive} alt="responsive screens"></img>
              <h3 className="marketing-title">Design for everyone.</h3>

              <p className="marketing-text">
              Visitors expect your website to look good on every screen.
              My website designs will help you look great at any screen size.
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
