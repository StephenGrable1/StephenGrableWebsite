import React from 'react';
import './SecondWeekCodesmith.css';

import ClassPhoto from './media/class.jpg';


const SecondWeekCodesmith = () => {
    return (
        <div className="article-second-week">
            <div className="second-week-outer">
                <h1>New week, new challenges.</h1>
                <h3>Front end deep dive.</h3>
                <div className="second-week-text">
                    This week was a deep dive into HTML, CSS, jQuery and React. 
                    We learned how to implement a   
                     <a href="https://en.wikipedia.org/wiki/Linked_list"> link list </a> 
                    to move <a href="https://en.wikipedia.org/wiki/Document_Object_Model">DOM</a> elements on a page with CSS and jQuery. We also 
                    jumped into <a href="https://reactjs.org/tutorial/tutorial.html">React</a>, a modern Javascript framework used to create
                    complex front end designs that respond to changes in data almost
                    instantly. The object oriented programing lectures from the first 
                    week really made learning React a breeze. I finally understood the syntax
                    of creating components and the object oriented paradigms that 
                    React developers are employing.

                    <div className="class-photo-container">
                        <img width="300px"  src={ClassPhoto} alt="Classroom at Codesmtih"/>
                        <p className="class-caption">Look at all that snow on the left 👀</p>
                    </div>

                    <br />
                    <br />
                    <h3>Project demos by the seniors.</h3>
                    This week we saw the senior residents, who are 6 weeks ahead of our cohort, 
                    present their final projects. Seniors have only been working on these projects
                     for 2 weeks and already have working prototypes. They've built <a href="https://reactjs.org/docs/state-and-lifecycle.html">React lifecycle </a> 
                     visualizer tools,<a href="https://graphql.org/"> GraphQL </a> query tools and an addon for 
                     docker containers. Still haven't a clue for a good idea for my final project... will check back soon.

                    <br />
                    <br />
                    <h3>Week Overview.</h3>
                    We had to absorb a lot of information this week. Everything from 
                    <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"> HTTP requests</a> to 
                    asynchronous Javascript and the event loop. Most of the great learning moments came from paired programming 
                    and implementing concepts we learned in lectures into working web pages. There was a lot of material covered 
                    this week and because we are moving fast, it takes discipline to understand the concepts fully
                    before we have to move on. 
                    
                    <br/>
                    <br/>
                    
                    Codesmith is a marathon. You have to be willing to put in the long hours
                    necessary to fully absorb the material. It's not easy. I am impressed with my personal growth and I 
                    can tell you now that by the end of these 12 weeks I am confident I will have leveled up as a software engineer.
                    Overall, the material itself feels very relevant and I enjoy how the weekly challenges push me to employ skills that 
                    are beyond my comfort zone.
                    
                    <br/>
                    <br/>
                    I'm excited for the upcoming week because we have <a href="https://redux.js.org/introduction">Redux </a> 
                    and <a href="https://nodejs.org/en/about/">Node</a> on the calendar. Node has always been something I 
                    wanted to explore further and this week will be a great opportunity to dive deeper into back end 
                    Javascript. 
                        </div>
            </div>
        </div>
    )

}

export default SecondWeekCodesmith;
