import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import pic from "./images/pic.png"


function App() {
  const getData = () => {
    const data = JSON.parse(localStorage.getItem("items") || "[]");
    return data;
  };
  const [items, setItems] = useState(() => getData());
  const [tasks, setTasks] = useState("");

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddTask = () => {
    setItems([...items, tasks]);
    setTasks("");
  };

  const handleRemoveTask = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="bg-[#45ba87] text-center min-h-screen items-center justify-center space-y-14 p-10 ">
      <div className="flex items-center justify-center">
        <img src={pic} className="w-28 relative" alt="" />
        <h1 className="text-4xl font-bold text-white ">TODO LIST</h1>
      </div>
      <input
        className="bg-white p-3 mr-5 rounded-3xl border border-black w-96"
        type="text"
        placeholder="Add Task"
        onChange={handleChange}
        value={tasks}
      />
      <button
        disabled={tasks.length === 0}
        className="bg-black text-white p-3 px-6 rounded-3xl  "
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <div className="bg-white p-3 mr-5 rounded-3xl px-20 border border-black h-auto  items-center mx-auto justify-center">
        {items.map((tasks, index) => (
          <div
            className="justify-between flex flex-row flex-wrap items-center  border border-black rounded-3xl lg:px-8  lg:my-2 lg:py-3"
            key={index}
          >
            {tasks}
            <div>
              <button
                className="bg-black text-white p-3 rounded-3xl border "
                onClick={() => handleRemoveTask(index)}
              >
                Remove{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
