import React, { useState } from 'react';

const AddTag = ({ onAddTag }) => {
  const [tag, setTag] = useState('');

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tag.trim()) {
      onAddTag(tag);
      setTag('');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="input  input-bordered w-50 text-slate-950"
        placeholder="#Candaa Misalnya"
      />
      <button
        onClick={handleAddTag}
        className="btn btn-primary text-white"
      >
        Tambah
      </button>
    </div>
  );
};

export default AddTag;
