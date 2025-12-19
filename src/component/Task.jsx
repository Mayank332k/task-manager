import React from 'react';

function Task({ task, toggleTask, deleteTask }) {
  const containerStyle = {
    display: "flex",
    borderRadius: "15px",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: "600px",
    margin: "10px auto",
    padding: "10px",
    border: "2px solid black",
    fontFamily: "monospace",
    backgroundColor: "#fff",
  };

  const textStyle = {
    flex: 1,
    marginLeft: "15px",
    fontSize: "1rem",
    fontWeight: "bold",
    // not confirmed yet ...
    // textDecoration: task.completed ? "line-through" : "none",
    color: task.completed ? "#888" : "black"
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
            .task-btn {
                padding: 5px 10px;
                border: 2px solid black;
                background-color: transparent;
                cursor: pointer;
                font-weight: bold;
                font-size: 1rem;
                transition: all 0.1s ease;
            }
            .task-btn:hover {
                background-color: #f0f0f0ff;
                transform: translateY(-2px);
            }
            .task-btn:active {
                background-color: black;
                color: white;
                transform: translateY(0px);
            }
            .task-checkbox {
                border: none;
                width: 20px;
                height: 20px;
                accent-color: black;
            }
        `}
      </style>

      <input
        checked={task.completed}
        type="checkbox"
        className="task-checkbox"
        readOnly
        style={{
           visibility: task.completed ? 'visible' : 'hidden' 
        }}
      />

      <span style={textStyle}>{task.text}</span>

      <div style={buttonGroupStyle}>
        <button className="task-btn" onClick={() => toggleTask(task.id)}>
          ✓
        </button>
        <button className="task-btn" onClick={() => deleteTask(task.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default Task;