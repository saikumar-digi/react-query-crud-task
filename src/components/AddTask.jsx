import TaskForm from "./TaskForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../server/Endpoints";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const queryClient = useQueryClient();

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleAddTask = (task) => {
    createTaskMutation.mutate({
      id: uuidv4(),
      ...task,
    });
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddTask} initialData={{}} />
    </div>
  );
};

export default AddTask;
