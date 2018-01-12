import React, {Component} from 'react';

import analytics from './icons/analytics.svg';
import calendar from './icons/calendar.svg';
import responsive from './icons/responsive.svg';

class IconMarketing extends Component {
  render(){
    return (
      <div>
        <h3>IconMarketing</h3>
        <img src={analytics}></img>
        <img src={calendar}></img>
        <img src={responsive}></img>
      </div>
    )
  }
}

export default IconMarketing;
