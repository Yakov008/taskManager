import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedText = taskText.trim()

    if (!trimmedText) {
      return
    }

    onAddTask(trimmedText)
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
