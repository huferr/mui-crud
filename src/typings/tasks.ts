export interface Task {
  description: string,
}

export interface TasksStateTypes {
  taskIndexToEdit: number | null,
  tasks: Task[],
  setTaskIndexToEdit: (number: number | null) => void,
  setTasks: (task: Task[]) => void
}