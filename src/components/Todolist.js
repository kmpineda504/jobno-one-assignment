import React from 'react';
import Todo from './Todo';

const Todolist = ({ todos }) => {
    return (
        <section className='todo-container'>
            <ul >
                {todos.map(todo => (
                    <Todo text={todo.text}/>     
                ))}
            </ul>
        </section>
  )
}

export default Todolist
