//todo
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onToggleTodo }) => {
    return (
        <ul className="list-unstyled">
            {todos.map((todo, index) => (
                <TodoListItem
                    key={index}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;

