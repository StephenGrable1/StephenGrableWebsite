import React, { Component } from 'react';
import './FifthWeekCodesmith.css';

import OmegaSpacePre from './media/OmegaSpace.gif';
import audioAuction from './media/audioAuction.gif';

class FifthWeekCodesmith extends Component {
    render() {
        return (
            <div className="article-fifth-week">
                <div className="fifth-week-outer">
                    <h1>My 5th week at Codesmith. Full stack apps. Tying it all together.</h1>
                    <h3>Build it and you will learn.</h3>
                    <div className="fifth-week-text">
                        This is where it starts to get exciting. The fifth week of Codesmith is all about
                            building projects that bring together all of the past technologies you've been working
                            with in the last four weeks. The Codesmith team encourages you to build full stack
                            applications that use both front end technologies, like React, and backend databases.

                            <br />
                        <br />
                        At beginning of this week, residents in my cohort built a plethora of really cool solo projects. This is one of
                            the few times during the program where you work alone. The guidelines for this portion of the week were
                            very open ended, which meant you could work on really whatever you wanted.
                             Residents in my cohort built micro-blogging websites, real-time collaborative drawing applications and many other cool and interesting
                            projects.

                            <br />
                        <br />
                        For my solo project, I built a full stack auction application. The idea was simple. I wanted to create
                            a auction site for audio instrumentals. The auction time would randomly be set anywhere between five minutes
                            and 24 hours. Once the current auction ended, I would randomly set the next auctions end time in the database
                            and also randomly select six tracks to become available for purchase from a pool of around 100 other audio tracks.

                            <br />
                        <br />
                        In two days, I managed to create a countdown clock on the front end using React.
                            I also connected this clock to my PostgreSQL database to read the auction end time
                            and randomly set the next 6 audio tracks to be displayed in the next auction once
                            the current one terminated.

                            <br />
                        <br />

                        <div className="audio-auction-outer">
                            <div className="audio-auction-inner">
                                <img src={audioAuction} alt="Audio auction preview with countdown clock" />
                                <p>Here is the demo of the auction app I built in just 2 days.
                                    I'm manually resetting the auction here to demonstrate how
                                    the app would work when the auction timer hits zero.
                                </p>
                            </div>
                        </div>

                        <br />
                        <br />
                        I encountered a few technological challenges along the way. Before this project, I had only a handful of
                            experiences working with PostgreSQL databases. When I began implementing the backend for my app, I went back
                            and forth deciding how I would handle the process of randomly selecting the auction duration. First I tried to do it with PostgreSQL triggers.
                            However, when I tried to implement that strategy, I encountered some roadblocks.

                            <br />
                        <br />
                        First of all, triggers are
                            great when you want to automate database logic before or after a certain action takes place. This makes it easy to scale
                            your application to different platforms without copy and pasting the same database logic everywhere because your logic
                            lives in the database itself. This is a really cool feature of PostgreSQL. I ended up scratching this approach because
                            handling randomly generated times was much easier to do in my Express server than it was to do in PostgreSQL. However, during my 
                            research into PostgreSQL triggers, I gained better sense of how and when to use triggers to automate and simplify your database logic.

                        <h3>Project #2. Team work flow and coordination.</h3>
                        During the second half of the week, we were grouped into teams of 3 to 4 people. Each team had to iterate on 
                        ideas and present 2 to 3 options to the Codesmith fellows. This process was more structured than the solo project. 
                        I'm glad it was because during our pitch, the fellows helped us scope our project into something we could finish 
                        in 3 days. 

                        <br />
                        <br />
                        My team and I began the 3 day sprint with the idea to create a <a href="http://csbin.io/">Csbin.io</a> clone. 
                        A few hours into the project and we decided to re-scope our project create something more similar to Google Docs instead of Csbin.
                        Instead executing Javascript in our text editor, we wanted to focus more on a collaborative note-pad where users could simply edit a document at the same time. 

                        <br />
                        <br />

                        <div className="omega-space-outer">
                            <div className="omega-space-inner">
                                <img src={OmegaSpacePre} alt="Collaborative note-pad app that lets users edit the same document in real-time" />
                                <p>This is a working demo of the real-time collaborative document editor my team and I build 
                                    in a little under 3 days. 
                                </p>
                            </div>
                        </div>

                        <br />
                        <br />
                        There were a couple of interesting technological challenges in this build. You can head over to <a href="https://github.com/StephenGrable1/OmegaSpace">the repository for this
                        project</a> to read how my team and I overcame these challenges and went on to present a fully functional demo of our app at the end of the week. 

                        <br />
                        <br />

                        <h3>Team collaboration and workflow</h3>
                        One of the main things I learned during this project was how to work effectively with a team to coordinate efforts and 
                        meet deadlines. We were a team of 3 developers and began the week by outlining all of the tasks needed to be done 
                        in order to have a working product by the end of 3 days. We met all of our goals and I believe there 
                        were 3 reasons why we were so successful.

                        <ol>
                            <strong><li>Project Breakdown</li></strong>
                            <p>
                                The very first thing we did before we started any coding was create all the tasks needed to be completed 
                                before the deadline. This was a very helpful exercise. It helped us visualize all the steps needed to complete 
                                the product and since we did it together, everyone in the group knew each and every task, even if they weren't 
                                working on it. 

                                <br />
                                <br />

                                When each team member went on to work on their seperate tasks, we each had in mind what the others were working on 
                                at any given time. This made it really easy to come together and merge our progress seamlessly. This process was 
                                inspired by Scrum, which is a workflow framework that promotes productivity and speed of execution.  
                            </p>
                            <strong><li>Proper Scoping</li></strong>
                            <p>
                                One of the main indicators of a embarking on a successful project is properly scoping the feature set. 
                                No matter how fast you are, if your team scopes a feature set to be too big, you will fail. We 
                                
                                 </p>
                            <strong><li>Communication</li></strong>
                        </ol>

                        </div>
                </div>
            </div>
        );
    }
}

export default FifthWeekCodesmith;
