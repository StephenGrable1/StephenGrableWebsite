import React, { Component } from 'react';


import "./PostFeed.css"

import FirstWeekCodesmith from "../AllPosts/FirstWeekCodesmith/FirstWeekCodesmith"
import SecondWeekCodesmith from "../AllPosts/SecondWeekCodesmith/SecondWeekCodesmith"
import ThirdWeekCodesmith from "../AllPosts/ThirdWeekCodesmith/ThirdWeekCodesmith"
import FourthWeekCodesmith from "../AllPosts/FourthWeekCodesmith/FourthWeekCodesmith"
import FifthWeekCodesmith from "../AllPosts/FifthWeekCodesmith/FifthWeekCodesmith"



class PostFeed extends Component {
    render() {
      return (
          <div className="post-feed">
            <FirstWeekCodesmith/>
            <SecondWeekCodesmith/>
            <ThirdWeekCodesmith/>
            <FourthWeekCodesmith/>
            <FifthWeekCodesmith/>
          </div>
      );
    }
  }
  
  export default PostFeed;