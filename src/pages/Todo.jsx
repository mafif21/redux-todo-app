import React from "react";
import { Link } from "react-router-dom";

const Todo = () => {
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
        <tr>
          <th scope="row">1</th>
          <td>Homework</td>
          <td>Tuesday</td>
          <td className="d-flex">
            <Link to="/edit/3" className="btn btn-primary ">
              Edit
            </Link>
            <form method="post">
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Todo;
