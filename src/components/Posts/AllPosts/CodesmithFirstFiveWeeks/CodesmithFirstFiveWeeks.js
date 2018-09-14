import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FirstWeekCodesmith from "./FirstWeekCodesmith/FirstWeekCodesmith"
import SecondWeekCodesmith from "./SecondWeekCodesmith/SecondWeekCodesmith"
import ThirdWeekCodesmith from "./ThirdWeekCodesmith/ThirdWeekCodesmith"
import FourthWeekCodesmith from "./FourthWeekCodesmith/FourthWeekCodesmith"
import FifthWeekCodesmith from "./FifthWeekCodesmith/FifthWeekCodesmith"
import SixthWeekCodesmith from "./SixthWeekCodesmith/SixthWeekCodesmith"

import './CodesmithFirstFiveWeeks.css'
class CodesmithFirstFiveWeeks extends Component {
    render() {
        return (
            <div className="cs-first-five-container">
                <FirstWeekCodesmith />
                <div className="getting-hired-container">
                    <div className="getting-hired-inner">
                        <h2>Learn how I got hired after Codesmith</h2>
                        <p>
                            Only a few months after Codesmith, I received a very competitive offer and I'll
                            tell you how I did it and how you can do it too.
        
                        </p>
                        <Link to="/posts/getting-hired">How I Got Hired</Link>
                     </div>
                </div>

                <SecondWeekCodesmith />
                <ThirdWeekCodesmith />
                <FourthWeekCodesmith />
                <FifthWeekCodesmith />
                <SixthWeekCodesmith />

                <div className="getting-hired-container">
                    <div className="getting-hired-inner">
                        <h2>Learn how I got hired after Codesmith</h2>
                        <p>
                            Only a few months after Codesmith, I received a very competitive offer and I'll
                            tell you how I did it and how you can do it too.
        
                         </p>
                        <Link to="/posts/getting-hired">How I Got Hired</Link>
                    </div>

                </div>
            </div>
                );
            }
        }
        
export default CodesmithFirstFiveWeeks;