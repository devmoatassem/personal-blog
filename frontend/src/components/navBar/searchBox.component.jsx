import React, { useState } from "react";

const SearchBox = () => {
  const [searchboxshow, setSearchboxshow] = useState(false);
  return (
    <>
      <div
        className={
          (searchboxshow ? "block " : "hidden ") +
          "absolute border-b mt-0.5 py-4 px-[5vw] bg-white left-0 w-full top-full border-gray-200 md:block md:border-0 md:relative md:inset-0 md:p-0 md:w-auto "
        }
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 hover:bg-gray-200 md:w-auto py-3 pl-6 pr-[21%] md:pr-6 rounded-full focus:bg-transparent placeholder:text-gray-600 md:pl-12"
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-gray-600 mt-0.5"></i>
      </div>
      <button
        className="bg-gray-100 w-12 h-12 text-black rounded-full md:hidden flex items-center justify-center ml-auto"
        onClick={() => {
          setSearchboxshow(!searchboxshow);
        }}
      >
        <i className="fi fi-rr-search text-xl mt-1"></i>
      </button>
    </>
  );
};

export default SearchBox;
