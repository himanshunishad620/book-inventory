import React from "react";
import { BsCalendar2Month } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const YearInput = () => {
  const years = Array.from({ length: 26 }, (_, ind) => ind + 2001);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="w-full flex-col items-center">
      <label className="text-sm">Author</label>
      <div className="flex w-full items-center gap-3">
        <div className="relative w-1/2">
          <FaRegCalendar className="absolute top-[50%] left-3 translate-y-[-50%] transform text-lg text-gray-400" />
          <select className="h-10 w-full rounded-md border-2 border-gray-300 text-center text-gray-400 outline-none">
            {years.map((year) => (
              <option>{year}</option>
            ))}
          </select>
        </div>
        <div className="relative w-1/2">
          {/* <BsCalendar2Month /> */}
          <BsCalendar2Month className="absolute top-[50%] left-3 translate-y-[-50%] transform text-lg text-gray-400" />
          <select className="h-10 w-full rounded-md border-2 border-gray-300 text-center text-gray-400 outline-none">
            {months.map((month) => (
              <option>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="h-4 text-[10px]">lsd</p>
    </div>
  );
};

export default YearInput;
