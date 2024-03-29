import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import "./Contact.css"

class Contact extends React.Component {
  state = {
    value: 'stephengrable@gmail.com',
    copied: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="contact-outer">
          <div className="contact-inner">

            <div className="question">
              <h2 className="contact-question">How do I request my first quote?</h2>
              <p className="my-email">Please email me at stephengrable@gmail.com and I will get back in touch as soon as possible!</p>

              <div className="copy-email-btn">
                <CopyToClipboard text={this.state.value}
                  onCopy={() => this.setState({ copied: true })}>
                  <div className="copy-to-clipboard-btn">
                    <button>Copy email to clipboard</button>
                  </div>
                </CopyToClipboard>
                {this.state.copied ? <span id="copy-status" style={{ color: 'green' }}><p>Copied. Paste Away!</p></span> : null}
              </div>

            </div>
            <div className="question two-question">
              <h2 className="contact-question">I need a website, can you help?</h2>
              <p>I can! Let me guide you through the website development process. I'll design and
              develop a website you can be proud to show to your clients.
              </p>
            </div>

            <div className="question">
              <h2 className="contact-question">Can you update my current website to something better?</h2>
              <p>You want your future customers to have a great experience interacting with your site. I can get you there.
              Let's give your website a brand new look!
            </p>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
