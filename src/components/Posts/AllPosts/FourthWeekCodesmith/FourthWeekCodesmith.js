import React from 'react';
import './FourthWeekCodesmith.css';

const FourthWeekCodesmith = () => {
    return (
        <div className="article-fourth-week">
            <div className="fourth-week-outer">
                <h1>Week 4. Transition from front end developer to full stack engineer</h1>
                <h3>We love databases.</h3>
                <div className="fourth-week-text">
                    Everyone in my cohort particularly enjoyed the course material for this week. 
                    We began the week with databases and worked our way through topics like authentication,
                    bcypt password encryption, cookie storage, OAuth, unit/integration testing and more. 
                    Along the way, we built a complete testing suite for a React tic-tac-toe game following test-driven development methodologies.
                    We tested our game with a host of libraries including, Mocha, Enzyme, Expect, and Zombie. 

                    <br />
                    <br />
                    My favorite section this week had to be authentication. We used both PostgreSQL and MongoDB
                    to save our users data for future use and we secured our custom login with bcrypt to ensure 
                    our application was protected against database attacks. I was also really impressed with 
                    the lessons on Express and middleware. Using middleware makes your server logic modular
                    and easily extendable. Codesmith emphasizes the use of middleware for this reason and I now understand 
                    why it can be such a powerful technique to employ on your backend server.

                    <h3>Build for the future. Test-driven development.</h3>
                    One of the major takeaways from this week came during the later half of our course material when we explored testing for the first time.
                    Sure, you can build a full stack web application that works as designed and has no known bugs. A few weeks ago, 
                    I would have thought that that was enough. This week I learned just how important testing was to maintaining 
                    software as it evolves and improves. 

                    <br />
                    <br />
                    To some developers, testing came come as an afterthought. I know I used to be that way. However, if your goal is to 
                    engineer reliable and scalable web applications, you should always keep testing in the forefront of your mind while developing software.
                    This week, my partner and I practiced test-driven development. Test-driven development is simply a way of developing software that 
                    encourages you to engineer reliable and predictable functionality into your application. It's best to "trust the process" when it comes to 
                    using this technique. 
                    
                    <br />
                    <br />
                    This is, yet again, another moment when I have realized just how impressive this program really is. In a secluded environment, 
                    like the one I was in before Codesmith, I would have been reluctant to use test-driven development. Not because I didn't recognize 
                    the importance of it, but because I had no reinforcement to encourage best practices in my engineering pursuits. These are the sort of
                    lessons that are invaluable and cannot be replicated in a secluded learning environment.  
                    
                    <h3>4th Week Overview.</h3>
                    Every week, more and more, I have come to realize the powerful effects of participating in a program like Codesmith. I used to believe 
                    that learning software development was best as a solo pursuit. 4 weeks into Codesmith and I am convinced that the formula Codesmith has 
                    created is by far the best way to accelerate learning in software engineering.
                    <br />
                    <br />
                    I think there are 3 reasons why this formula works. 
                    <br/>
                    <br/>
                    <strong> #1. You don't just learn, you also teach.</strong> 
                    <br />
                    <br />
                    Paired programming is the corner-stone to the Codesmith program. It's your duty as a pair-programing partner to make sure that you AND your 
                    partner understand why and how the problem at hand is solved. It is ill-advised to move on to another challenge if your partner doesn't fully 
                    understand why or how the code is working. This forces you to explain topics and techniques in a way that is informative and in turn deepens 
                    your own understanding of those topics. 
                    <br />
                    <br />
                    <strong> #2. The community</strong> 
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
                    At Codesmith, it is highly discouraged to directly give or receive the solution to a problem you are struggling with. 
                    When you have been stuck on a problem for a significant amount of time, you do have the option to ask a Codesmith fellow
                    for guidance. The fellows have all been through the program and understand the common problems you will encounter in the course.
                    However, when you ask for help, they never tell you how to fix the problem directly. This is by design. It is a much better learning 
                    experience to figure out the problem with a bit of guidance than it is to solve a problem by directly receiving the solution. 
                    <br />
                    <br />
                    These three characteristics are the pillars of the Codesmith program. I can now say, without a shadow of a doubt, that learning in this 
                    type of environment is one of the most effective ways to accelerate learning and deepen your understanding in software engineering.


                </div>
            </div>
        </div>
    )
}

export default FourthWeekCodesmith;