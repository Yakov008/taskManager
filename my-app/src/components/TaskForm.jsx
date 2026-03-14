import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'

function TaskForm() {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedText = taskText.trim()

    if (!trimmedText) {
      return
    }

    dispatch(addTask(trimmedText))
    setTaskText('')
  }

  return (
    <section className="card">
      <h2>Добавление задачи</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите новую задачу"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </section>
  )
}

export default TaskForm
