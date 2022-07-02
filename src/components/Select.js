import React, { useEffect } from 'react'

const Select = ({ todos, filteredTodos, setfilteredTodos, status, setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const filterHandler = () => {
    switch(status){
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

  //use Effect
  useEffect(() =>{
    filterHandler();
  }, [todos,status]); 

  return (
    <>
        <select onChange={statusHandler} className='select' name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
    </>
  )
}

export default Select
