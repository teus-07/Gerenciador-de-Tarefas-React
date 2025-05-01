import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Aprofundar os estudos em React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Aprofundar mais na Lógica de Programação",
      description: "Aprofundar meu conhecimento em lógica de programação",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId ) {
        return { ...task , isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="bg-slate-500 h-screen w-screen flex justify-center">
      <div>
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTasks />
      </div>
    </div>
  );
}

export default App;
