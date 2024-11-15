import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNote from "./AddEditNote";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Belajar React"
            date="2023-06-22"
            content="Belajar React itu mudah"
            tags={["#react"]}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      
      <button
        className="w-16 h-16 btn btn-square flex items-center justify-center rounded-2xl btn-primary fixed bottom-10 right-10 sm:bottom-8 sm:right-8 z-50"
        onClick={handleOpenModal}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <AddEditNote isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Home;
