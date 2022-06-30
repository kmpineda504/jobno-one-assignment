import React from 'react';
import Todo from './Todo';

const Todolist = () => {
  return (
    <section className='todo-container'>
        <ul >
            <Todo />
            <Todo />
            <Todo />
        </ul>
    </section>
  )
}

export default Todolist
