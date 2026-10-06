import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Guide from './components/Guide'
import Footer from './components/Footer'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const clearDone = () => setTasks((prev) => prev.filter((t) => !t.done))
  const clearAll = () => setTasks([])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-2 items-start">
        <section
          aria-label="To-do list"
          className="bg-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl w-full"
        >
          <TaskForm onAdd={addTask} />
          <TaskList
            tasks={tasks}
            filter={filter}
            setFilter={setFilter}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onClearDone={clearDone}
            onClearAll={clearAll}
          />
        </section>
        <Guide />
      </main>
      <Footer />
    </div>
  )
}
