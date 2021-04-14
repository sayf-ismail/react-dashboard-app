import React, { useState } from "react";
import Nav from "../components/Nav"
import NumTasksCompleted from "../components/NumTasksCompleted"
import LatestTasksAdded from "../components/LatestTasksAdded"
import ProgressChart from "../components/ProgressChart"
import TaskList from "../components/TaskList"
import ToDoItem from "../components/ToDoItem"

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dashboard() {

  const [showModal, setShowModal] = useState(false);

  const [inputText, setInputText] = useState("");
  const [myItems, setMyItems] = useState([]);

  function addItem(text) {
    handleClick();
    setMyItems( prevItems => {
      return [...prevItems, text]
    })
  }

  function isListEmpty() {
    return myItems.length < 1 ? true : false;
  }

  function handleClick() {
    setShowModal(!showModal)
    return showModal;
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (<div>
    <Nav />
    <h1>Dashboard</h1>
    { isListEmpty() ?
      <div>
        <h3>You have no task.</h3>
        <Button onClick={handleClick}>+ New Task</Button>
        <Modal show={showModal} onHide={handleClick}>
          <Modal.Header>+ New Task</Modal.Header>
          <input onChange={handleChange} type="text" placeholder="Task Name"/>
          
          <Button onClick={() => {
              addItem(inputText);
              setInputText("")
              }}>+ New Task</Button>
        </Modal>
      </div> 
      : 
      <div>
        <section>
        <Card>
          <NumTasksCompleted />
        </Card>
        <Card>
          <LatestTasksAdded />
        </Card>
        <Card>
          <ProgressChart />
        </Card>

        </section>
        <section>
          <h5>Search by task name</h5>
          <Button onClick={handleClick}>+ New Task</Button>
          <Modal show={showModal} onHide={handleClick}>
            <Modal.Header>+ New Task</Modal.Header>
            <input onChange={handleChange} type="text" placeholder="Task Name" />
            
            <Button onClick={() => {
              addItem(inputText);
              setInputText("")
              }}>+ New Task</Button>
          </Modal>
          <TaskList />
          <div>
            <ul>
            { myItems.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
              />))}
            </ul>
          </div>
        </section>
      </div> 
    }
  </div>)
}

export default Dashboard;