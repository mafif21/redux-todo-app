import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTasks,
  storageSelector,
  deleteTask,
} from "../redux/features/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(storageSelector.selectAll);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Task</th>
          <th scope="col">Deadline</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id}>
            <th scope="row">{index + 1}</th>
            <td>{task.task}</td>
            <td>{task.deadline}</td>
            <td className="d-flex">
              <Link to={`/edit/${task.id}`} className="btn btn-primary ">
                Edit
              </Link>

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todo;
