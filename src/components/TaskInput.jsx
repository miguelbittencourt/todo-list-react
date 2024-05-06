const TaskInput = () => {
  return (
    <form className="flex justify-between flex-wrap sm:flex-nowrap gap-3 mb-4">
        <input className="w-full sm:w-96 border border-gray-100 rounded p-2" type="text" placeholder="Adicione uma nova tarefa" />
        <button className="w-full sm:w-36 mx-auto text-white bg-blue-500 hover:bg-blue-700 p-2 rounded" type="submit">Adicionar</button>
    </form>
  )
}

export default TaskInput