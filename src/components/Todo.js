import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const Todo = () => {
  return (
    <>
        <li className='todo-item'>HOLA</li>
        <button className='btn btn-secondary'><FaCheck/></button>
        <button className='btn btn-secondary'><FaTimes/></button>
    </>
  )
}

export default Todo
