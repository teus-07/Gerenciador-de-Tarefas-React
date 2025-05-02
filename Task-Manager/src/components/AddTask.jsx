import { useState } from "react";

function AddTask({ onTaskAddSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col bg-slate-200 space-y-4 rounded-md p-6">
      <input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        className="border border-slate-300 py-4 px-6 outline-slate-400 rounded-md"
        type="text"
        placeholder="Insira o título da tarefa"
      />
      <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className="border border-slate-300 py-4 px-6 outline-slate-400 rounded-md"
        type="text"
        placeholder="Insira a descrição da tarefa"
      />
      <button
        onClick={() => {
          // validação das tarefas
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          onTaskAddSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 rounded-lg px-4 py-2 text-white font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
