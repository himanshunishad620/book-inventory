import React from "react";

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
        className="h-full w-full cursor-pointer justify-center px-5 py-2 font-medium text-white"
      >
        {props.isLoading ? "Loading..." : props.text}
      </button>
    </div>
  );
};

export default Button;
