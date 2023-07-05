import Navbar from "../components/navbar";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Add from "./Add";
import Edit from "./Edit";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
