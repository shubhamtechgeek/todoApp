import React from "react";
import Todo from "./todo";
import TodoComposer from "./todoComposer";

export default function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, label: "Learn Javascript", completed: false },
    { id: 2, label: "Learn React.js", completed: false },
    { id: 3, label: "Learn Node.js", completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (addTodo) => {
    const newTodos = [...todos, addTodo];
    setTodos(newTodos);
  };

  return (
    <ul>
        <h1>No Database, Reload will result in Todo Loss ;)</h1>
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
