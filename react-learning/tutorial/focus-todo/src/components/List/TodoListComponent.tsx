// @ts-nocheck

import TodoListItemComponent from "./TodoListItemComponent.tsx";
import './TodoList.css'
export default function TodoListComponent({todoList,onCheckHandler,onDeleteHandler}) {
    
    return(
        <>
            {
                todoList.length === 0 ? (<div>Empty list</div>) :
                    (<ul className={"list-container"} style={{listStyle: "none"}}>
                        {todoList.map((todo) => (
                                <TodoListItemComponent key={todo.id}
                                                       todo={todo} 
                                                       onDeleteHandler={onDeleteHandler} 
                                                       onCheckHandler={onCheckHandler}/>
                            )
                        )}
                    </ul>)
            }
        </>
        
    )
}