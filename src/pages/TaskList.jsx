import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTask, getAlltasks } from "../server/Endpoints";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getAlltasks,
  });

  const deleteTaskMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  if (isLoading) {
    return "...Loading";
  }

  if (isError) {
    return `Error: ${error.message}`;
  }
  const handleDelete = (id) => {
    deleteTaskMutation.mutate(id);
  };
  return (
    <>
      <div className="flex justify-between bg-white shadow-lg items-center px-2 py-2">
        <h1 className="text-3xl font-bold">My Tasks</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(`/taskform`)}
        >
          + Add new Task
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg px-2 py-2 mx-48 my-36 mt-10">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-4  bg-gray-200 text-left text-xs leading-4 font-medium text-  -600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-4  bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4  bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-16 py-4  bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((task) => (
              <tr key={task.id} className="even:bg-gray-200">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {task.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {task.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {task.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button
                    className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 mr-2 rounded"
                    onClick={() => navigate(`Task/${task.id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
