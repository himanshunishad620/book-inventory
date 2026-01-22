import React from "react";

const ListItem = () => {
  return (
    <tr className="even:bg-[#F7F6FE]">
      <td className="p-2">
        <img src="vite.svg" alt="book" className="h-8 w-8" />
      </td>
      <td className="p-2">Himanshu</td>
      <td className="p-2">Himanshu</td>
      <td className="p-2">Himanshu</td>
      <td className="p-2">
        <span className="cursor-pointer text-blue-500">Edit</span> |{" "}
        <span className="cursor-pointer text-red-500">Delete</span>
      </td>
    </tr>
  );
};

export default ListItem;
