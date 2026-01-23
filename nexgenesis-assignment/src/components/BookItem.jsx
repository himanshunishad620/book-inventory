import React from "react";
import IconButton from "./UI elements/IconButton";
import { FiEdit } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { useRemoveBookMutation } from "../api/booksApi";
import { Link, useNavigate } from "react-router-dom";

const BookItem = (book) => {
  const [removeBook, { isLoading }] = useRemoveBookMutation();
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`book/${book.id}`);
  };
  const handleEdit = (e) => {
    navigate(`edit/${book.id}`);
  };
  const handleRemoveBook = async (e) => {
    try {
      const res = await removeBook(book.id).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr className="border-b border-gray-300 even:bg-[#F7F6FE]">
      {/* <Link to={`book/${book.id}`} className="w-full"> */}
      <td
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-center"
      >
        <img src="book.jpg" className="mt-2 h-8 w-8" />
      </td>
      <td
        onClick={handleClick}
        className="h-12 max-w-20 cursor-pointer truncate pl-3 text-sm md:pl-6"
      >
        {book.author}
      </td>
      <td
        onClick={handleClick}
        className="max-w-20 cursor-pointer truncate p-0.5 text-center text-sm"
      >
        {book.publishedDate}
      </td>
      <td
        onClick={handleClick}
        className="max-w-20 cursor-pointer truncate p-0.5 text-sm"
      >
        {book.publisher}
      </td>
      <td className="p-1 text-right">
        <div className="flex justify-center gap-1.5 px-1 md:px-3">
          <IconButton
            onClick={handleEdit}
            icon={<FiEdit color={"#624DE3"} fontSize={20} />}
          />
          <IconButton
            onClick={handleRemoveBook}
            icon={<LuTrash2 color={"red"} fontSize={22} />}
          />
        </div>
      </td>
      {/* </Link> */}
    </tr>
  );
};

export default BookItem;
