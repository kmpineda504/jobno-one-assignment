import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';


const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () =>{
      setTodos(todos.filter((el) => el.id !== todo.id ));
    };

    const completeHandler = () =>{
      setTodos(
        todos.map((item) => {
          if(item.id === todo.id){
            return{
              ...item, completed: !item.completed
            };
          }
          return item;
        })
      )
    };

    return (
      <>
          <li>
              <p className= {`todo-item ${todo.completed ? "completed" : ''}`}>{text}</p>
              <button onClick={completeHandler} className='btn btn-secondary btn-check'><FaCheck/></button>
              <button onClick={deleteHandler} className='btn btn-secondary btn-delete'><FaTrash/></button>
          </li>
      </>
    )
}

export default Todo
