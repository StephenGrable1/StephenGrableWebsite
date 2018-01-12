import React, { Component } from 'react';
import './Home.css';

import IconMarketing from './IconMarketing/IconMarketing.js'

import defaultImage from './media/default.png'
import StephenImg from './media/Stephen_img.png'
import StephenSVG from './media/stephen.svg'

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
import github from './media/Github.svg'
import heroku from './media/heroku.svg'
import reactRouter from './media/react-router.png'
import jest from './media/jestlogo.png'

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <img src={StephenSVG} className="intro-img"></img>
        <p className="intro-text">
          Hi, my name is Stephen and welcome to my website.
          I'm a web developer who is believes in clean code,
          elegant design and exceptional user experiences. I am comfortable
          operating throughout the full stack with an emphasis on responsive
          design and lightning fast, cost effective backend architecture.
          Contact me at stephengrable@gmail.com to see how I can help your business
          on the web.
        </p>

        <IconMarketing />

        <h2 className="tech-title">Technologies</h2>

        <div className="logo-outer">
          <div className="logo-inner">

            <div className="logo">
            <img src={html} className="logo-img"></img>
            </div>

            <div className="logo">
            <img src={css} className="logo-img css"></img>
            </div>

            <div className="logo">
            <img src={js} className="logo-img"></img>
            </div>

            <div className="logo">
              <img src={reactImg} className="logo-img"></img>
            </div>

            <div className="logo">
            <img src={redux} className="logo-img"></img>
            </div>

            <div className="logo">
            <img src={reactRouter} className="logo-img router"></img>
            </div>

            <div className="logo">
            <img src={node} className="logo-img node"></img>
            </div>

            <div className="logo">
            <img src={express} className="logo-img express"></img>
            </div>


            <div className="logo">
              <img src={digitalOcean} className="logo-img"></img>
            </div>

            <div className="logo">
            <img src={heroku} className="logo-img heroku"></img>
            </div>

            <div className="logo">
            <img src={nginx} className="logo-img nginx"></img>
            </div>

            <div className="logo">
              <img src={firebase} className="logo-img firebase"></img>
            </div>

            <div className="logo">
            <img src={webpack} className="logo-img webpack"></img>
            </div>

            <div className="logo">
            <img src={jest} className="logo-img jest"></img>
            </div>

            <div className="logo">
            <img src={github} className="logo-img github"></img>
            </div>



          </div>
        </div>
      </div>
    );
  }
}

export default Home;
