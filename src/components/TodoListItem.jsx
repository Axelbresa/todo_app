//todoListenItem
import React from 'react';

const TodoListItem = ({ todo, onToggleTodo }) => {
    return (
        <li
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => onToggleTodo(todo)}
        >
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </span>
            <button
                className={`todo-button ${todo.completed ? 'completed' : ''}`}
                onClick={() => onToggleTodo(todo)}
            >
                {todo.completed ? 'Descompletar' : 'Completar'}
            </button>
        </li>
    );
};

export default TodoListItem;