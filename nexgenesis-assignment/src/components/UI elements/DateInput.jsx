import React from "react";
import { BsCalendar2Month } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { LuTextCursorInput } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";

const DateInput = (props) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium text-gray-500">{props.label}</label>
      <div className="relative w-full">
        <MdOutlineCalendarMonth className="absolute top-[50%] left-3 translate-y-[-50%] transform text-xl text-gray-400" />
        <input
          type="text"
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="h-10 w-full rounded-md border-2 border-gray-300 bg-[#f5f5f5] px-10 text-sm font-medium text-gray-700 outline-none"
        />
      </div>
      <p className="h-4 text-[12px] text-red-500">{props.error}</p>
    </div>
  );
};

export default DateInput;
