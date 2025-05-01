import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 bg-slate-200 p-6 rounded-lg shadow-xl ring-1 ring-slate-900/5">
        {props.tasks.map((tasks) => (
          <li key={tasks.id} className="flex gap-2">
            <button
              onClick={()=> props.OnTaskClick(tasks.id)}
              className="bg-slate-400 text-white p-2 rounded-md w-full text-start"
            >
              {tasks.title}
              {/* {task.isCompleted ? "COMPLETED" : "INCOMPLETED"} */}
            </button>
            <button className="bg-slate-400 p-2 rounded-md ">
              <ChevronRightIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
