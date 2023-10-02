import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ onSubmit, initialData }) => {
  let navigate = useNavigate();
  TaskForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  };

  const [task, setTask] = useState({
    name: initialData.name || "",
    description: initialData.description || "",
  });

  const handleChangeInput = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({
      name: "",
      description: "",
    });
    navigate(`/`);
  };

  const renderField = (label) => (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type="text"
        name={label.toLowerCase()}
        value={task[label.toLowerCase()]}
        onChange={handleChangeInput}
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 bg-white rounded-md shadow-md"
      >
        {renderField("Name")}
        {renderField("Description")}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
