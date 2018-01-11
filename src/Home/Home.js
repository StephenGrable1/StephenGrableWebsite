import React, { Component } from 'react';
import './Home.css';
import defaultImage from './media/default.png'

import reactImg from './media/react.png'
import digitalOcean from './media/DigitalOcean_logo.svg.png'
import firebase from './media/firebase-logo.png'
import nginx from './media/Nginx_logo.svg.png'
import express from './media/express.png'
import node from './media/node.svg'
import redux from './media/redux_logo.png'
import js from './media/JavaScript_logo.svg.png'
import webpack from './media/webpack_logo.png'
import html from './media/HTML5_logo.svg.png'
import css from './media/CSS3_logo.svg.png'

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <img src={defaultImage} className="intro-img"></img>
        <p className="intro-text">
          Hi, my name is Stephen and welcome to my website.
          I'm a web developer who is believes in clean code,
          elegant design and exceptional user experiences. I am comfortable
          operating throughout the full stack with an emphasis on responsive
          design and lightning fast, cost effective backend architecture.
          Contact me at stephengrable@gmail.com to see how I can help your business
          on the web.
        </p>

        <img src={reactImg} className="tech-logo"></img>
        <img src={digitalOcean} className="tech-logo"></img>
        <img src={firebase} className="tech-logo"></img>
        <img src={nginx} className="tech-logo"></img>
        <img src={express} className="tech-logo"></img>
        <img src={node} className="tech-logo"></img>
        <img src={redux} className="tech-logo"></img>
        <img src={js} className="tech-logo"></img>
        <img src={webpack} className="tech-logo"></img>
        <img src={html} className="tech-logo"></img>
        <img src={css} className="tech-logo"></img>
      </div>
    );
  }
}

export default Home;
