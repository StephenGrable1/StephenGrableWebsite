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
                    This week I clocked in another 60+ hours at the Codesmith office in SOHO. I made a ton of fun projects like
                   a <a href="https://developer.chrome.com/extensions/getstarted">Chrome Extension</a>, a web scrapper
                    and a coupon app connected to an <a href="https://pixabay.com/">image API at PixaBay.com</a>.
                    I really enjoyed the web scrapper that my partner and I built. We used <a href="https://nodejs.org/en/about/"> Node </a>
                    to retrieve our target sites HTML. Then we employed a Javascript library called <a href="https://cheerio.js.org/">Cheerio</a> to parse through the HTML
                    and scrape it for data. This JSON data was then made available at a custom endpoint on our server. 
                    
                    <br/>
                    <br/>
                    
                    We used <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises to handle asynchronous calls</a> to scrape 
                    multiple pages from the target site at once. Really cool stuff. I would definitely like to learn more about web 
                    scrapping in the future and how to implement a rate limit feature. However, I digress.

                    <br />
                    <br />
                    Another highlight of the week was experimenting with a drag and drop Javascript library called Dragula.
                    This part wasn't in the curriculum. My partner and I implemented this library into the app we built 
                    after we had finished all of the challenges in the React and Redux unit.
                    Dragula is a
                    <a href="http://bevacqua.github.io/react-dragula/"> React wrapper that makes it easy for you to
                    implement a drag and drop feature</a> into your React components. I think it is well worth checking
                    out if you are searching for a easy to use drag and drop library with an elegant user interface.


                    <br />
                    <br />
                    <h3>My first Tech Talk.</h3>
                   Every resident in our cohort does at least one tech talk during their stay at Codesmith. You get 5 minutes to present and explain an advanced Javascript topic
                        to your cohort and the senior cohort. Residents have done tech talks on
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"> operator precedence</a>,
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"> hoisting in Javascript</a> and more. For my topic, I wanted to dive
                        into a subject that I've been very interested in recently. I chose the blockchain. While preparing for my presentation I came
                        across an <a href="https://www.savjee.be/2017/07/Writing-tiny-blockchain-in-JavaScript/">insightful tutorial on creating a simple blockchain
                        in Javascript.</a> I decided to walk through this example in my tech talk and <a href="https://github.com/StephenGrable1/Blockchain-JS">create my own repository to display how a simple blockchain works with encryption.</a>

                    <br />
                    <br />

                    <h3>The Hack-a-thon.</h3>
                    The day before my tech talk, we had started a very entertaining section of the program fittingly called, the hack-a-thon.
                    We had no prior knowledge of what the challenge was before it began. They made us drumroll for the reveal and... Chrome Extensions!
                    I was excited and partially scared. My partner and I had never worked on a Chrome extension before. So, we decided to first begin at the <a href="https://developer.chrome.com/extensions/getstarted">Chrome developer get started guide</a> to get a sense of how
                    to test and develop the software. Our Chrome extension ended up winning my partner and I second place in the hack-a-thon. For runner-up,
                    we received this incredible squeaky yellow duck trophy.

                    <div className="duck-photo-container">
                        <img width="300px"  src={ClassPhoto} alt="Small yellow squeaky duck trophy"/>
                        <p className="duck-caption">Second place trophy 🦆... </p>
                    </div>



                    <h3>3rd Week Overview.</h3>
                    This week was super busy. I had to prepare 
                    <a href="https://docs.google.com/presentation/d/1Yw3exwjrk1Z9J4ANQk2yg76qHnqzTSypHoQKWPyrEzY/edit#slide=id.p"> my blockchain tech talk</a>, 
                    create a Chrome extension from scratch and work on multiple challenges from the units we were learning. Hectic, am I right? 
                    Through all the coding madness, we somehow managed to make room for a Nerf gun war, which my team suffered an valiant defeat. 
                    Overall, this week was my favorite so far. The units were really enjoyable and I finally got the chance to delve into web scrapping, 
                    which I had been meaning to do for a while.

                    <br/>
                    <br/>

                    I am officially a quarter of the way through the program and I feel excited. I've found that the structure of the program is a great fit for me. 
                    I enjoy working on 2 day units that push you to understand through doing and teaching. I particularly enjoy when I get the opportunity 
                    to help my pair programming partner better understand a topic. As an added bonus, explaining these advanced topics helps me understand them 
                    at a deeper level as well. 


                </div>
            </div>
        </div>
    )

}

export default ThirdWeekCodesmith;
