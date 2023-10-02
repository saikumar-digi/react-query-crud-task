import { Route, Routes } from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskEdit from "./pages/TaskEdit";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/taskform" element={<AddTask />} />
        <Route path="/task/:id/edit" element={<TaskEdit />} />
      </Routes>
    </div>
  );
};

export default App;
