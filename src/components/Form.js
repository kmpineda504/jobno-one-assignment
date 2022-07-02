import React, {useState, useEffect} from 'react';
import Input from './Input';
import Select from './Select';
import Todolist from './Todolist';


const Form = () => {
    //state stuffs
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState ([]);
    const [status, setStatus] = useState ("all");
    const [filteredTodos, setfilteredTodos] = useState ([]);
 
    //use effect - just once
    useEffect(() => {
        const getLocalTodos = () => {
            if (localStorage.getItem('todos') === null) {
                localStorage.setItem('todos', JSON.stringify([]));
            }
            else {
                let todoLocal = JSON.parse(localStorage.getItem('todos'));
                setTodos(todoLocal);
            }
        }

        getLocalTodos();
    }, []);

    //use effect - on changes in state
    useEffect(() => {
        //filter todos
        const filterHandler = () => {
            switch (status) {
                case 'completed':
                    setfilteredTodos(todos.filter(todo => todo.completed === true))
                    break;
                case 'uncompleted':
                    setfilteredTodos(todos.filter(todo => todo.completed === false));
                    break;
                default:
                    setfilteredTodos(todos);
                    break;
            }
        }
        //save to local
        const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        filterHandler();
        saveLocalTodos();
    }, [todos, status]); 
    
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
