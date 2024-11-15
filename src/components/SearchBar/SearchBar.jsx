import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center w-full sm:w-80 px-4 bg-slate-100 rounded-lg">
      <input
        type="text"
        className="w-full text-sm bg-transparent outline-none py-3 sm:py-[15px]"
        placeholder="Cari disini..."
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-xl text-slate-400 hover:text-black mr-3 cursor-pointer"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="text-slate-400 hover:text-black cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
