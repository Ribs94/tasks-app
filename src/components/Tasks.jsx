import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 divide-y divide-stone-200">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center py-3"
            >
              <span className="font-normal hover:drop-shadow-[0_2px_6px_rgba(72,72,72,0.4)]">
                {task.text}
              </span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-500 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
