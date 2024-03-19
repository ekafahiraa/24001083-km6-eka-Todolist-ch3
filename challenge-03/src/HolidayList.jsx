import React, { useState, useEffect } from "react";
import AddNewTask from "./AddNewTask";
import backgroundImage from "./Header.png"; // Mengimpor gambar latar belakang

function HolidayList() {
  const [originalTask, setOriginalTask] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [editedTask, setEditedTask] = useState("");
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  // Memperbarui state allTasks, completedTasks, dan pendingTasks saat terjadi perubahan pada state tasks
  useEffect(() => {
    setAllTasks(originalTask);
    setCompletedTasks(originalTask.filter((task) => task.completed));
    setPendingTasks(originalTask.filter((task) => !task.completed));
  }, [tasks]);

  const handleSearch = () => {
    // Memeriksa apakah search keyword kosong atau tidak
    if (!searchKeyword.trim()) {
      // Jika searchKeyword kosong atau hanya berisi whitespace
      alert("Please add a task before searching!");
      return;
    }
    // Melakukan pencarian dari task
    const filteredTasks = originalTask.filter((task) =>
      task.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    // Perbarui state tasks dengan hasil filter tersebut
    setTasks(filteredTasks);
  };

  // Menambahkan task baru ke dalam daftar task
  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, name: newTask }]);
    setOriginalTask([...tasks, { id: tasks.length + 1, name: newTask }]);
  };

  // Mengubah status selesai atau belum selesai dari tugas yang dipilih
  const checklistTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    setOriginalTask(updatedTasks);
  };

  // Mengedit tugas yang dipilih
  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    setOriginalTask(updatedTasks);
  };

  // Menghapus tugas yang dipilih setelah konfirmasi
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setOriginalTask(updatedTasks);
    if (confirm(`Do you want to delete this todo?`)) {
    }
  };

  // Menampilkan task yang belum selesai
  const showPendingTasks = () => {
    setTasks(pendingTasks);
  };

  // Menampilkan semua daftar task
  const showAllTasks = () => {
    setTasks(allTasks);
  };

  // Menampilkan task yang sudah selesai
  const showCompletedTasks = () => {
    setTasks(completedTasks);
  };

  // Menghapus semua task yang belum selesai setelah konfirmasi
  const handleDeletePendingTasks = () => {
    if (window.confirm("Are you sure want to delete all pending tasks?")) {
      const filteredTasks = originalTask.filter((task) => task.completed);
      setTasks(filteredTasks);
      setOriginalTask(filteredTasks);
    } else {
      alert("There are no pending tasks to delete.");
    }
  };

  // Menghapus semua task setelah konfirmasi
  const handleDeleteAllTasks = () => {
    if (window.confirm("Are you want to delete all tasks?")) {
      setTasks([]);
      setOriginalTask([]);
    }
  };

  // Menghapus semua task yang telah selesai setelah konfirmasi
  const handleDeleteCompletedTasks = () => {
    if (window.confirm("Are you sure want to delete all completed tasks?")) {
      const filteredTasks = originalTask.filter((task) => !task.completed);
      setTasks(filteredTasks);
      setOriginalTask(filteredTasks);
    }
  };

  // Menampilkan form untuk menambahkan tugas baru
  const handleAddNewTaskClick = () => {
    setShowAddNewTask(true);
  };

  // Menutup form untuk menambahkan tugas baru
  const handleCloseNewTaskClick = () => {
    setShowAddNewTask(false);
  };

  return (
    <div
      className="font-poppins"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Menambahkan background image
          backgroundSize: "cover", // Menutupi seluruh elemen
          backgroundPosition: "center", // Posisi gambar di tengah
          minHeight: "100vh", // Tinggi minimum 100% dari viewport
          padding: "20px", // Padding untuk isi dari div
          alignItems: "center",
        }}
      >
        <div>
          {!showAddNewTask ? (
            <div>
              <div className="p-10">
                <div
                  className="max-w-[700px] w-full mx-auto rounded-md mt-10 mb-10 py-2 px-2 pb-5 pt-3"
                  style={{ backgroundColor: "rgba(138, 43, 226, 0.5)" }}
                >
                  <div className="max-w-[650px] mx-auto items-center">
                    <h1 className="text-black text-4xl font-bold my-10 text-center">
                      Holiday Preparation List
                    </h1>
                    <div className="mb-7 flex flex-col items-center">
                      <input
                        type="text"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        className="border-[3px] flex-grow py-2 px-3 mb-3 w-full"
                        placeholder="Type your task here..."
                      />
                      <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring w-full"
                      >
                        Search
                      </button>
                    </div>
                    <div className="mb-7 border-black flex items-center">
                      <input
                        type="text"
                        className="border-[3px] flex-grow py-2 px-3 mr-5"
                        placeholder='Click to "Add New Task"'
                        readOnly
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 flex rounded-md focus:outline-none focus:ring"
                        onClick={handleAddNewTaskClick}
                      >
                        Add New Task
                      </button>
                    </div>

                    <div className="flex justify-between mb-7">
                      <button
                        onClick={showPendingTasks}
                        className="bg-[#FFD700] hover:bg-[#DAA520] text-black px-4 py-2 mr-2 flex-1 rounded-md focus:outline-none focus:ring"
                      >
                        Show Pending Tasks
                      </button>
                      <button
                        onClick={showAllTasks}
                        className="bg-[#F08080] hover:bg-[#DC143C] text-black px-4 py-2 mr-2 flex-1 rounded-md focus:outline-none focus:ring"
                      >
                        Show All Tasks
                      </button>
                      <button
                        onClick={showCompletedTasks}
                        className="bg-[#3CB371] hover:bg-[#2E8B57] text-black px-4 py-2 mr-2 flex-1 rounded-md focus:outline-none focus:ring"
                      >
                        Show Completed Tasks
                      </button>
                    </div>

                    <ul>
                      {tasks.map(
                        (
                          item,
                          index // Menampilkan dan mengedit data task dalam list
                        ) => (
                          <li
                            className={`border border-black bg-white rounded-md py-2 px-5 flex items-center justify-between mb-2 ${
                              item.completed ? "line-through" : ""
                            }`}
                            // Menggunakan flex untuk menyusun item secara horizontal dan justify-between untuk memisahkan item ke sisi kiri dan kanan
                            key={item.id}
                          >
                            {editIndex === index ? (
                              <input
                                className="border-2 border-gray-200 w-[300px]"
                                type="text"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                              />
                            ) : (
                              <div className="flex justify-between">
                                <span>{item.name}</span>
                              </div>
                            )}
                            <div>
                              {editIndex === index ? (
                                <button
                                  onClick={() => {
                                    const updatedTask = {
                                      ...item,
                                      name: editedTask,
                                    };
                                    editTask(index, updatedTask);
                                    setEditIndex(null); // Hapus indeks item yang sedang diedit
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    setEditIndex(index); // Set indeks item yang sedang diedit
                                    setEditedTask(item.name); // Set nilai editedTask dengan nilai teks dari item yang diedit
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                  >
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                  </svg>
                                </button>
                              )}
                              <button onClick={() => checklistTask(index)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                    clip-rule="evenodd"
                                  />
                                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                                </svg>
                              </button>
                              <button onClick={() => removeTask(index)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="flex justify-between mt-5 mb-5">
                      <button
                        onClick={handleDeletePendingTasks}
                        className="bg-[#FF0000] hover:bg-[#800000] text-white px-4 py-2 mr-2 flex-1 rounded-md focus:outline-none focus:ring"
                      >
                        Delete Pending Tasks
                      </button>
                      <button
                        onClick={handleDeleteAllTasks}
                        className="bg-[#FF0000] hover:bg-[#800000] text-white px-4 py-2 mr-2 flex-1 rounded-md focus:outline-none focus:ring"
                      >
                        Delete All Tasks
                      </button>
                      <button
                        onClick={handleDeleteCompletedTasks}
                        className="bg-[#FF0000] hover:bg-[#800000] text-white px-4 py-2 mr-2 flex-1 rounded-md focus:outline-none focus:ring"
                      >
                        Delete Completed Tasks
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <AddNewTask
              addTask={addTask}
              handleCloseNewTaskClick={handleCloseNewTaskClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HolidayList;
