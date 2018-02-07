import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import todoAppWebsite from './media/todo_website_display.png'
import todoAppGif from './media/todo-website-gif.gif'

import './TodoAppWebsite.css'

class TodoAppWebsite extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
    <div className="todo-app-outer">
        <div className="todo-app-inner">
        <h3 className="project-title-todo">To-Do App with GitHub Integration</h3>
        <img src={todoAppWebsite} alt="computer-preview-todo" className="computer-preview-todo"></img>
        <p className="todo-website-intro">
        A To-Do application with Github login 
        </p>

        <div className="todo-website-link">
          <a href="http://tranquil-cliffs-85870.herokuapp.com/" >Visit Website</a>
        </div>

        <div className="backend-section-todo">
          <div>
            <h4>Add things to do, search to do's and mark them as completed</h4>
            <h5>Login flow and UX</h5>
            <img src={todoAppGif} className="backend-request-gif-todo" alt="backend fof handling studio time requests"></img>
          </div>
        </div>


        <div className="todo-overview-outer">
          <div className="todo-overview-outer">
          <h5>Project Overview:</h5>
            <p>
            This project was one that I completed while enrolled in <a href="https://www.udemy.com/react-2nd-edition/">this great React/Redux introduction course on Udemy. </a>
            Users can login with their github accounts and create, search and complete tasks. Helps you stay productive and keep track of completed tasks. 
            </p>
            <p>
            This is a demonstration of how you can create a simple and secure user login feature quickly. Social media login makes the user management simple. Just plug in 
            your users preferred social media channel. Now you can expedite the signup and login process. Safe and secure. <span role="img" alt="emoji lock">🔒</span>
            </p>

            <p>
            Want to learn how I can help you create your own custom website with social media login? Request a free quote by clicking the link below.
            </p>
          </div>
        </div>

        <div className="project-action-btn-todo">
          <Link to="/contact" className="project-action-link-todo">Request a quote</Link>
        </div>
        </div>
    </div>
    )
  }
}

export default TodoAppWebsite;
