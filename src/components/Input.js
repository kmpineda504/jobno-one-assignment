import React from 'react'

const Input = ({ todos, setTodos, inputText, setInputText }) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed:false, id: Math.random() * 1000}
        ])
    }

    return (
        <div>
            <input onChange={inputTextHandler} className='todo-input' type="text" />
            <button onClick={submitTodoHandler} className='btn' type='submit'>Add</button>
        </div>
    )
}

export default Input
