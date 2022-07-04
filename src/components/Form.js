import React from 'react';
import Input from './Input';
import Select from './Select';
import Todolist from './Todolist';


const Form = ({inputText,
    setInputText,
    todos,
    setTodos,
    status,
    setStatus,
    filteredTodos,
    setfilteredTodos}) => {
    
    return (
        <>
            <form className='form'>
                <Input 
                    inputText={inputText} 
                    setInputText={setInputText} 
                    todos={todos} 
                    setTodos={setTodos}
                />
                <Select 
                    todos={todos} 
                    filteredTodos={filteredTodos}
                    setfilteredTodos={setfilteredTodos}
                    status={status}
                    setStatus={setStatus} 
                />
            </form>
            <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </>
    )
}

export default Form
