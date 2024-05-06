import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='mx-auto sm:w-500px'>
      <h1 className='mb-4 text-3xl font-semibold text-gray-800'>Lista de Tarefas</h1>
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
