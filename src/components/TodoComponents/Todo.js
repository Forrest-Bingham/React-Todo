import React from "react";

const Todo = props => {
  return (
    <div
      className={`task${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      {console.log("item name:", props.item.task)}
      <p>
        {props.item.task}: {props.id}
      </p>
    </div>
  );
};

export default Todo;
