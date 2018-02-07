import React, {Component} from 'react';
import './TimerAppWebsite.css'

class TimerAppWebsite extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
    <div className="timer-app-outer">
        <div className="timer-app-inner">
            <p>Overview coming soon. For now, check out the site in the link below</p>
            <a href="http://secret-woodland-23466.herokuapp.com/#/?_k=79nppc">Visit Timer App Website</a>
            <p>(Warning: may take up to 10 seconds to load)</p>

        </div>
    </div>
    )
  }
}

export default TimerAppWebsite;
