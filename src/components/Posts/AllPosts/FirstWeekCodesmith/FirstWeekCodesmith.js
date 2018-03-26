import React, { Component } from 'react';
import './FirstWeekCodesmith.css';

import PingPongPhoto from './media/pingpong.jpg'

class FirstWeekCodesmith extends Component {
    render(){
        return (
            <div className="article-first-week">
                <div className="first-week-outer">
                    <h1>My experience at Codesmith. Initial thoughts and experience one week in.</h1>
                    <h3>Work hard, play hard.</h3>
                        <div className="first-week-text">
                            My first week at <a href="https://www.codesmith.io/">Codesmith</a> was a long one. I spent approximately 70 hours at
                            their offices in SOHO, Manhattan. Most of the time I was either learning, teaching
                            or struggling to learn or teach. We had lectures, paired programming sessions, ping
                            pong tournaments, and very challenging problems to solve. It was a demanding week but 
                            the Codesmith staff makes an asserted effort to keep things fun and social. They give you 2 hour 
                            lunches every Tuesday and Thursday and the social events on Thursday and Friday give you a 
                            chance to socialize with the other residents in the program. Everyone at Codesmith is incredibly smart. 
                            I feel lucky to be able to spend the next 12 weeks learning and growing with such an exceptional group 
                            of software engineers.  

                            <div className="pp-photo-container">
                                <img  className="ping-pong-photo" src={PingPongPhoto} alt="Playing ping pong at Codesmtih"/>
                                <p className="pp-caption">
                                    Daniel and Paul play a nail-biting ping-pong match with
                                    all star shots and spectacular athleticism. 

                                </p>
                            </div>
                            <br/>
                            <br/>
                            <h3>Javascript, Javascript, Javascript!</h3>
                            We learned a ton of under-the-hood Javascript including OOP, algorithms, data structures
                            and more. Among these I really enjoyed <a href="https://en.wikipedia.org/wiki/Linked_list">linked-lists</a>
                            , <a href="https://en.wikipedia.org/wiki/Data_structure">data structures</a> and 
                            <a href="https://en.wikipedia.org/wiki/Hash_table"> hash tables</a>. This was the first time I had been exposed 
                            to these advanced computer science topics and I don't believe I would have stumbled on these subjects without the 
                            guidance of the Codesmith curriculum.

                            <br/>
                            <br/>
                            <h3>Paired Programming is the key to accelerated learning.</h3>
                            A huge portion of the first week is focused on paired programming. This was one of the parts 
                            that initially attracted me to Codesmith. Learning to solve problems with others is a huge part
                            of the learning process. I've been very impressed by the organization of the program
                            to optimize for learning and I'm excited to see what the next 12 weeks have in store.
                        </div>
                </div>
            </div>
        );
    }
}

export default FirstWeekCodesmith;
