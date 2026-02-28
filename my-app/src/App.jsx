import { useEffect, useMemo, useState } from 'react'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'
import Stats from './components/Stats'
import TaskList from './components/TaskList'

const STORAGE_KEY = 'task-manager-tasks'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY)

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      {
        id: crypto.randomUUID(),
        text: 'Сходить в спортзал',
        completed: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: crypto.randomUUID(),
        text: 'Сходить в ресторан',
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]
  })

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTasks((prevTasks) => [newTask, ...prevTasks])
  }

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [tasks, searchValue])

  const stats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((task) => task.completed).length
    const active = total - completed

    return {
      total,
      active,
      completed,
    }
  }, [tasks])

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Менеджер задач</h1>
        </header>

        <Stats stats={stats} />

        <TaskForm onAddTask={addTask} />

        <SearchBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />

        <TaskList tasks={filteredTasks} onToggleTaskStatus={toggleTaskStatus} />
      </div>
    </div>
  )
}

export default App
