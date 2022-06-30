import React, {useState} from 'react';
import Input from './Input';

const Form = () => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState ([]);

    return (
        <form className='form'>
            <Input 
                inputText={inputText} 
                setInputText={setInputText} 
                todos={todos} 
                setTodos={setTodos} 
            />
            <select className='filter-todo' name="todos">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    )
}

export default Form
