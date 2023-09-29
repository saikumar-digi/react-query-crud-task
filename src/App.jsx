import { Route, Routes } from "react-router-dom";
import TaskList from "./pages/TaskList";
import Task from "./pages/Task";
import TaskEdit from "./pages/TaskEdit";

const App = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 py-2">
        <h1 className="text-3xl font-bold underline">My Tasks</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          // onClick={() => handleEditClick(item.id)}
        >
          + Add new Task
        </button>
      </div>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/task/:id/edit" element={<TaskEdit />} />
      </Routes>
    </div>
  );
};

export default App;
