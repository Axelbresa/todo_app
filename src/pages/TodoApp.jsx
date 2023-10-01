// TodoApp.jsx
import React, { useState } from 'react';
import '../index.css';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/todo';

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  const handleToggleTodo = (todo) => {
    const updatedTodos = todos.map((t) =>
      t === todo ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(uncompletedTodos);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button
            className="btn btn-sm btn-warning"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <AddTodo onAddTodo={handleAddTodo} />
        </div>
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
        </div>
      </div>
    </div>
  );
};


