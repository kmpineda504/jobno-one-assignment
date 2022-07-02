import React from 'react'

const Select = ({ todos, filteredTodos, setfilteredTodos, status, setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

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
