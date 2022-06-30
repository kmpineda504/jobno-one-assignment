import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const Todo = () => {
  return (
    <>
        <li>
            <p className='todo-item'>HEY</p>
            <button className='btn btn-secondary btn-check'><FaCheck/></button>
            <button className='btn btn-secondary btn-delete'><FaTimes/></button>
        </li>
    </>
  )
}

export default Todo
