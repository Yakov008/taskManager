import TaskItem from './TaskItem'

function TaskList({ tasks }) {
  return (
    <section className="card">
      <h2>Список задач</h2>

      {tasks.length === 0 ? (
        <p className="empty-text">Задачи не найдены.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </section>
  )
}

export default TaskList
