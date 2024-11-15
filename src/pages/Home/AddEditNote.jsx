import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AddTag from '../../components/Input/Tags';

Modal.setAppElement('#root');

const AddEditNote = ({ isOpen, onClose, onSave }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleAddTag = (newTag) => {
    setTags((prevTags) => [...prevTags, newTag]);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-box bg-base-100 relative"
      overlayClassName="modal modal-open"
    >
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs text-slate-500">JUDUL</label>
        <input
          type="text"
          className="input  w-full text-2xl text-slate-950"
          placeholder="Masukan Judul Disini"
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs text-slate-500">ISI</label>
        <textarea
          className="textarea bg-slate-100  textarea-lg text-lg  w-full text-slate-950"
          placeholder="Mau Ngisi Apa Nichh"
        ></textarea>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label className="text-xs text-slate-500">TAGS</label>
        <AddTag onAddTag={handleAddTag} />

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 text-xs text-slate-500 badge badge-outline badge-primary"
            >
              {tag}
              <button
                className="text-info text-xs"
                onClick={() => handleRemoveTag(tag)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="modal-action">
        <button className="btn btn-primary" onClick={onSave}>Tambah</button>
        <button className="btn" onClick={onClose}>Batal</button>
      </div>
    </Modal>
  );
};

export default AddEditNote;
