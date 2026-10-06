export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="bg-slate-900 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span
          className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
            task.done
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-amber-400/20 text-amber-300'
          }`}
        >
          {task.done ? 'Done' : 'Not Done'}
        </span>
        <span
          className={`break-words min-w-0 ${
            task.done ? 'line-through text-slate-500' : 'text-slate-100'
          }`}
        >
          {task.text}
        </span>
      </div>

      <div className="flex gap-2 sm:shrink-0">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className={`flex-1 sm:flex-none text-sm font-semibold px-3 py-2 rounded-lg transition active:scale-95 ${
            task.done
              ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
          }`}
        >
          {task.done ? 'Mark Not Done' : 'Mark Done'}
        </button>
        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="flex-1 sm:flex-none text-sm font-semibold px-3 py-2 rounded-lg bg-rose-500 hover:bg-rose-400 text-white transition active:scale-95"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
