function Stats({ stats }) {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <span className="stat-title">Всего</span>
        <strong>{stats.total}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-title">Активных</span>
        <strong>{stats.active}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-title">Выполненных</span>
        <strong>{stats.completed}</strong>
      </div>
    </section>
  )
}

export default Stats
