import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';


const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () =>{
      setTodos(todos.filter((el) => el.id !== todo.id ));
    }

    return (
      <>
          <li>
              <p className='todo-item'>{text}</p>
              <button className='btn btn-secondary btn-check'><FaCheck/></button>
              <button onClick={deleteHandler} className='btn btn-secondary btn-delete'><FaTrash/></button>
          </li>
      </>
    )
}

export default Todo
