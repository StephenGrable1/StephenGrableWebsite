import React from 'react';
import './SecondWeekCodesmith.css';

import ClassPhoto from './media/class.jpg';


const SecondWeekCodesmith = () => {
    return (
        <div className="article-second-week">
            <div className="second-week-outer">
                <h1>Week 2. New week, new challenges.</h1>
                <h3>Front end deep dive.</h3>
                <div className="second-week-text">
                    This week was a deep dive into HTML, CSS, jQuery and React. 
                    We learned how to implement a   
                     <a href="https://en.wikipedia.org/wiki/Linked_list"> link list </a> 
                    to move <a href="https://en.wikipedia.org/wiki/Document_Object_Model">DOM</a> elements on a page with CSS and jQuery. We also 
                    jumped into <a href="https://reactjs.org/tutorial/tutorial.html">React</a>, a modern Javascript framework used to create
                    complex frontend designs that respond to changes in data quickly and efficiently. The object oriented programing lectures from the first 
                    week really made learning React a breeze. I finally understood the syntax
                    of creating components and the object oriented paradigms that 
                    React developers employ.

                    <div className="class-photo-container">
                        <img width="300px"  src={ClassPhoto} alt="Classroom at Codesmtih"/>
                        <p className="class-caption">Look at all that snow on the left 👀</p>
                    </div>

                    <br />
                    <br />
                    <h3>Senior Project Demos.</h3>
                    This week we saw the senior residents, who are 6 weeks ahead of our cohort, 
                    present the first iteration of their final projects. Seniors have only been working on these projects
                     for 2 weeks and already have working prototypes. They've built <a href="https://reactjs.org/docs/state-and-lifecycle.html">React lifecycle </a> 
                     visualizers,<a href="https://graphql.org/"> GraphQL </a> query tools and addons for 
                     docker containers. Their prototypes were all quite impressive and it really demonstrated a high level of technical knowledge and problem solving 
                     abilities.

                    <br />
                    <br />
                    <h3>2nd Week Overview.</h3>
                    This week we covered everything from <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"> HTTP requests</a> to 
                    asynchronous Javascript and the event loop. Many of the break through learning moments came from paired programming 
                    and implementing concepts we learned in the lectures into working web applications. Overall, there was a ton of material covered 
                    this week. 
                    <br/>
                    <br/>
                    
                    Since we are moving so quickly through the material, it's essential to have a grasp of the current 
                    topics before moving on. This might mean staying late and putting in extra time to fully conceptualize the material. 
                    My cohort rarely leaves the Codesmith offices before 9:30pm. Putting in that extra time 
                    is necessary to succeed in this endeavour. If you do decide to attend Codesmith, you should be prepared, and excited, for these long days.
                     
                    
                    <br/>
                    <br/>
                    I am fairly impressed with my personal growth so far.
                    By the end of these 12 weeks, I have no doubt I will look back and be exhilarated by how far I have come.
                    Overall, the material itself feels incredibly relevant and I enjoy how the weekly challenges push me to employ skills that 
                    are beyond my comfort zone.
                    
                    <br/>
                    <br/>
                    I'm excited for the upcoming week because we have <a href="https://redux.js.org/introduction">Redux </a> 
                    and <a href="https://nodejs.org/en/about/">Node</a> on the calendar. Node has always been something I 
                    wanted to explore further and next week will be a great opportunity to dive deeper into backend 
                    Javascript. 
                        </div>
            </div>
        </div>
    )

}

export default SecondWeekCodesmith;
