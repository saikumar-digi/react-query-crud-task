import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTaskById, updatedTask } from "../server/Endpoints";
import TaskForm from "../components/TaskForm";

const TaskEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: task,
    error,
  } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTaskById(id),
  });

  const updatedTaskMutation = useMutation({
    mutationFn: updatedTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      navigate("/");
    },
  });

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return `Error: ${error.meassage}`;
  }

  const handleSubmit = (updatedTask) => {
    updatedTaskMutation.mutate({ id, ...updatedTask });
  };

  return (
    <div>
      <h1>
        <TaskForm onSubmit={handleSubmit} initialData={task} />
      </h1>
    </div>
  );
};

export default TaskEdit;
