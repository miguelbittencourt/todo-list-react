import React from 'react'

const Task = () => {
  return (
    <li className='flex flex-wrap justify-between gap-3 items-center bg-white border-1 border-gray-50 py-2 px-4 rounded'>
        <span className=''>Um texto longo de tarefa bem comprido mesmo</span>
        <button className='text-white bg-red-500 hover:bg-red-700 rounded p-2'>
            Remover
        </button>
    </li>
  )
}

export default Task