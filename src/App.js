import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  const taskUpdate = (event) => {
    let val = event.target.value;
    setTask(val)
  }

  const handleSubmit = (event) => {
    let floatArr = [...taskArr];
    event.preventDefault()
    floatArr.push(task);
    setTaskArr(floatArr);
    setTask("");
  }

  const compTask = (index) => {
    let compArr = [...taskArr];
    compArr[index] += " ✔";
    setTaskArr(compArr);
  }

  const removeTask = (index) => {
    let delArr = [...taskArr];
    delArr.splice(index, 1);
    setTaskArr(delArr);
  }

  let isDisabled = task === ""
  return (
    <div className="App">
      <div className="inputs">
        <form onSubmit={handleSubmit} className="inputForm">
          <input className="inputBox" type="text" name="task" value={task} onChange={taskUpdate} autoComplete="off"/>
          <button className="submit" type="submit" disabled={isDisabled}>Submit</button>
        </form>
      </div>
      <div className="todoList">
        {taskArr.map((item, index) => {
          return <ListItem key={index} compTask={compTask} removeTask={removeTask} itemNumber={index} item={item}/>
        })}
      </div>
    </div>
  );
}

const ListItem = (props) => {
  return(
    <div className="todoItem">
      <h2 className="taskItem">{props.item}</h2>
      <div className="controlButtons">
      <button className="compButton" onClick={() => {props.compTask(props.itemNumber)}}>Completed</button>
      <button className="removeButton" onClick={() => {props.removeTask(props.itemNumber)}}>Remove Task</button>
      </div>
    </div>
  )
}

export default App;
