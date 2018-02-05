import React, {Component} from 'react';
import './TodoAppWebsite.css'

class TodoAppWebsite extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render(){
    return (
    <div className="todo-app-outer">
        <div className="todo-app-inner">
            <p>Overview coming soon, for now visit the to-do app in the link below</p>
            <a href="http://tranquil-cliffs-85870.herokuapp.com/#/todos?_k=jtrh7t">Visit the To-Do app website</a>
        </div>
    </div>
    )
  }
}

export default TodoAppWebsite;
