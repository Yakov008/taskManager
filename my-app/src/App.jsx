import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import {
  selectActiveTasks,
  selectAllTasks,
  selectCompletedTasks,
} from './store/tasksSlice'

function App() {
  const tasks = useSelector(selectAllTasks)
  const activeTasks = useSelector(selectActiveTasks)
  const completedTasks = useSelector(selectCompletedTasks)
  const [searchValue, setSearchValue] = useState('')

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [tasks, searchValue])

  const stats = {
    total: tasks.length,
    active: activeTasks.length,
    completed: completedTasks.length,
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Менеджер задач</h1>
        </header>

        <Stats stats={stats} />

        <TaskForm />

        <SearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />

        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  )
}

export default App
