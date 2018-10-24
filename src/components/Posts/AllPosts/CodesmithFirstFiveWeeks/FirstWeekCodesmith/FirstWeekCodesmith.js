import React, { Component } from 'react';
import './FirstWeekCodesmith.css';

import PingPongPhoto from './media/pingpong.jpg'

class FirstWeekCodesmith extends Component {
    render(){
        return (
            <div className="article-first-week">
                <div className="first-week-outer">
                    <h1>My first week at Codesmith. Initial thoughts and experience.</h1>
                    <h3>The First Week</h3>
                        <div className="first-week-text">
                            My first week at <a href="https://www.codesmith.io/">Codesmith</a> was a long one. I spent approximately 70 hours at
                            their offices in SOHO, Manhattan. Most of the time I was either learning, teaching
                            or struggling to learn or teach (more on this later). We had lectures, paired programming sessions, ping
                            pong tournaments, and very challenging problems to solve. It was a demanding week but 
                            the Codesmith staff makes an asserted effort to keep things fun and social. 
                            
                            <br />
                            <br />
                            The schedule is packed full of material but, to balance that out, there are very generous 2 hour 
                            lunches every Tuesday and Thursday which is great because it allows you time to relax, run some errands, or master your ping-pong serve.
                            Social events are held every Thursday night and it's a great time to connect with the other residents from the program on a non-technical level.
                            I would definitely recommend participating in the festivities since it's the one night dedicated to relaxing and giving your mind a much needed break
                            from all of the technical work you will be doing throughout the program. 
                            This past week, I've come to notice that everyone here at Codesmith is both incredibly smart and talented. 
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
                            and more. Among these, I really enjoyed <a href="https://en.wikipedia.org/wiki/Linked_list">linked-lists</a>
                            , <a href="https://en.wikipedia.org/wiki/Data_structure">data structures</a> and 
                            <a href="https://en.wikipedia.org/wiki/Hash_table"> hash tables</a>. This was the first time I had been exposed 
                            to these advanced computer science topics and I don't believe I would have stumbled on them without the 
                            guidance of the Codesmith curriculum.

                            <br/>
                            <br/>
                            <h3>Paired Programming is the key to accelerated learning.</h3>
                            A huge portion of the program is focused on paired programming. Paired programming, for those who are unfamiliar, is 
                            a learning technique designed to advance your technical communication and problem solving skills by pairing two 
                            engineers to one computer and switching roles from typing code to communicating what needs to be implemented every 10 to 20 minutes.
                            This hones both your technical communication, teaching abilities and problem solving skills within a team. 
                            <br/>
                            <br/>
                            These 3 abilities are some of the stand-out characteristics of Codesmith graduates that I've heard time and time again. Not 
                            only can they solve difficult technical challenges but they can also communicate their approach clearly 
                            to others, which is a uniquely senior-level engineering skill to have. Codesmith has 
                            clearly prioritized their curriculum to promote the development of these highly valuable skills in their residents from week one.
                        </div>
                </div>
            </div>
        );
    }
}

export default FirstWeekCodesmith;
