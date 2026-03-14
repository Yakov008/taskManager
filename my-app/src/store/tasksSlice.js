import { createSlice, createSelector } from '@reduxjs/toolkit'

const STORAGE_KEY = 'task-manager-tasks'

const defaultTasks = [
  {
    id: 'task-1',
    text: 'Сходить в спортзал',
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'task-2',
    text: 'Сходить в ресторан',
    completed: false,
    createdAt: new Date().toISOString(),
  },
]

const loadTasks = () => {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY)

    if (!savedTasks) {
      return defaultTasks
    }

    const parsedTasks = JSON.parse(savedTasks)

    return Array.isArray(parsedTasks) ? parsedTasks : defaultTasks
  } catch {
    return defaultTasks
  }
}

const initialState = {
  items: loadTasks(),
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.unshift({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      })
    },
    toggleTaskStatus: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)

      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addTask, toggleTaskStatus, deleteTask } = tasksSlice.actions

export const selectTasksState = (state) => state.tasks
export const selectAllTasks = (state) => selectTasksState(state).items
export const selectActiveTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => !task.completed)
)
export const selectCompletedTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.completed)
)

export { STORAGE_KEY }
export default tasksSlice.reducer
