import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchInput = (props) => {
  return (
    <div className="relative max-w-60 md:max-w-90">
      <LuSearch className="absolute top-[50%] left-3 translate-y-[-50%] transform text-xl text-gray-400" />
      <input
        type="text"
        placeholder={props.placeholder}
        className="h-10 w-full rounded-md border-2 border-gray-300 px-10 outline-none"
      />
    </div>
  );
};

export default SearchInput;
