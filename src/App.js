import { useState } from "react";
import "./App.css";
import "./AnimatedBg.css";

function App() {
  const [todoInput, setTodoInput] = useState("");

  return (
    <div className="App">
      {/* HEADER: Title, input, and add/submit button */}
      <header className="app__header">
        <h1 className="app__title">Todo List</h1>
        <form className="app__inputForm">
          <label htmlFor="todoItem" className="app__todoInputLabel">
            What do you want todo?
          </label>
          <input
            type="text"
            id="todoItem"
            className="app__todoInput"
            value={todoInput}
            onChange={(event) => setTodoInput(event.target.value)}
          />
        </form>
      </header>
      {/* TODO LIST CONTAINER */}
      <div className="app__todoListContainer">
        <div className="app__todoListItem">
          <p className="app__todoListItemTitle">Learning React</p>
          <div className="app__todoListItemButtons">
            <button className="app__button app__todoListItemCompleteButton">
              ✅
            </button>
            <button className="app__button app__todoListItemDeleteButton">
              🗑️
            </button>
          </div>
        </div>
      </div>
      {/* ANIMATED BACKGROUND from https://codepen.io/baarbaracrr/pen/KKovmGb */}
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
}

export default App;
