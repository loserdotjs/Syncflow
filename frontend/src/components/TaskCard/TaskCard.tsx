import { useState } from "react";
import type { TaskProps } from "../../types/TaskProps";

function TaskCard({ id, title, description, priority, status }: TaskProps) {
  const [isExpand, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpand)}
      className="h-fit border-solid border-3 shadow-xl rounded-lg p-4"
      style={getPriorityStyle(priority)}
    >
      <h3>ticket n*{id}</h3>
      <h3>{title}</h3>
      {isExpand &&
        (description ? <p>{description}</p> : <p>No description available.</p>)}
      <div className="flex gap-2">
        <span>Priority: {priority}</span>
        <span>Status: {status}</span>
      </div>
    </div>
  );
}

function getPriorityStyle(priority: "low" | "medium" | "high") {
  switch (priority) {
    case "low":
      return { backgroundColor: "lightgreen", borderColor: "green" };
    case "medium":
      return { backgroundColor: "lightyellow", borderColor: "orange" };
    case "high":
      return { backgroundColor: "lightcoral", borderColor: "red" };
    default:
      return { backgroundColor: "lightgray", borderColor: "gray" };
  }
}

export default TaskCard;
