import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./Butterfly.png"; // Mengimpor gambar latar belakang

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Mengatur gambar latar belakang
        backgroundSize: "cover", // Mengatur ukuran gambar agar menutupi seluruh elemen
        backgroundPosition: "center", // Mengatur posisi gambar di tengah
        height: "100vh", // Menjadikan tinggi elemen sama dengan tinggi viewport
        width: "100%", // Menjadikan lebar elemen sama dengan lebar viewport
        display: "flex", // Mengatur tata letak menjadi flex
        justifyContent: "center", // Mengatur konten agar berada di tengah secara horizontal
        alignItems: "center", // Mengatur konten agar berada di tengah secara vertikal
      }}
    >
      <div
        className="font-poppins"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="max-w-[1500px] mx-auto rounded-md mt-10 py-8"
          style={{
            backgroundColor: "rgba(138, 43, 226, 0.5)",
            padding: "50px", // Menambahkan padding untuk memperluas area transparan
          }}
        >
          <div className="max-w-[650px] mx-auto items-center">
            <div className="text-black text-4xl font-bold my-5 mb-14 text-center">
              GET THINGS DONE!
            </div>
            <div className="text-black text-2xl font-bold my-5 mb-7 text-center">
              Choose your:
            </div>
            <div className="flex flex-col mb-5">
              <button className="bg-[#FFFAF0] hover:bg-[#663399] px-4 py-2 mb-3 rounded-md focus:outline-none focus:ring">
                <Link to={`/holiday-list`}>To-Do-List</Link>
              </button>
              <button className="bg-[#FFFAF0] hover:bg-[#663399] px-4 py-2 mb-3 rounded-md focus:outline-none focus:ring">
                <Link to={`/add-new-task`}>Add New Task</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
