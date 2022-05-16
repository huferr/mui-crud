import { TasksStateTypes } from 'typings/tasks'
import create from 'zustand'

export const useTasks = create<TasksStateTypes>((set) => ({
  tasks: [],
  setTasks: (data) => set(() => ({ tasks: [...data] }))
}))