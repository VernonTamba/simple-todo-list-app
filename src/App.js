import { useState, useEffect } from "react";
import Header from "./Header";
import Todos from "./Todos";
import "./App.css";
import "./AnimatedBg.css";

function App() {
  const getTodosFromLocalStorage = () => {
    const localStorageTodos = localStorage.getItem("TODOS");
    console.log(localStorageTodos, JSON.parse(localStorageTodos));

    if (localStorageTodos === null) {
      return [];
    }

    return JSON.parse(localStorageTodos);
  };

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [showDarkBackground, setShowDarkBackground] = useState(false);

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInput.length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        todoID: crypto.randomUUID(),
        todoTitle: todoInput,
        completed: false,
      },
    ]);

    setTodoInput("");
  };

  const completeTodo = (todoID) => {
    setTodos(
      todos.map((todo) => {
        if (todo.todoID === todoID) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.todoID !== todoID));
  };

  const transitionBlackBackground = () => {
    if (window.scrollY > 10) {
      setShowDarkBackground(true);
    } else {
      setShowDarkBackground(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.addEventListener("scroll", transitionBlackBackground);
    return () =>
      window.removeEventListener("scroll", transitionBlackBackground);
  }, []);

  return (
    <div className="App">
      {/* HEADER: Title, input, and add/submit button */}
      <Header
        showDarkBackground={showDarkBackground}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        addTodo={addTodo}
      />
      {/* TODO LIST CONTAINER */}
      <div className="app__todoListContainer">
        {todos.length === 0 && (
          <p className="app__noTodosInfo">No todos. Add your todos here👆</p>
        )}
        {todos.map((todo) => {
          return (
            <Todos
              key={todo.todoID}
              todoID={todo.todoID}
              todoTitle={todo.todoTitle}
              todoCompleted={todo.completed}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
      {/* ANIMATED BACKGROUND from https://codepen.io/baarbaracrr/pen/KKovmGb */}
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default App;
