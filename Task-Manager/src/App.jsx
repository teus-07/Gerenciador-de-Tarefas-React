import { useState } from "react";
import AddTask from "./components/AddTask";
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
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onTaskAddSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="bg-slate-500 h-screen w-screen flex justify-center">
      <div className="space-y-4 w-[500px]">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onTaskAddSubmit={onTaskAddSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
