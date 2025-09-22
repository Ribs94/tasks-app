import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    setEnteredTask("");
    onAdd(enteredTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-500 hover:text-stone-800 hover:drop-shadow-[0_2px_6px_rgba(120,120,120,0.9)] text-xl font-bold transition"
      >
        ➕
      </button>
    </div>
  );
}
