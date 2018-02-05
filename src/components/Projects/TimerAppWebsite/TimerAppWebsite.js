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
            <p>Timer App</p>
        </div>
    </div>
    )
  }
}

export default TimerAppWebsite;
