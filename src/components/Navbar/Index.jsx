import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchBar, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <div className="navbar bg-base-100 drop-shadow p-4 flex justify-between items-center">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold py-2 sm:text-lg">
            CatatRandom
          </a>
        </div>
        <div className="navbar-center hidden sm:flex flex-grow justify-center">
          <SearchBar
            value={searchBar}
            onChange={({ target }) => setSearchQuery(target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        </div>
        <div className="navbar-end">
          <ProfileInfo onLogout={onLogout} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
