import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import todoAppWebsite from './media/todo_website_display.png'
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
            <h4>Fully Integrated Admin Login and Booking Management</h4>
            <h5>Admin Login and Scheduling Dashboard</h5>
            <img src="" className="backend-request-gif-todo" alt="backend fof handling studio time requests"></img>
          </div>
        </div>


        <div className="todo-overview-outer">
          <div className="todo-overview-outer">
          <h5>Project Overview:</h5>
            <p>
            Danny Bobby approached me wanting a complete revamp of his website. He had a few requirements. First, He wanted
            a scheduling dashboard where his clients could easily signup for a studio session. Second, he wanted a elegant
            home page to show potential clients past work, customer reviews and more.
            </p>
            <p>
            We began the project with a interview and questionnaire. I made sure I had a strong grasp of his vision for the website before beginning work.
            This way, I could present an accurate timeline for completion and keep it within his desired budget.
            </p>
            <p>
            Danny now has a place to send customers and manage studio sessions. As he grows his business, he can take advantage of
            a fully integrated web application with user login and account management. Now, with his new website, it is easy for Danny to continue to add custom features to better
            serve his customers.
            </p>

            <p>
            Want to learn how I can help you create your own custom website? Request a free quote by clicking the link below.
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
