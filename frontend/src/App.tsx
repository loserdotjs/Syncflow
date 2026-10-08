import TaskCard from "./components/TaskCard/TaskCard";

function TaskCardItems() {
  const items: TaskProps[] = [
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      priority: "low",
      status: "to do",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      priority: "medium",
      status: "in progress",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      priority: "high",
      status: "done",
    },
  ];

  return (
    <div className="task-card-items flex flex-col gap-4">
      {items.map((task) => (
        <TaskCard
          id={task.id}
          title={task.title}
          description={task.description}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="flex-col items-center justify-center p-4">
      <TaskCardItems />
    </div>
  );
}

export default App;
