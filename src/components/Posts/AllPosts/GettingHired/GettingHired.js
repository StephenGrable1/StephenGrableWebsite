import React, { Component } from 'react';
import './GettingHired.css';

class GettingHired extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="article-getting-hired">
                <div className="getting-hired-outer">
                    <h3>Was it worth it?</h3>
                    <div className="getting-hired-text">
                        After Codesmith, I increased my starting salary by 25% and
                        I landed my dream job; Here's how I did it.

                        <br />
                        <br />

                        First, I think <a href="https://www.codesmith.io/">Codesmith</a> is a unique opportunity that,
                        if you can get in, will give you the leverage and skills
                        to dramatically increase your starting salary
                        and land your dream job.

                        <br />
                        <br />

                        With that being said, there is no hand
                        holding and to get the most out of the experience, you have
                        to put in the time to work your coding skills and translate their
                        lessons into real world, working web applications. But hey, if it
                        was easy, then it probably wouldn't be worth your while.

                        <br />
                        <br />
                        <h3>Before Codesmith</h3>

                        I had a grasp of some web technologies before I started but
                        lacked the computer science knowledge and interviewing skills
                        necessary to land a mid to senior level role. Codesmith helped me
                        round out my skills and taught me all of the modern technologies
                        that companies ask for in their job descriptions.

                        <br />
                        <br />
                        I internalized concepts through building
                        challenging open source technologies that employers
                        would *actually* be impressed by; something that other coding bootcamps struggle to accomplish.
                        To achieve this, the Codesmith staff
                        pushes you to do more than you think you are capable of and by the end of the course,
                        you are in awe of how much you've accomplished and learned. Not to mention all the friends you
                        will make along the way.

                        <br />
                        <br />

                        <h3>Toward the end of the course</h3>

                        During the last few weeks of the <a href="https://www.codesmith.io/apply-login/apply">12 week program</a>, you really start to experience the
                        invaluable knowledge that the Codesmith team provides you in preparation
                        for your job search. Resume reviews and practice phone screens prepare
                        you for the real world and by the time you receive your first job offer, you
                        will feel like a professional interviewer. At least that's how I felt. I did
                        it by following their process and trusting that it would work.

                        <br />
                        <br />

                        <h3>My Job Offer</h3>

                        I was extremely excited when I received my offer because it was around
                        <a href="https://www.glassdoor.com/Salaries/mid-level-software-engineer-salary-SRCH_KO0,27.htm"> the average for mid level engineers in NYC </a>
                        and it was with a <a href="https://www.glassdoor.com/Reviews/adHawk-Reviews-E1026742.htm">fantastic adtech startup </a>
                        that was the perfect fit for me.

                      I certainly wouldn't have been able to accomplish this without Codesmith.
                      I highly recommend it if you are looking to level up as a software engineer and
                      dominate the job search to find the perfect job for you.

                        <br />
                        <br />

                    </div>
                </div>
            </div>
        );
    }
}

export default GettingHired;