const sections = [
  {
    title: 'How to Add a Task',
    steps: [
      'Type your task in the text box.',
      'Click "Add Task" (or press Enter).',
      'Your task appears in the list with a "Not Done" status.',
    ],
  },
  {
    title: 'How to Mark a Task as Done or Not Done',
    steps: [
      'Find the task in the list.',
      'Click "Mark Done" to set it to Done. The text gets a line through it.',
      'Click "Mark Not Done" on the same task to change it back.',
    ],
  },
  {
    title: 'How to Delete a Task',
    steps: [
      'Find the task you want to remove.',
      'Click the red "Delete" button next to it.',
      'Use "Clear Done" to remove all finished tasks, or "Clear All" to reset the whole list.',
    ],
  },
]

export default function Guide() {
  return (
    <section aria-label="User guide" className="space-y-6">
      {sections.map((s) => (
        <div key={s.title} className="bg-slate-900 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3 text-emerald-400">
            {s.title}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm sm:text-base">
            {s.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  )
}
