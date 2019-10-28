// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {console.log(props.taskList)}
      {props.taskList.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
          //   filterCompleted={props.filterCompleted}
        />
      ))}
      <button onClick={props.filterCompleted}>Clear</button>
    </div>
  );
};
console.log("To Do List", TodoList);
export default TodoList;
