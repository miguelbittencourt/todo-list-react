import Task from './Task'

//recebe o array de tasks pela prop tasks e a função deleteTask pela prop onDeleteTask
const TaskList = ({tasks, onDeleteTask, onToogleTaskDone}) => {
    if(tasks.length === 0) {
      return (
        <h2 className='text-center'>Nao existem tarefas cadastradas!</h2>
      );
    } else {
      return (
        <ul className='flex flex-col gap-3 flex-wrap'>
          
          {/* mapeia o array recebido de tasks criando um componente Task para cada task, no componente passa a prop key como o id da task, a prop task sendo a task inteira e a prop onDelete sendo uma função anonima que chama o onDeleteTask(prop) passando o id da task*/}
          {tasks.map
            ((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={() => onDeleteTask(task.id)}
                onToogleDone={() => onToogleTaskDone(task.id)}
              />))
          }
        </ul>
      );
    }
}

export default TaskList;