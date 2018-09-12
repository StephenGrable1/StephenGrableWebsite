import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import "./PostFeed.css"

import CodesmithFirstFiveWeeks from '../AllPosts/CodesmithFirstFiveWeeks/CodesmithFirstFiveWeeks.js';
import GettingHired from "../AllPosts/GettingHired/GettingHired.js"





class PostFeed extends Component {
  render() {
    return (
      <div className="post-feed">

        <ul className="article-list">
          <li><Link to="/posts/getting-hired">Getting Hired</Link><span>Updated: September 12th, 2018</span></li>
          <li><Link to="/posts/first-five-weeks-cs">Codesmith, The First Five Weeks</Link><span>Updated: August 25th, 2018</span></li>
        </ul>



      </div>
    );
  }
}

export default PostFeed;