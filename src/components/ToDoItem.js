import React, { useState } from "react";

function ToDoItem(props) {
  const strikeThrough = { textDecoration: "line-through"};

  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(!isDone)
    console.log(isDone);
  }

  return (
    <div>
      <li onClick={handleClick} style={isDone ? strikeThrough : null} className={ isDone ? 'complete' : ''}>{props.id} {props.text} { isDone ? 'COMPLETED' : ''}</li>
    </div>
  );
}

export default ToDoItem;