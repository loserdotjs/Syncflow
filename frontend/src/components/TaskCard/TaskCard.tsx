import { useState } from "react";
import type TaskCardProps from "../../types/TaskProps";

function TaskCard(props: TaskCardProps) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div
      onClick={() => setIsExpand(!isExpand)}
      className="task-card h-fit border-solid border-purple-500 border-3 shadow-xl rounded-lg p-4"
      style={TaskCardStyle(props.priority)}
    >
      {props.title ? (
        <h3 className="task-card-title">{props.title}</h3>
      ) : (
        <h3 className="task-card-title">No title available.</h3>
      )}

      {isExpand &&
        (props.description ? (
          <p className="task-card-description">{props.description}</p>
        ) : (
          <p className="task-card-description">No description available.</p>
        ))}

      <div className="task-card-details flex gap-2">
        <button className="task-card-priority">
          Priority: {props.priority}
        </button>
        <button className="task-card-status">Status: {props.status}</button>
      </div>
    </div>
  );
}

function TaskCardStyle(priority: "low" | "medium" | "high") {
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
