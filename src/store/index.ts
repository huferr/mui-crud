import { TasksStateTypes } from 'typings/tasks'
import create from 'zustand'

export const useTasks = create<TasksStateTypes>((set) => ({
  taskIndexToEdit: null,
  tasks: [],
  setTaskIndexToEdit: (data) => set(() => ({ taskIndexToEdit: data })),
  setTasks: (data) => set(() => ({ tasks: [...data] }))
}))