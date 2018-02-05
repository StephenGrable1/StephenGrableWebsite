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
            <p>Todo App</p>
        </div>
    </div>
    )
  }
}

export default TodoAppWebsite;
