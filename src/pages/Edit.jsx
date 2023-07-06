import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storageSelector, getAllTasks, editTask } from "../redux/features/todo";

const Edit = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => storageSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setTask(data.task);
      setDeadline(data.deadline);
    }
  }, [data]);

  const editHandle = async (e) => {
    e.preventDefault();
    await dispatch(editTask({ id, task, deadline }));
    navigate("/");
  };

  return (
    <form className="w-50 shadow-sm py-4 px-5" onSubmit={editHandle}>
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

export default Edit;
