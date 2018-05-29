import React from 'react';
import './ThirdWeekCodesmith.css';

import ClassPhoto from './media/duck-compressor.jpg';


const ThirdWeekCodesmith = () => {
    return (
        <div className="article-third-week">
            <div className="third-week-outer">
                <h1>Week 3. React and Redux plus Node web scrapping.</h1>
                <h3>State management, Nerf gun wars, Chrome Extensions... oh my.</h3>
                <div className="third-week-text">
                    This week I clocked in another 60+ hours at the Codesmith offices in SOHO. 
                    I built a ton of cool projects including
                   a Chrome Extension, a web scrapper
                    and a coupon app built in React and <a href="https://redux.js.org/">Redux</a> that we connected to an <a href="https://pixabay.com/">image API from PixaBay.com</a>.
                    I particularly enjoyed the web scrapper my partner and I built. We employed some advanced technologies including 
                    <a href="https://nodejs.org/en/about/"> Node </a> and <a href="https://cheerio.js.org/">Cheerio</a> to parse through our target site's HTML
                    and scrape it for data. 

                    <br />
                    <br />

                    One of the highlights from this project was learning how to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises to handle asynchronous calls</a> to scrape
                    multiple pages from a website site at once. Really cool stuff. I would definitely like to work more with web
                    scrapping in the future.

                    <br />
                    <br />
                    Another highlight of the week was experimenting with a drag and drop Javascript library called Dragula.
                    Dragula is an awesome
                    <a href="http://bevacqua.github.io/react-dragula/"> React wrapper that makes it easy for you to
                    implement a drag and drop feature</a> into your React components. It's fairly simple to setup, looks great and just works. 
                    I would recommend checking it out if you are interested in implementing a drag and drop feature into your React web application.

                    <br />
                    <br />
                    <h3>My first Tech Talk.</h3>
                    Every person in our cohort does at least one tech talk during their stay at Codesmith. You get 5 minutes to present and explain an advanced Javascript topic to all 
                    of the current residents in the program. 
                    There have been tech talks on
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"> operator precedence</a>,
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"> hoisting in Javascript</a> and more.

                    <br/>
                    <br/>

                    For my topic, I wanted to explore
                    a subject that I've been very interested in recently, the blockchain. While preparing for my presentation I came
                    across a <a href="https://www.savjee.be/2017/07/Writing-tiny-blockchain-in-JavaScript/">great tutorial on implementing a simple blockchain
                    in Javascript.</a> I decided to walk through this example in my tech talk and <a href="https://github.com/StephenGrable1/Blockchain-JS">created my own repository to display how a simple blockchain works with encryption.</a>

                    <br />
                    <br />

                    <h3>The Hack-a-thon.</h3>
                    The day before my tech talk, we had started a very entertaining section of the program, the hack-a-thon.
                    We had no prior knowledge of what the challenge was before it began. They made us drumroll for the reveal and... Chrome Extensions!

                    <br/>
                    <br/>
                    I was excited and partially scared. My partner and I had never worked on a Chrome extension before. We decided to begin at the <a href="https://developer.chrome.com/extensions/getstarted">Chrome developer get started guide</a> to get a sense of how
                    to test and develop software for the <a href="https://www.google.com/chrome/">Chrome browser.</a> Our Chrome extension ended up winning my partner and I second place in the hack-a-thon. For runner-up,
                    we received this shiny, squeaky, yellow duck as our trophy.

                    <div className="duck-photo-container">
                        <img width="300px" src={ClassPhoto} alt="Small yellow squeaky duck trophy" />
                        <p className="duck-caption">Second place trophy 🦆... </p>
                    </div>



                    <h3>3rd Week Overview.</h3>
                    This week was busy. I had to prepare
                    <a href="https://docs.google.com/presentation/d/1Yw3exwjrk1Z9J4ANQk2yg76qHnqzTSypHoQKWPyrEzY/edit#slide=id.p"> my blockchain tech talk</a>,
                    create a Chrome extension from scratch and work on multiple challenges from the units we were learning. Hectic, am I right?
                    Through all the coding madness, we somehow managed to make room for a Nerf gun war, which my team suffered a valiant defeat.
                    Overall, this was my favorite week so far. The units were really enjoyable and I finally got the chance to delve into web scrapping,
                    which I had been wanting to do for a while.

                    <br />
                    <br />

                    I am officially a quarter of the way through the program and I feel excited for what's yet to come. I've found that the structure of the program to be a great fit for me.
                    I enjoy working on 2 day units that push you to understand through doing and teaching. I particularly enjoy when I get the opportunity
                    to help my pair programming partner better understand a topic. Explaining the material clearly and concisely helps me understand it
                    at a deeper level as well.
                </div>
            </div>
        </div>
    )

}

export default ThirdWeekCodesmith;
