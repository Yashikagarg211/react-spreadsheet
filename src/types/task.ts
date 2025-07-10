export type TaskRow = {
  job: string;
  submitted: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low";
  due: string;
  value: number;
};
