import TaskCard from "./components/TaskCard/TaskCard";
import { items } from "./data/TaskCardItems";

function TaskCardItems() {
  return (
    <div className="task-card-items flex flex-col gap-4">
      {items.map((task, key) => (
        <TaskCard
          id={key}
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
