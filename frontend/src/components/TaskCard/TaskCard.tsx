function TaskCard() {
  type TaskCardProps = {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
  };

  return (
    <div className="task-card">
      <h3 className="task-card-title">Task Title</h3>
      <p className="task-card-description">Task Description</p>
      <p className="task-card-priority">Priority: High</p>
      <p className="task-card-status">Status: In Progress</p>
    </div>
  );
}

export default TaskCard;
