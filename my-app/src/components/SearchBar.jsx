function SearchBar({ searchValue, onSearchChange }) {
  return (
    <section className="card">
      <h2>Поиск задач</h2>

      <input
        type="text"
        placeholder="Найти задачу по тексту"
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  )
}

export default SearchBar
