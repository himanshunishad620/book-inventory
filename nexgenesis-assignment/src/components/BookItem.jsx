import IconButton from "./UI elements/IconButton";
import { FiEdit } from "react-icons/fi";
import { LuTrash2 } from "react-icons/lu";
import { useRemoveBookMutation } from "../api/booksApi";
import { useNavigate } from "react-router-dom";
import { formatMonthYear } from "../helper/date";
import { toast } from "react-toastify";

const BookItem = (book) => {
  const [removeBook] = useRemoveBookMutation();
  const navigate = useNavigate();

  const handleClick = () => navigate(`book/${book.id}`);
  const handleEdit = () => navigate(`edit/${book.id}`);

  const handleRemoveBook = async () => {
    try {
      await removeBook(book.id).unwrap();
      toast.success("Book Removed Successfuly!");
    } catch (error) {
      toast.error("Unable to proess request!");
    }
  };

  return (
    <tr className="border-b border-gray-300 even:bg-[#F7F6FE]">
      <td
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-center"
      >
        <img src={book.coverImg} className="mt-2 h-8 w-8" />
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
        {formatMonthYear(book.date)}
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
    </tr>
  );
};

export default BookItem;
