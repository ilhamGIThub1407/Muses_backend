import React from "react";

const Header = () => {
  return (
    <div className="pl-4 fixed w-[calc(100vw-250px)] top-4 z-50">
      <div className="w-full rounded h-17.5 flex justify-between items-center p-4 bg-white">
        <input
          type="text"
          placeholder="search"
          className="px-3 py-2 rounded-md outline-0 
        border border-gray-300 focus:border-red-500 h-10"
        />
        
      </div>
    </div>
  );
};

export default Header;
