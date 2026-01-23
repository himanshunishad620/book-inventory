import React from "react";
import { FiEdit } from "react-icons/fi";
import { LuTextCursorInput } from "react-icons/lu";

const TextInput = (props) => {
  const err = "Please enter valid details";
  return (
    <div className="w-full">
      <label className="text-sm">{props.label}</label>
      <div className="relative w-full">
        <LuTextCursorInput className="absolute top-[50%] left-3 translate-y-[-50%] transform text-xl text-gray-400" />
        <input
          type="text"
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="h-10 w-full rounded-md border-2 border-gray-300 bg-[#f5f5f5] px-10 outline-none"
        />
      </div>
      <p className="h-4 text-[10px]">{props.error}</p>
    </div>
  );
};

export default TextInput;
