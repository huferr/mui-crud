export interface Task {
  name: string,
  description: string,
}

export interface TasksStateTypes {
  tasks: Task[],
  setTasks: (task: Task[]) => void
}