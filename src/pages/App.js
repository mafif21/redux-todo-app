import Navbar from "../components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Add from "./Add";
import Edit from "./Edit";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
