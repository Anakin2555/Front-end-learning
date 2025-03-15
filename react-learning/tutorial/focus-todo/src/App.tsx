// @ts-nocheck
import {SetStateAction, useEffect, useState} from 'react'
import './App.css'
import * as crypto from "node:crypto";
import InputComponent from "./components/Input/InputComponent.tsx";
import TodoListComponent from "./components/List/TodoListComponent.tsx";

// interface Todo{
//     title: string,
//     completed: boolean,
// }


export default function App() {

    const [todoList, setTodoList] = useState(()=>{
        const localValue=localStorage.getItem("todoList")
        if(localValue){
            return JSON.parse(localValue)
        }else
            return []
    })
    // console.log('rendered')
    
    
    useEffect(()=>{
        localStorage.setItem("todoList", JSON.stringify(todoList))
    },[todoList])  // 当todoList 变化就会调用useEffect一次，相当于watch监视，如果数组内为空：只在组件挂载和卸载时调用。


    function onCheckHandler(id){
        setTodoList(todoList.map((item) => {
                    if (item.id === id) {
                        return {...item, completed:!item.completed}
                    } else {
                        return item
                    }
                })
        )
    }
    
    function onDeleteHandler(id){
        setTodoList(todoList.filter(item=> item.id !== id))
    }
    
    function submitInput(title){
        // event.preventDefault()
        // console.log(event)
        
        if(title!==''){
            setTodoList((current) => [...current, {id: Date.now().toString(), title: title, completed: false}])
        }else{
            alert('input can not be empty!')
        }
    }
    
    
    return (
        <>
            
            <h1>Todo List</h1>
            
            <InputComponent onSubmit={submitInput}></InputComponent>
            
            <TodoListComponent todoList={todoList} onCheckHandler={onCheckHandler} onDeleteHandler={onDeleteHandler}/>
        </>
    )
}

