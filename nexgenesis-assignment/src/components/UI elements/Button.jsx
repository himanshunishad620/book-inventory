import React from "react";

const Button = (props) => {
  return (
    <div
      className={`${props.fullWidth ? "w-full" : "w-auto"} h-10 rounded-md bg-[#624DE3]`}
    >
      <button className="h-full w-full cursor-pointer justify-center px-5 py-2 font-medium text-white">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
