import { useDispatch } from 'react-redux'
import { deleteTask, toggleTaskStatus } from '../store/tasksSlice'

function TaskItem({ task }) {
  const dispatch = useDispatch()

  const formattedDate = new Date(task.createdAt).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <article className="task-item">
      <div className="task-content">
        <h3 className={task.completed ? 'completed' : ''}>{task.text}</h3>
        <p>Статус: {task.completed ? 'Выполнено' : 'Не выполнено'}</p>
        <p>Дата создания: {formattedDate}</p>
      </div>

      <div className="task-actions">
        <button
          type="button"
          onClick={() => dispatch(toggleTaskStatus(task.id))}
        >
          {task.completed ? 'Сделать активной' : 'Отметить выполненной'}
        </button>

        <button type="button" onClick={() => dispatch(deleteTask(task.id))}>
          Удалить
        </button>
      </div>
    </article>
  )
}

export default TaskItem
