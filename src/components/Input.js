import React from 'react';

const Input = ({ todos, setTodos, inputText, setInputText }) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {id: Math.random() * 100, text: inputText, completed:false, }
        ]);
        setInputText('');
    }

    return (
        <>
            <input 
                onChange={inputTextHandler}  
                type="text" 
                value={inputText}
                placeholder="Input to-do's here"
                className='input'
            />
            <button onClick={submitTodoHandler} className='btn btn-primary' type='submit'>Add</button>
        </>
    )
}

export default Input
