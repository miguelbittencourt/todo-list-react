import React from 'react'

//recebe a task pela prop task e a função deleteTask pela prop onDelete
const Task = ({task, onDelete, onToogleDone}) => {
  return (
    <li className='flex flex-wrap justify-between gap-3 items-center bg-white border-1 border-gray-50 py-2 px-4 rounded cursor-pointer'>
        <span onClick={onToogleDone} style={{textDecoration: task.done ? "line-through" : "none"}}>{task.text}</span>
        <button className='text-white bg-red-500 hover:bg-red-700 rounded p-2' onClick={onDelete}>
            Remover
        </button>
    </li>
  )
}

export default Task