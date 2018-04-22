import React, { Component } from 'react';
import './SixthWeekCodesmith.css';

class SixthWeekCodesmith extends Component {
    render(){
        return (
            <div className="article-sixth-week">
                <div className="sixth-week-outer">
                    <h1>Made it to halftime. 6 weeks in.</h1>
                    <h3>Pickup someone else's project and make it better.</h3>
                        <div className="sixth-week-text">
                           This week was a roller-coaster. We started this week with a new preassigned group.
                           The first thing we had to decide was which project we would choose to build on top of. 
                           Last week, our cohort made 4 full stack applications. My group created 
                           <a href="https://github.com/StephenGrable1/OmegaSpace"> a collaborative document editor 
                           using Socket.io, React and PostgreSQL.</a> This week, we change groups and 
                           chose which application we wanted to built on top of.  This would teach us how to find 
                           our way through a unfamiliar codebase. 
                            
                            <br />
                            <br />
                            My group and I picked a project that was very challenging. We went into the week knowing 
                            that our codebase wasn't working. A risky move, since we only had three days to make our improvements.
                            Our choice was different from the other groups decisions to pickup a project that was working from the start. 
                           
                            <br/>
                            <br/>
                            <h3>Multiplayer Asteroid Game in the browser.</h3>
                            The group that originally built the first version of the code 
                            designed it to be played over websockets. The architecture employed some advance 
                            <a href="https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing#interpolate-drawing"> state management via interpolation. </a> 
                            It took much of the 3 days just understanding this subject. Interpolation helps you predict what a game would look
                            like at any given time. When building a multi-player game, you can't rely on the network to hold your information
                            for what the game will look like. You can't rely on state either because that would mean you would have to 
                            send that information through the network to other players as well. And as we learned, you can't rely on the 
                            network. 



                            <br/>
                            <br/>
                            So now, what do you rely on to predictably display the game correctly on all players screens? Time. 
                            You calculate what the screen looks like based on how much time has passed. If a player makes an action, 
                            you send that action to other players. Those players then calculate, based on that action and the amount of time passed,
                            what the game should now look like. 
                            <br/>
                            <br />
                            This is a really cool and advanced topic. I learned a lot about state management in a multiplayer game. Once me and my team 
                            firmly had a grasp of this concept, we began to fix the game in singleplayer mode. We scoped the project back and 
                            we did manage to get the game working and interpolating on multiple viewers screens. 


                            <h3>Mid-term assessment test.</h3>
                            At the halfway point of the program, 6 weeks in, we are evaluated on our retention of the past 5 weeks information. 
                            The assessment can be on any subject we covered like data structures, algorithms, Express, PostgreSQL, MongoDB, 
                            DOM manipulation and more. 

                            <br />
                            <br />
                            The test had two parts. The first half was focused on piecing together all of the technologies we've learned into 
                            one application. We had to build a full stack app with a basic authentication scheme, and session handling. 

                            <br />
                            <br />
                            The next part of the assessment consisted of smaller parts which tested your understanding of other portions of the program like 
                            data structures, algorithms and such. Overall, it was a very broad test and covered a lot of material. 
                            This assessment is a great way to find topics that you could use more practice on. I'm writing this before each of us receive 
                            personal feedback on our performance in the assessment, which I really like and am excited for. 

                            <br />
                            <br />
                            <h3>Final project iteration begins.</h3> 
                            After the assessment, we are briefed on the final project that we will be working on for the next 5 weeks.
                            We get this next week to iterate and come up with 3 ideas that will need to be approved. My team and I have 
                            been brainstorming and doing a lot of research. The next article will be at the end of the 6 weeks recapping 
                            the entire process and hopefully a really cool project to show off. 

                            <br />
                            <br />
                            Stay tuned!
                            

                           
                        </div>
                </div>
            </div>
        );
    }
}

export default SixthWeekCodesmith;
