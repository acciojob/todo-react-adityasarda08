import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add Todo</button>

      <Todo todos={todos} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;


