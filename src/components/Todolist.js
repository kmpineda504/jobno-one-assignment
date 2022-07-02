import React from 'react';
import Todo from './Todo';

const Todolist = ({ todos, setTodos, filteredTodos }) => {
    return (
        <section className='todo-container'>
            <ul >
                {filteredTodos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} 
                        todos={todos} 
                        setTodos={setTodos}
                    />     
                ))}
            </ul>
        </section>
  )
}

export default Todolist
