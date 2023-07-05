import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();

  const addHandle = async (e) => {
    e.preventDefault();
    console.log(`task is ${task} the deadline is ${deadline}`);
    navigate("/");
  };
  return (
    <form className="w-50 shadow-sm py-4 px-5" onSubmit={addHandle}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="deadline" className="form-label">
          Deadline Date
        </label>
        <input
          type="text"
          className="form-control"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default Add;
