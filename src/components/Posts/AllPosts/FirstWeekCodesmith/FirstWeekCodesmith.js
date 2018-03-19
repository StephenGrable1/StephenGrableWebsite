import React, { Component } from 'react';
import './FirstWeekCodesmith.css';

class FirstWeekCodesmith extends Component {
    render(){
        return (
            <div className="first-week-outer">
                <h1>My experience at Codesmith. Initial thoughts and experience one week in.</h1>
                 <h3>Paired programing and the skill of sharing the same approach.</h3>
                    <div className="first-week-text">
                        My first week at <a href="https://www.codesmith.io/">Codesmith</a> was a long one. I spent approximately 70 hours at
                        their offices in SOHO, Manhattan. Most of the time I was either learning, teaching
                        or struggling to learn or teach. We had lectures, paired programming sessions, ping
                        pong tournaments, and interesting, challenging problems to solve. 

                        <br/>
                        <br/>

                        We learned a ton of under-the-hood Javascript including OOP, algorithms, data structures
                        and more. Among these I really enjoyed <a href="https://en.wikipedia.org/wiki/Linked_list">linked-lists</a>
                        , <a href="https://en.wikipedia.org/wiki/Data_structure">data structures</a> and 
                        <a href="https://en.wikipedia.org/wiki/Hash_table">hash tables</a>. 

                        <br/>
                        <br/>
                        
                        A huge portion of the first week is focused on paired programming. This was one of the parts 
                        that initially attracted me to Codesmith. Learning to solve problems with others is a huge part
                        of the learning process. I've been very impressed by the organization of the program
                        to optimize for learning. My cohort has 13 residents in it and every single one is knowledgeable and 
                        smart. 

                        Over the past week we have had 3 sections all consisting of 2 days each. For each section, 
                        we have a different paired programming partner and a set of lectures and coding challenges. 
                        I've enjoyed this structure and I'm excited to see what this learning style yields over these next 12 
                        weeks. 
                    </div>
            </div>
        );
    }
}

export default FirstWeekCodesmith;
