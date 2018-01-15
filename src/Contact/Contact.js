import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./Contact.css"

class Contact extends React.Component {
  state = {
    value: 'stephengrable@gmail.com',
    copied: false,
  };

  render() {
    return (
      <div>
        <div className="contact-outer">
        <div className="contact-inner">
          <p className="my-email">stephengrable@gmail.com</p>

            <CopyToClipboard text={this.state.value}
              onCopy={() => this.setState({copied: true})}>
              <div className="copy-to-clipboard-btn">
              <button>Copy to clipboard</button>
              </div>
            </CopyToClipboard>

            {this.state.copied ? <span  style={{color: 'green'}}><p>Copied. Paste Away!</p></span> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
