import React from 'react';
import './ThirdWeekCodesmith.css';

import ClassPhoto from './media/class.jpg';


const ThirdWeekCodesmith = () => {
    return (
        <div className="article-third-week">
            <div className="third-week-outer">
                <h1>Week 3. React and Redux plus Node web scrapping</h1>
                <h3>State management, Nerf gun wars, Chrome Extensions... Oh my.</h3>
                <div className="third-week-text">
                   Clocked in another 60 hour week at Codesmith and built a ton of things this week. I made 
                   a <a href="https://developer.chrome.com/extensions/getstarted">Chrome Extension</a>, a web scrapper
                   with the help of a great Javascript library called <a href="https://cheerio.js.org/">Cheerio</a>, and 
                   a coupon app with an image API connected to <a herf="https://pixabay.com/">PixaBay</a>. 


                    <div className="class-photo-container">
                        <img width="300px"  src={ClassPhoto} alt="Classroom at Codesmtih"/>
                        <p className="class-caption">Look at all that snow on the left 👀</p>
                    </div>

                    <br />
                    <br />
                    <h3>Senior Project Demos.</h3>
                    This week we saw the senior residents, who are 6 weeks ahead of our cohort, 
                    present the first prototype of their final projects. Seniors have only been working on these projects
                     for 2 weeks and already have working prototypes. They've built <a href="https://reactjs.org/docs/state-and-lifecycle.html">React lifecycle </a> 
                     visualizer tools,<a href="https://graphql.org/"> GraphQL </a> query tools and an addon for 
                     docker containers. Still haven't a clue for a good idea for my final project... hopefully some divine inspiration will hit me soon.

                    <br />
                    <br />
                    <h3>2nd Week Overview.</h3>
                    This week we covered everything from <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"> HTTP requests</a> to 
                    asynchronous Javascript and the event loop. Most of the great learning moments came from paired programming 
                    and implementing concepts we learned in lectures into working web pages. There was a ton of material covered 
                    this week. 
                    <br/>
                    <br/>
                    
                    Since we are moving so quickly through material, I've found it imperative to understand the current 
                    topics before moving on. This might mean staying late and putting in extra time to fully grasp concepts. 
                    My cohort usually doesn't leave the Codesmith office until after 9:30pm. Putting in significant time 
                    is necessary to succeed in this endeavour. If you do decide to attend Codesmith, you should be prepared, and excited, for these long days.
                     
                    
                    <br/>
                    <br/>
                    
                    I am fairly impressed with my personal growth so far.
                    By the end of these 12 weeks I am confident I will have leveled up as a software engineer.
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

export default ThirdWeekCodesmith;
