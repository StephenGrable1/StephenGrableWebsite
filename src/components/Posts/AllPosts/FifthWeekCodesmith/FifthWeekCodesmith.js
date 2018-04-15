import React, { Component } from 'react';
import './FifthWeekCodesmith.css';

class FifthWeekCodesmith extends Component {
    render(){
        return (
            <div className="article-fifth-week">
                <div className="fifth-week-outer">
                    <h1>My 5th week at Codesmith. Full stack apps. Tying it all together.</h1>
                    <h3>Work hard, play hard.</h3>
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
                            I encountered a few technological challenges along the way. Before this project, I had little 
                            experience working with PostgreSQL databases. When I began implementing the backend for my app, I went back 
                            and forth deciding how I would handle the random auction durations. First I tried to do it with PostgreSQL triggers.
                            However, when I tried to implement that strategy, I encountered some roadblocks. First of all, triggers are 
                            great when you want to automate database logic before or after a certain action takes place. This makes it easy to scale 
                            your application to different platforms without copy and pasting the same database logic everywhere because your logic 
                            lives in the database itself. This is a really cool feature of PostgreSQL. I ended up scratching this approach because 
                            handling randomly generated times was much easier to do in my Express server than it was to do in PostgreSQL. However, I 
                            now am more comfortable with PostgreSQL and have a better sense of when and how to use triggers to automate database logic. 

                           
                        </div>
                </div>
            </div>
        );
    }
}

export default FifthWeekCodesmith;
