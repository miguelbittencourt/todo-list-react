import Task from './Task'

const TaskList = () => {
  return (
    <ul className='flex flex-col gap-3 flex-wrap'>
        <Task />
        <Task />
        <Task />
        <Task />
    </ul>
  )
}

export default TaskList