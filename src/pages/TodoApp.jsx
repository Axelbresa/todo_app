import React, { useState } from 'react';
import '../index.css'; // Importa el archivo CSS

export const TodoApp = () => {
  const [todos, setTodos] = useState([]); // Estado para almacenar los todos
  const [newTodo, setNewTodo] = useState(''); // Estado para el nuevo todo

  // Lógica para añadir un nuevo todo cuando se presiona Enter
  const handleTodoAdd = (e) => {
    if (e.key === 'Enter' && newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Lógica para marcar un todo como completado o no completado
  const handleTodoToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Lógica para borrar todos los todos completados
  const handleClearCompleted = () => {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(uncompletedTodos);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button
            className="btn btn-sm btn-warning"
            onClick={handleClearCompleted} // Llamar a la función cuando se hace clic
          >
            Clear Completed
          </button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
          <h3>New Todo</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            name="desc"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // Actualizar el estado del nuevo todo
            onKeyDown={handleTodoAdd} // Llamar a la función cuando se presiona Enter
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <span
                  onClick={() => handleTodoToggle(index)}
                  className={`todo-text ${todo.completed ? 'completed' : ''}`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => handleTodoToggle(index)}
                  className={`todo-button ${todo.completed ? 'completed' : ''}`}
                >
                  {todo.completed ? 'Descompletar' : 'Completar'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
