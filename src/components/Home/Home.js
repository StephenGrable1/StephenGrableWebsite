import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import './Home.css';

import IconMarketing from './IconMarketing/IconMarketing.js'
import ProjectDashboard from '../Projects/ProjectDashboard/ProjectDashboard.js'


import StephenSVG from './media/stephen.png'

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
          <div className="stephen-intro-outer">
            <div className="intro-text-outer">
              <div className="intro-text-inner">
                <p className="intro-text">
                  My name is Stephen and welcome to my website.
                <br />
                  I'm a software engineer who believes in
                elegant design and exceptional user experiences.
              </p>
              </div>
            </div>
            <img src={StephenSVG} className="intro-img" alt="Stephen Character"></img>
            <div className="intro-action-btn-outer">
              <Link to="/my-work" className="intro-action-btn">See My Work</Link>
            </div>
          </div>

          <IconMarketing />

          <ProjectDashboard />

          <h2 className="tech-title">Technologies</h2>

          <div className="logo-outer">
            <div className="logo-inner">

              <div className="logo">
                <img src={html} className="logo-img" alt="HTML5"></img>
              </div>

              <div className="logo">
                <img src={css} className="logo-img css" alt="CSS3"></img>
              </div>

              <div className="logo">
                <img src={js} className="logo-img" alt="Javascript"></img>
              </div>

              <div className="logo">
                <img src={reactImg} className="logo-img" alt="React"></img>
              </div>

              <div className="logo">
                <img src={redux} className="logo-img" alt="Redux"></img>
              </div>

              <div className="logo">
                <img src={reactRouter} className="logo-img router" alt="React Route"></img>
              </div>

              <div className="logo">
                <img src={node} className="logo-img node" alt="Node.js"></img>
              </div>

              <div className="logo">
                <img src={express} className="logo-img express" alt="Express.js"></img>
              </div>


              <div className="logo">
                <img src={digitalOcean} className="logo-img" alt="DigitalOcean"></img>
              </div>

              <div className="logo">
                <img src={heroku} className="logo-img heroku" alt="Heroku"></img>
              </div>

              <div className="logo">
                <img src={nginx} className="logo-img nginx" alt="Nginx"></img>
              </div>

              <div className="logo">
                <img src={firebase} className="logo-img firebase" alt="Firebase"></img>
              </div>

              <div className="logo">
                <img src={webpack} className="logo-img webpack" alt="Webpack"></img>
              </div>

              <div className="logo">
                <img src={jest} className="logo-img jest" alt="Jest"></img>
              </div>

              <div className="logo">
                <img src={github} className="logo-img github" alt="GitHub"></img>
              </div>



            </div>
          </div>
        </div>
    );
  }
}

export default Home;
