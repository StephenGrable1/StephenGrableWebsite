import React from 'react';
import './FourthWeekCodesmith.css';

const FourthWeekCodesmith = () => {
    return (
        <div className="article-fourth-week">
            <div className="fourth-week-outer">
                <h1>Week 4. Leveling up to Full Stack Engineer</h1>
                <h3>Databases 4 Us.</h3>
                <div className="fourth-week-text">
                    We started this week learning the basics of SQL and NoSQL databases. After a short introduction, we moved on to topics like authentication,
                     bcypt password encryption, cookie storage, <a href="https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth">OAuth</a>, 
                    unit/integration testing and more. 
                    
                    <br />
                    <br />
                    Along the way, we built a few <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD applications</a> as well as a complete testing suite for a full stack React application.
                    In our test suite, we used a host of different libraries including, <a href="https://mochajs.org/">Mocha</a>, <a href="http://airbnb.io/enzyme/">Enzyme</a>, <a href="https://github.com/mjackson/expect">Expect</a>, 
                    and <a href="http://zombie.js.org/">Zombie</a> to test every feature of our app from the server side logic to the individual functions. 

                    <br />
                    <br />
                    My favorite section this week had to be authentication. We learned how to store data in <a href="https://www.postgresql.org/about/">PostgreSQL</a> and <a href="https://www.mongodb.com/company">MongoDB </a>
                    and then verify users credentials whenever they login to our app. After that, we <a href="https://www.npmjs.com/package/bcrypt">secured our custom login with bcrypt</a> to ensure 
                    our application was protected against database attacks. 
                    
                    <br />
                    <br />

                    I was really impressed with 
                    this week's lessons on Express middleware. Using Express middleware is a great way to ensure you are creating modular
                    and extensible server side code. It also future-proofs your codebase since it's easier for you, and other developers, to 
                    create additional middleware on top of existing infrastructure. 

                    <h3>Build for the future. Test-driven development.</h3>
                    One of the major 'aha' moments from this week came to me as when we explored testing for the first time.
                    Before Codesmith, I would have thought that building a bug-free web application that operates as designed was good enough. Now I've realized how crucial testing is to building and maintaining 
                    high quality software through all stages of development. 

                    <br />
                    <br />
                    To many developers, testing can come as an afterthought. However, if your goal is to 
                    engineer reliable and scalable web applications, you should always keep testing in the forefront of your mind while developing software.
                    
                    <br />
                    <br />
                    To enforce this type of mind-set, my partner and I created a React application using a development methodology called test driven development. Test driven development is simply a way of developing software that 
                    encourages you to engineer reliable and predictable functionality into your application. It's best to "trust the process" when it comes to 
                    using this technique. 
                    
                    <br />
                    <br />
                    This was, yet again, another moment I realized how impressive this program really is. In a secluded environment, 
                    like the one I was in before Codesmith, I would have been reluctant to use test driven development. Not because I didn't recognize 
                    the importance of it, but because I didn't have the expert guidance needed to encourage me to use best practices in my engineering pursuits. Codesmith provides this 
                    guidance and I've been blown away by the success it has had on my own development.
                    
                    <h3>4th Week Overview.</h3>
                    Every week, more and more, I have come to realize the powerful effects of participating in a program like Codesmith. I used to believe 
                    that learning software development was more effective as a solo pursuit. 4 weeks into Codesmith and I'm convinced that the formula Codesmith has 
                    created is by far the best way to accelerate learning in software engineering.
                    <br />
                    <br />
                    I think there are 3 reasons why this formula works. 
                    <br/>
                    <br/>
                    <strong> #1. You don't just learn, you also teach.</strong> 
                    <br />
                    <br />
                    Paired programming is the cornerstone of the Codesmith program. It's your duty as a pair-programing partner to make sure that both you and your 
                    partner understand why and how your code is working. It is ill-advised to move on to another challenge if your partner doesn't fully 
                    understand what is going on in the code. This encourages you to understand and explain topics before moving on, which is a very powerful way 
                    to fully absorb new topics.
                    <br />
                    <br />
                    <strong> #2. The community.</strong> 
                    <br />
                    <br />
                    At Codesmith, the community is everything. Everyone at Codesmith is hand selected. This is important. There are no stragglers. 
                    There are no residents who don't know what they are doing. This breeds an environment that promotes high quality learning. 
                    Over the last 4 weeks, I now realize just how important Codesmith's selection process is to the quality of learning you receive.
                    <br />
                    <br />
                    <strong> #3. Expert guidance and mentoring.</strong> 
                    <br />
                    <br />
                    At Codesmith, it is highly discouraged to directly give or receive the solution to a problem you or someone else are struggling with. 
                    When you have been stuck on a problem for a significant amount of time, you do have the option to ask a Codesmith fellow
                    for guidance. The fellows have all been through the program and understand the common problems you will encounter in the course.
                    However, when you ask for help, they never tell you how to fix the problem directly. This is by design. It is a much better learning 
                    experience to figure out the problem with a bit of guidance than it is to solve the problem directly by receiving the solution. 
                    <br />
                    <br />
                    These three characteristics are the pillars of the Codesmith program. I can now say, without a shadow of a doubt, that learning in this 
                    type of environment is one of the most effective ways to accelerate learning and expand your knowledge as a software engineer.


                </div>
            </div>
        </div>
    )
}

export default FourthWeekCodesmith;