import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function AddNewTask({ addTask, handleCloseNewTaskClick }) {
  // Menyimpan nilai dari task yang akan ditambahkan
  const [task, setTask] = useState("");

  // Terjadi perubahan pada input task
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  // Menambahkan task ke dalam daftar task
  const handleSubmit = () => {
    if (!task.trim()) {
      // Jika input task kosong atau hanya berisi whitespace
      alert("Please enter a valid task!");
      return;
    }
    addTask(task); // task = newTask
    setTask("");
    handleCloseNewTaskClick();
    alert("Task added successfully!"); // Menampilkan alert ketika tugas berhasil ditambahkan
  };

  return (
    <div
      className="font-poppins"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div>
        <div className="px-10">
          <div
            className="max-w-[700px] w-full mx-auto rounded-md mt-10 py-2 px-2 pb-5 pt-3"
            style={{ backgroundColor: "rgba(138, 43, 226, 0.5)" }}
          >
            <div className="max-w-[650px] mx-auto items-center text-center">
              <h1 className="text-2xl font-bold my-7">Input New Task</h1>
              <div className="flex items-center mb-3">
                <input
                  type="text"
                  value={task}
                  onChange={handleTaskChange}
                  placeholder="Enter your new task here..."
                  className="border-2 border-gray-300 rounded-md py-2 px-4 flex-grow focus:outline-none w-full"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mb-7 rounded-md focus:outline-none focus:ring w-full"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddNewTask;
