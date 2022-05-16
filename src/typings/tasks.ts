export interface Task {
  id: number,
  name: string,
  description: string,
}

export interface TasksStateTypes {
  tasks: Task[],
  setTasks: (task: Task[]) => void
}