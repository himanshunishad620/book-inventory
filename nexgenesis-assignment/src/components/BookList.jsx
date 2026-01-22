import React from "react";
import Button from "./UI elements/Button";
import ListItem from "./ListItem";

const BookList = () => {
  return (
    <div className="w-full p-4">
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 rounded border px-3 py-2"
        />
        <Button />
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-amber-200">
          <tr>
            <th className="p-2 text-left">Image</th>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Author</th>
            <th className="p-2 text-left">Publisher</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
