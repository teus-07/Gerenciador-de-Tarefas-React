import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 bg-slate-200 p-6 rounded-lg shadow-xl ring-1 ring-slate-900/5">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 rounded-md w-full text-start cursor-pointer ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
              {/* {task.isCompleted ? "COMPLETED" : "INCOMPLETED"} */}
            </button>
            <button className="bg-slate-400 p-2 rounded-md ">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => props.onDeleteTaskClick(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md  text-start cursor-pointer"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
