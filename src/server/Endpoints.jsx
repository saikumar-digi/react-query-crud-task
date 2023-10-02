export async function getAlltasks() {
  const response = await fetch("http://localhost:3000/tasks");
  return response.json();
}
export async function createTask(newTask) {
  const response = await fetch(`http://localhost:3000/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return response.json();
}
export async function updatedTask(updatedTask) {
  const response = await fetch(
    `http://localhost:3000/Tasks/${updatedTask.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    }
  );
  return response.json();
}
export async function getTaskById(id) {
  const response = await fetch(`http://localhost:3000/tasks/${id}`);
  return response.json();
}
export async function deleteTask(id) {
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  });
  return response.json();
}
