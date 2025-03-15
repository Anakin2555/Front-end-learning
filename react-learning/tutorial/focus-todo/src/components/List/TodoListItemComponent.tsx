// @ts-nocheck
export default function TodoListItemComponent({todo,onCheckHandler,onDeleteHandler}) {
    
    return (
        <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} 
                   onChange={() => onCheckHandler(todo.id)}/>
            {todo.title}
            <button onClick={() => onDeleteHandler(todo.id)}>删除</button>
        </li>
    )
}