import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Success = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white">
      <TbRosetteDiscountCheckFilled className="animate-pulse text-8xl text-[#624DE3]" />
      <p className="text-2xl font-semibold text-gray-500">Request Successful</p>
    </div>
  );
};

export default Success;
