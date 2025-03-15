// @ts-nocheck

import {useState} from "react";
import './InputComponent.css'

export default function InputComponent({onSubmit}){

    const [input, setInput] = useState('')
    
    function onInputHandler(e) {
        setInput(e.target.value)
    }
    
    function onSubmitHandler(e) {
        e.preventDefault()
        onSubmit(input)
        setInput('')
    }
    
    return (
        <form className="input-form" onSubmit={onSubmitHandler}>
                <input value={input} onChange={onInputHandler} 
                       id="inputEmail" type="text" placeholder="activity name"/>
                <button>Add</button>
        </form>
    )
}