import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const Todo = ({ text }) => {
  return (
    <>
        <li>
            <p className='todo-item'>{text}</p>
            <button className='btn btn-secondary btn-check'><FaCheck/></button>
            <button className='btn btn-secondary btn-delete'><FaTimes/></button>
        </li>
    </>
  )
}

export default Todo
