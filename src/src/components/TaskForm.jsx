import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) {
      setError('Please type a task first.')
      return
    }
    onAdd(trimmed)
    setText('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            if (error) setError('')
          }}
          placeholder="What do you need to do?"
          aria-label="New task"
          className="flex-1 min-w-0 rounded-xl bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 shadow-md transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Add Task
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
    </form>
  )
}
