import type { TaskProps } from "../types/TaskProps";

export const items: TaskProps[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    priority: "low",
    status: "to_do",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    priority: "medium",
    status: "in_progress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description for Task 3",
    priority: "high",
    status: "done",
  },
];
