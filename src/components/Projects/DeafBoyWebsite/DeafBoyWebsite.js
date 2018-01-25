import React, {Component} from 'react';
import './DeafBoyWebsite.css'

class DeafBoyWebsite extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
    <div className="deaf-boy-outer">
        <div className="deaf-boy-inner">
            <p>DeafBoy Website</p>
            <a href="http://mbsy.co/lfLNg">Link to Drip</a>
        </div>
    </div>
    )
  }
}

export default DeafBoyWebsite;
