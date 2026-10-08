export type Priority = "low" | "medium" | "high";
export type Status = "to_do" | "in_progress" | "done";

export type TaskProps = {
  id: number;
  title: string;
  description?: string;
  priority: Priority;
  status: Status;
};
