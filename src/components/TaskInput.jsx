import { useState } from "react"

//recebe a função addTask pela prop onAddTask
const TaskInput = ({onAddTask}) => {
  //desestruturação para pegar um valor input e uma função para atualizar o mesmo
  const [input, setInput] = useState("");

  //função para escutar o submit do form
  const handleSubmit = (e) => {
    
    e.preventDefault(); //prevenindo o evento padrao de recarregar a pagina
    //se o usuario digitou alguma coisa
    if(input.trim()){
      onAddTask(input); //chama a função que veio da prop mandando como parametro a task digitada pelo usuario
      setInput(""); //limpa o campo
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between flex-wrap sm:flex-nowrap gap-3 mb-4">
        <input className="w-full sm:w-96 border border-gray-100 rounded p-2" type="text" placeholder="Adicione uma nova tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="w-full sm:w-36 mx-auto text-white bg-blue-500 hover:bg-blue-700 p-2 rounded" type="submit">Adicionar</button>
    </form>
  )
}

export default TaskInput