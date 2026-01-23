import React from "react";
import { FiEdit } from "react-icons/fi";

const IconButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl"
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
