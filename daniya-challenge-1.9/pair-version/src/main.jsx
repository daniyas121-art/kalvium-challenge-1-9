import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review project requirements", completed: false },
    { id: 2, title: "Finish README", completed: false },
    { id: 3, title: "Test both versions", completed: true }
  ]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  function addTask(event) {
    event.preventDefault();
    const value = title.trim();
    if (!value) return;

    setTasks([...tasks, { id: Date.now(), title: value, completed: false }]);
    setTitle("");
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const visibleTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="page">
      <section className="card">
        <header>
          <div>
            <small>DANIYA • PAIR VERSION</small>
            <h1>My Tasks</h1>
            <p>Keep today's work in one place.</p>
          </div>
        </header>

        <form className="composer" onSubmit={addTask}>
          <input
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Add a task..."
            aria-label="Task title"
          />
          <button>Add</button>
        </form>

        <nav className="tabs" aria-label="Task filters">
          {["all", "active", "completed"].map(option => (
            <button
              key={option}
              className={filter === option ? "selected" : ""}
              onClick={() => setFilter(option)}
            >
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          ))}
        </nav>

        <ul>
          {visibleTasks.map(task => (
            <li key={task.id}>
              <button className="task-row" onClick={() => toggleTask(task.id)}>
                <span className={`box ${task.completed ? "done" : ""}`}>
                  {task.completed ? "✓" : ""}
                </span>
                <span className={task.completed ? "task-title done-text" : "task-title"}>
                  {task.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {!visibleTasks.length && <p className="empty">No tasks here.</p>}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
