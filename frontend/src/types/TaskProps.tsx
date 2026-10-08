type TaskProps = {
  id: number;
  title?: string;
  description?: string;
  priority: "low" | "medium" | "high";
  status: "to do" | "in progress" | "done";
};

export type { TaskProps as default };
