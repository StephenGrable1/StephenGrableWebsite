import React, { Component } from 'react';


import "./PostFeed.css"

import FirstWeekCodesmith from "../AllPosts/FirstWeekCodesmith/FirstWeekCodesmith"

class PostFeed extends Component {
    render() {
      return (
          <div className="post-feed">
            <FirstWeekCodesmith/>
          </div>
      );
    }
  }
  
  export default PostFeed;