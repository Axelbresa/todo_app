//addTodo
import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleTodoAdd = () => {
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleTodoAdd();
        }
    };

    return (
        <div>
            <h3>New Todo</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Add Todo"
                name="desc"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={handleKeyDown} // Manejar el evento onKeyDown
            />

        </div>
    );
};

export default AddTodo;

