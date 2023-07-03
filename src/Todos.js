const Todos = ({
  todoID,
  todoTitle,
  todoCompleted,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <div className="app__todoListItem">
      {todoCompleted && <p className="app__todoCompleteStatus">✅</p>}
      <p className="app__todoListItemTitle">{todoTitle}</p>
      <div className="app__todoListItemButtons">
        <button
          onClick={() => completeTodo(todoID)}
          className={`app__button ${
            todoCompleted
              ? "app__todoListItemCompleteButton--complete"
              : "app__todoListItemCompleteButton--undoComplete"
          }`}
        >
          {todoCompleted ? "❌" : "✅"}
        </button>
        <button
          onClick={() => deleteTodo(todoID)}
          className="app__button app__todoListItemDeleteButton"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Todos;
