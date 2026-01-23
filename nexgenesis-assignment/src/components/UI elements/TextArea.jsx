import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CgFeed } from "react-icons/cg";

const TextArea = (props) => {
  console.log(props);
  return (
    <div className="flex w-full flex-col">
      <label className="text-sm">{props.label}</label>
      {/* <div className="relative"> */}
      {/* <BsTextParagraph className="absolute top-3 left-3 text-xl text-gray-400" /> */}
      <textarea
        rows={5}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder="Enter para"
        className="w-full rounded-md border-2 border-gray-300 p-3 outline-none"
      />
      {/* </div> */}
      <p className="h-4 text-[10px]">{props.error}</p>
    </div>
  );
};

export default TextArea;
