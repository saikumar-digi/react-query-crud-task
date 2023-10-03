import axios from "axios";

export async function getAlltasks() {
  const response = await axios.get("http://localhost:3000/tasks");
  return response.data;
}
export async function createTask(newTask) {
  const response = await axios.post(`http://localhost:3000/tasks`, newTask, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
export async function updatedTask(updatedTask) {
  const response = await axios.put(
    `http://localhost:3000/Tasks/${updatedTask.id}`,
    updatedTask,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
export async function getTaskById(id) {
  const response = await axios.get(`http://localhost:3000/tasks/${id}`);
  return response.data;
}
export async function deleteTask(id) {
  const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
  return response.data;
}
