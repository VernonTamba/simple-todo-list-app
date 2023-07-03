const Header = ({ showDarkBackground, todoInput, setTodoInput, addTodo }) => {
  return (
    <header className={`app__header ${showDarkBackground && "dark--bg"}`}>
      <h1 className="app__title">Todo List</h1>
      <form onSubmit={addTodo} className="app__inputForm">
        <div className="app__inputRow">
          <label
            htmlFor="todoItem"
            className={`app__todoInputLabel ${
              showDarkBackground && "app__todoInputLabel--darkBackground"
            }`}
          >
            What do you want todo?
          </label>
          <input
            type="text"
            id="todoItem"
            className={`app__todoInput ${
              showDarkBackground && "app__todoInput--darkBackground"
            }`}
            value={todoInput}
            onChange={(event) => setTodoInput(event.target.value)}
          />
          <button className="app__addTodoButton">Add</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
