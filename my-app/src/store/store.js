import { configureStore } from '@reduxjs/toolkit'
import tasksReducer, { STORAGE_KEY } from './tasksSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
})

store.subscribe(() => {
  const { items } = store.getState().tasks
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
})

export default store
