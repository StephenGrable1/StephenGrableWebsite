import React, { Component } from 'react';


import "./PostFeed.css"

import FirstWeekCodesmith from "../AllPosts/FirstWeekCodesmith/FirstWeekCodesmith"
import SecondWeekCodesmith from "../AllPosts/SecondWeekCodesmith/SecondWeekCodesmith"


class PostFeed extends Component {
    render() {
      return (
          <div className="post-feed">
            <FirstWeekCodesmith/>
            <SecondWeekCodesmith/>
          </div>
      );
    }
  }
  
  export default PostFeed;