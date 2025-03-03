"use client";  
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded-lg"
          placeholder="Enter task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Task
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((t, i) => (
          <li key={i} className="p-2 border-b">{t}</li>
        ))}
      </ul>
    </div>
  );
}
