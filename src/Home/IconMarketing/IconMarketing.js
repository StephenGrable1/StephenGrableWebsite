import React, {Component} from 'react';
import './IconMarketing.css'

import analytics from './icons/analytics.svg';
import calendar from './icons/calendar.svg';
import responsive from './icons/responsive.svg';

class IconMarketing extends Component {
  render(){
    return (
      <div className="icon-marketing-section">
        <div className="icon-inner">
          <h3>IconMarketing</h3>

          <div className="icon-section-inner">
            <div className="image-outer">
              <img src={analytics} alt="analytics"></img>
            </div>
            <div className="image-outer">
              <img src={calendar} alt="calendar"></img>
            </div>
            <div className="image-outer">
              <img src={responsive} alt="responsive screens"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IconMarketing;
