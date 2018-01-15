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
            <img src={analytics} alt="analytics"></img>
            <img src={calendar} alt="calendar"></img>
            <img src={responsive} alt="responsive screens"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default IconMarketing;
