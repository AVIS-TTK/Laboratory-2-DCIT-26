import TaskItem from './TaskItem'

const filters = [
  ['all', 'All'],
  ['notdone', 'Not Done'],
  ['done', 'Done'],
]

export default function TaskList({
  tasks,
  filter,
  setFilter,
  onToggle,
  onDelete,
  onClearDone,
  onClearAll,
}) {
  const doneCount = tasks.filter((t) => t.done).length

  const visible = tasks.filter((t) => {
    if (filter === 'done') return t.done
    if (filter === 'notdone') return !t.done
    return true
  })

  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex gap-2">
          {filters.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`text-sm px-3 py-1.5 rounded-full transition ${
                filter === key
                  ? 'bg-emerald-500 text-slate-950 font-semibold'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="text-sm text-slate-400">
          {doneCount} of {tasks.length} done
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-slate-500 py-8">
          {tasks.length === 0
            ? 'No tasks yet. Add one above!'
            : 'No tasks in this view.'}
        </p>
      ) : (
        <ul className="space-y-3">
          {visible.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <div className="flex gap-3 mt-5 pt-4 border-t border-slate-700">
          <button
            type="button"
            onClick={onClearDone}
            disabled={doneCount === 0}
            className="flex-1 text-sm font-semibold px-3 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Clear Done
          </button>
          <button
            type="button"
            onClick={onClearAll}
            className="flex-1 text-sm font-semibold px-3 py-2 rounded-lg bg-rose-500 hover:bg-rose-400 text-white transition"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  )
}
