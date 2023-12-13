import React, { useState } from "react";
import './App.css';

function App() {
  // Hook Manager
  const [task, setTask] = useState({
    taskName: "",
    taskDesc: "",
  });

  // Task Manager
  const [menu, setMenu] = useState(false);

  // State to store submitted task
  const [submittedTask, setSubmittedTask] = useState(null);

  // Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = () => {
    // Store the submitted task
    setSubmittedTask({ ...task });

    // Update the UI to show the task menu
    setMenu(true);
  };

  const deleteTask = () => {
    task.taskName = "";
    task.taskDesc = "";
    // Update the UI to show the task menu
    setMenu(false);
  };

  return (
    <div className="taskParent">

      <form style={menu ? { display: "none" } : { display: "flex" }} className="taskForm">
        <h1>Enter Task Name</h1>
        <input
          name="taskName"
          placeholder="Enter Task Name"
          value={task.taskName}
          onChange={handleChange}
        />
        <h1>Enter Task Description</h1>
        <textarea
          name="taskDesc"
          placeholder="Enter Task Descriptions"
          value={task.taskDesc}
          onChange={handleChange}
        />

        <button type="button" onClick={handleSubmit}>Submit Task</button>
      </form>

      {menu && (
        <div style={{ display: "flex" }} className="taskUI">
          <h1>Task Name : {submittedTask?.taskName}</h1>

          <h1 className="toDo">To Do :</h1>
          <textarea readOnly placeholder="To Do :" value={submittedTask?.taskDesc}></textarea>

          <button onClick={deleteTask}>Delete Task</button>
        </div>
      )}
    </div>
  );
}

export default App;
