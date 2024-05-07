import { useState, useEffect } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'


function App() {
  //desestruturação do useState pegando um array chamado tasks e uma função chamada setTasks para atualizar o array
  const  [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  //função para adicionar uma task, recebe o parametro task
  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, done: false}]) //usa a função de atualizar o array mantendo as tasks ja existentes com rest operator e criando uma nova task sendo um objeto com id setado pela data, um titulo que é a task que o usuario digitou e por padrao done marcado como false
  }

  //função para deletar uma task, recebe o id da task que quer deletar
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task => task.id !== taskId))) //usa a função de atualizar o array filtrando as tasks do array fazendo com que a task que possui o id em questao fique de fora
  }

  //função para marcar uma tarefa como concluida
  const toogleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => {
      if(task.id === taskId) {
        return { ...task, done: !task.done }; // Atualiza a propriedade 'done' da tarefa
      } else {
        return task; // Retorna a tarefa sem modificação
      }
    }))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className='mx-auto sm:w-500px'>
      <h1 className='mb-4 text-3xl font-semibold text-gray-800'>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} /> {/*passa a função addTask pela prop onAddTask*/}
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToogleTaskDone={toogleTaskDone} /> {/*passa o array de tasks pela prop tasks e a função deleteTask pela prop onDeleteTask*/}
    </div>
  )
}

export default App;
