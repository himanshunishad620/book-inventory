import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";

const TextArea = (props) => {
  return (
    <div className="flex w-full flex-col">
      <label className="text-sm font-medium text-gray-500">{props.label}</label>
      {/* <div className="relative"> */}
      {/* <BsTextParagraph className="absolute top-3 left-3 text-xl text-gray-400" /> */}
      <textarea
        rows={5}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder="e.g. A suspenseful mystery novel centered around..."
        className="w-full resize-none rounded-md border-2 border-gray-300 bg-[#f5f5f5] p-3 text-sm font-medium text-gray-700 outline-none"
      />
      {/* </div> */}
      <p className="h-4 text-[12px] text-red-500">{props.error}</p>
    </div>
  );
};

export default TextArea;
