const TodoList = props => {
  return (
    <div>
      <h4>Todo List</h4>
      <ul>
        {props.todos.map(todo => (
          <li>
            <input type="checkbox" />
            <b>{todo}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}
