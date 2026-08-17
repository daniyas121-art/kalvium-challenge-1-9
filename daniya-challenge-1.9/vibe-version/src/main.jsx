import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const starterTasks = [
  { id: 1, title: "Review project requirements", completed: false },
  { id: 2, title: "Finish README", completed: false },
  { id: 3, title: "Test both versions", completed: true }
];

function Header() {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">DANIYA • CHALLENGE #4</p>
        <h1>Task Manager</h1>
        <p className="subtitle">Simple tasks. Clear progress.</p>
      </div>
      <div className="badge">Vibe Version</div>
    </header>
  );
}

function AddTask({ value, onChange, onAdd }) {
  return (
    <form className="add-form" onSubmit={onAdd}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a task and press Enter"
        aria-label="Task title"
      />
      <button type="submit">Add task</button>
    </form>
  );
}

function FilterBar({ filter, setFilter, counts }) {
  return (
    <div className="filters" aria-label="Task filters">
      {["all", "active", "completed"].map((item) => (
        <button
          key={item}
          className={filter === item ? "filter active-filter" : "filter"}
          onClick={() => setFilter(item)}
        >
          {item[0].toUpperCase() + item.slice(1)}
          <span>{counts[item]}</span>
        </button>
      ))}
    </div>
  );
}

function TaskList({ tasks, onToggle }) {
  if (!tasks.length) {
    return <div className="empty">No tasks in this filter.</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <button
          key={task.id}
          className={`task ${task.completed ? "completed" : ""}`}
          onClick={() => onToggle(task.id)}
        >
          <span className="check">{task.completed ? "✓" : ""}</span>
          <span>{task.title}</span>
        </button>
      ))}
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (event) => {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    setTasks((current) => [
      ...current,
      { id: Date.now(), title: trimmed, completed: false }
    ]);
    setTitle("");
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks;
  }, [tasks, filter]);

  const counts = {
    all: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length
  };

  return (
    <main className="page">
      <section className="app-shell">
        <Header />
        <AddTask value={title} onChange={setTitle} onAdd={addTask} />
        <FilterBar filter={filter} setFilter={setFilter} counts={counts} />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
