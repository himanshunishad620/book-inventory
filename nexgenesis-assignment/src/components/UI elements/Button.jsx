import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Button = (props) => {
  return (
    <div
      className={`${props.fullWidth ? "w-full" : "w-auto"} h-10 rounded-md bg-[#624DE3]`}
    >
      <button
        onClick={props.onClick}
        type={props.type}
        disabled={props.disabled}
        isLoading={props.isLoading}
        className="flex h-full w-full cursor-pointer items-center justify-center px-5 py-2 font-medium text-white"
      >
        {props.isLoading ? (
          <ImSpinner3 size={20} className="animate-spin" />
        ) : (
          props.text
        )}
      </button>
    </div>
  );
};

export default Button;
