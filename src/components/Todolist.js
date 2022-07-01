import React from 'react';
import Todo from './Todo';

const Todolist = ({ todos }) => {
    return (
        <section className='todo-container'>
            <ul >
                {todos.map(todo => (
                    <Todo key={todo.id} text={todo.text}/>     
                ))}
            </ul>
        </section>
  )
}

export default Todolist
