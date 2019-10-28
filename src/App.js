import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./Todo.css";

const taskList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskList: taskList
    };
  }

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now,
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
  };

  filterCompleted = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => item.completed === false)
    });
  };

  toggleCompleted = someID => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (item.id === someID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>To Do List</h3>
        <TodoForm addTask={this.addTask} />
        <TodoList
          taskList={this.state.taskList}
          toggleCompleted={this.toggleCompleted}
          filterCompleted={this.filterCompleted}
        />
        {console.log(this.state.taskList)}
      </div>
    );
  }
}

export default App;
